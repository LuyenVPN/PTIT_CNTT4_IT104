class Customer {
    private static currentId: number = 1
    public id: number;
    public name: string;
    public email: string;
    public shippingAddress: string;
    constructor(id: number, name: string, email: string, shippingAddress: string) {
        this.id = Customer.currentId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails(): void {
        console.log(`Id:${this.id}\n`);
        console.log(`Name:${this.name}`);
        console.log(`Email:${this.email}`);
        console.log(`ShippingAddress:${this.shippingAddress}`);
    }
}
abstract class Product {
    private static currentId: number = 1
    constructor(public id: number, public name: string, public price: number, public stock: number) {
        this.id = Product.currentId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity: number) {
        if (quantity <= 0) {
            console.log("So luong phai lon hon 0");
            return;
        }
        if (quantity > this.stock) {
            console.log("Khong du hang trong kho");
            return;
        }
        this.stock -= quantity;
        console.log(`da ban ${quantity} san pham .So luong ton kho con ${this.stock}`);

    }
    restock(quantity: number) {
        if (quantity <= 0) {
            console.log("So luong phai lon hon 0");
            return;
        }
        this.stock += quantity;
        console.log(`Da them ${quantity} sp.So lg ton kho con ${this.stock}`);

    }
    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
    getStock(): number {
        return this.stock;
    }
}
class ElectronicsProduct extends Product {

    constructor(public id: number, public name: string, public price: number, public stock: number, private warrantyPeriod: number) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo(): string {
        return `Điện tử: ${this.getName()} - Giá: ${this.getPrice()} VND - Tồn kho: ${this.getStock()} - Bảo hành: ${this.warrantyPeriod} tháng`;
    }
    getShippingCost(distance: number): number {
        return 50000;
    }
    getCategory(): string {
        return "Electronics"
    }
}
class ClothingProduct extends Product {
    private size: string;
    private color: string;

    constructor(public id: number, public name: string, public price: number, public stock: number, size: string, color: string) {
        super(id, name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo(): string {
        return `Quần áo: ${this.getName()} - Giá: ${this.getPrice()} VND - Tồn kho: ${this.getStock()} - Size: ${this.size} - Màu: ${this.color}`;
    }
    getShippingCost(distance: number): number {
        return 25000;
    }
    getCategory(): string {
        return "Clothing";
    }
}
class Order {
    private static currentOrderId: number = 1;
    public orderId: number;
    public customer: Customer;
    public products: { product: Product, quantity: number }[] = [];
    public totalAmount: number = 0;
    constructor(customer: Customer) {
        this.orderId = Order.currentOrderId++;
        this.customer = customer;
    }
    addProduct(product: Product, quantity: number) {
        if (quantity <= 0) {
            console.log("Số lượng phải > 0");
            return;
        }
        if (quantity > product.getStock()) {
            console.log(`Không đủ hàng cho sản phẩm: ${product.getName()}`);
            return;
        }
        this.products.push({ product, quantity });
        this.totalAmount += product.getPrice() * quantity;
        product.sell(quantity);
    }
    getDetails(): void {
        console.log(`Đơn hàng #${this.orderId}`);
        console.log(`Khách hàng: ${this.customer.name}`);
        console.log(`Địa chỉ giao hàng: ${this.customer.shippingAddress}`);
        console.log("Danh sách sản phẩm:");
        this.products.forEach(item => {
            console.log(`- ${item.product.getName()} | SL: ${item.quantity} | Giá: ${item.product.getPrice()} VND`);
        });
        console.log(`Tổng tiền: ${this.totalAmount} VND`);
    }
}
class Store {
    public products: Product[] = [];
    public customers: Customer[] = [];
    public orders: Order[] = []
    addProduct(product: Product): void {
        this.products.push(product);
    }
    addCustomer(id: number, name: string, email: string, address: string): void {
        const customer = new Customer(id, name, email, address);
        this.customers.push(customer);
    }
    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(item => item.id === id);
    }

    createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null {
        const customer = this.findEntityById(this.customers, customerId);
        if (!customer) {
            console.log("Không tìm thấy khách hàng.");
            return null;
        }

        const order = new Order(customer);

        for (const pq of productQuantities) {
            const product = this.findEntityById(this.products, pq.productId);
            if (!product) {
                console.log(`Không tìm thấy sản phẩm ID: ${pq.productId}`);
                continue;
            }
            order.addProduct(product, pq.quantity);
        }

        if (order.products.length > 0) {
            this.orders.push(order);
            return order;
        } else {
            console.log("Đơn hàng không có sản phẩm hợp lệ.");
            return null;
        }
    }


    cancelOrder(orderId: number): void {
        const orderIndex = this.orders.findIndex(o => o.orderId === orderId);
        if (orderIndex === -1) {
            console.log(`Không tìm thấy đơn hàng ID: ${orderId}`);
            return;
        }

        const order = this.orders[orderIndex];
        // if(!order){
        //     console.log(`Khong tim thay`);
        //     return;  
        // }
        order?.products.forEach(item => {
            const product = this.findEntityById(this.products, item.product.id);
            if (product) {
                product.stock += item.quantity;
            }
        });

        this.orders.splice(orderIndex, 1);
        console.log(`Đơn hàng ID: ${orderId} đã bị hủy và hoàn trả kho.`);
    }
    // 1. Hiển thị sản phẩm còn hàng
    listAvailableProducts(): void {
        const available = this.products.filter(p => p.getStock() > 0);
        console.log("Sản phẩm còn hàng:");
        available.forEach(p => console.log(p.getProductInfo()));
    }

    // 2. Hiển thị đơn hàng của 1 khách hàng
    listCustomerOrders(customerId: number): void {
        const customerOrders = this.orders.filter(o => o.customer.id === customerId);
        if (customerOrders.length === 0) {
            console.log(`Không có đơn hàng nào cho khách hàng ID ${customerId}`);
            return;
        }
        customerOrders.forEach(order => order.getDetails());
    }

    // 3. Tính tổng doanh thu
    calculateTotalRevenue(): number {
        return this.orders.reduce((total, order) => {
            const orderTotal = order.products.reduce((sum, op) => {
                return sum + op.product.getPrice() * op.quantity;
            }, 0);
            return total + orderTotal;
        }, 0);
    }

    // 4. Đếm sản phẩm theo danh mục
    countProductsByCategory(): void {
        const counts: Record<string, number> = {};

        for (const product of this.products) {
            const category = product.getCategory();
            if (!counts[category]) {
                counts[category] = 1;
            } else {
                counts[category]++;
            }
        }
        console.log("Số lượng sản phẩm theo danh mục:", counts);
    }

    // 5. Cập nhật tồn kho
    updateProductStock(productId: number, newStock: number): void {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.restock(newStock - product.getStock());
            console.log(`Cập nhật tồn kho cho sản phẩm ID ${productId} thành ${newStock}`);
        } else {
            console.log("Không tìm thấy sản phẩm");
        }
    }

}
const store = new Store();

let choice;
do {
    console.log("\n===== MENU =====");
    console.log("1. Thêm khách hàng");
    console.log("2. Thêm sản phẩm");
    console.log("3. Tạo đơn hàng");
    console.log("4. Hủy đơn hàng");
    console.log("5. Xem sản phẩm còn hàng");
    console.log("6. Xem đơn hàng của khách hàng");
    console.log("7. Tính tổng doanh thu");
    console.log("8. Thống kê sản phẩm theo danh mục");
    console.log("9. Cập nhật tồn kho");
    console.log("10. Tìm kiếm thông tin theo ID (Customer/Product)");
    console.log("11. Xem chi tiết sản phẩm");
    console.log("0. Thoát");

    choice = Number(prompt("Chọn chức năng:"));

    switch (choice) {
        case 1:
            store.addCustomer(
                store.customers.length + 1,
                prompt("Nhập tên khách hàng:")!,
                prompt("Nhập email:")!,
                prompt("Nhập địa chỉ giao hàng:")!
            );
            break;
        case 2:
            const type = prompt("Loại sản phẩm (1: Electronics, 2: Clothing):");
            if (type === "1") {
                store.addProduct(new ElectronicsProduct(
                    store.products.length + 1,
                    prompt("Tên sản phẩm:")!,
                    Number(prompt("Giá:")),
                    Number(prompt("Số lượng:")),
                    Number(prompt("Bảo hành (tháng):"))
                ));
            } else {
                store.addProduct(new ClothingProduct(
                    store.products.length + 1,
                    prompt("Tên sản phẩm:")!,
                    Number(prompt("Giá:")),
                    Number(prompt("Số lượng:")),
                    prompt("Size:")!,
                    prompt("Màu:")!
                ));
            }
            break;
        case 3:
            const cid = Number(prompt("Nhập ID khách hàng:"));
            const pid = Number(prompt("Nhập ID sản phẩm:"));
            const qty = Number(prompt("Số lượng:"));
            store.createOrder(cid, [{ productId: pid, quantity: qty }]);
            break;
        case 4:
            store.cancelOrder(Number(prompt("Nhập ID đơn hàng:")));
            break;
        case 5:
            store.listAvailableProducts();
            break;
        case 6:
            store.listCustomerOrders(Number(prompt("Nhập ID khách hàng:")));
            break;
        case 7:
            console.log("Tổng doanh thu:", store.calculateTotalRevenue());
            break;
        case 8:
            store.countProductsByCategory();
            break;
        case 9:
            store.updateProductStock(
                Number(prompt("Nhập ID sản phẩm:")),
                Number(prompt("Nhập số lượng mới:"))
            );
            break;
        case 10:
            const entityType = prompt("Bạn muốn tìm (1: Customer, 2: Product):");
            const searchId = Number(prompt("Nhập ID cần tìm:"));

            if (entityType === "1") {
                const customer = store.findEntityById(store.customers, searchId);
                if (customer) {
                    customer.getDetails();
                } else {
                    console.log(" Không tìm thấy khách hàng.");
                }
            } else if (entityType === "2") {
                const product = store.findEntityById(store.products, searchId);
                if (product) {
                    console.log(product.getProductInfo());
                } else {
                    console.log(" Không tìm thấy sản phẩm.");
                }
            } else {
                console.log(" Loại tìm kiếm không hợp lệ!");
            }
            break;

        case 11:
            const detailId = Number(prompt("Nhập ID sản phẩm cần xem chi tiết:"));
            const productDetail = store.findEntityById(store.products, detailId);

            if (!productDetail) {
                console.log(" Không tìm thấy sản phẩm.");
            } else {
                console.log("===== Chi tiết sản phẩm =====");
                console.log(`Tên: ${productDetail.getName()}`);
                console.log(`Giá: ${productDetail.getPrice()}`);
                console.log(`Tồn kho: ${productDetail.getStock()}`);
                console.log(`Danh mục: ${productDetail.getCategory()}`);

                if (productDetail instanceof ElectronicsProduct) {
                    console.log(`Bảo hành: ${productDetail["warrantyPeriod"]} tháng`);
                } else if (productDetail instanceof ClothingProduct) {
                    console.log(`Size: ${productDetail["size"]}`);
                    console.log(`Màu: ${productDetail["color"]}`);
                }
            }
            break;

        case 0:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
    }
} while (choice !== 0);
