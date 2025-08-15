// Lớp Customer (Khách hàng):
// Thuộc tính:
// id: Mã định danh khách hàng (số nguyên, tự động tăng).
// name: Tên khách hàng (chuỗi).
// email: Email của khách hàng (chuỗi).
// phone: Số điện thoại của khách hàng (chuỗi).
// Phương thức:
// getDetails(): Trả về chuỗi thông tin chi tiết của khách hàng.
class Customer{
    private static idCusAuto=1
    id:number
    name: string
    email: string
    phone: string
    constructor(name:string,email:string,phone:string) {
        this.id=Customer.idCusAuto++
        this.name=name
        this.email=email
        this.phone=phone
    }
    getDetails():void{
        console.log(`>>>>>>>>Thong Tin Khach Hang>>>>>>>>\n Id: ${this.id}\n Name: ${this.name} \n Email: ${this.email}\n Phone: ${this.phone}`);
    }
}
// Lớp Vehicle (Phương tiện - Abstract Class)
// Thuộc tính:
// id: Mã phương tiện (số nguyên, tự động tăng).
// type: Loại phương tiện (chuỗi, ví dụ: 'Car', 'Motorcycle').
// rentalPricePerDay: Giá thuê mỗi ngày (số thực).
// isAvailable: Trạng thái (true nếu sẵn sàng cho thuê, false nếu đã được thuê).
// Phương thức:
// rent(): Đánh dấu phương tiện đã được thuê (isAvailable = false).
// returnVehicle(): Đánh dấu phương tiện đã được trả lại (isAvailable = true).
// calculateRentalCost(days: number): number: (Abstract) Tính toán chi phí thuê dựa trên số ngày.
// getFeatures(): string[]: (Abstract) Trả về danh sách các tính năng đặc biệt của phương tiện.
// getInsurancePolicy(): string: (Abstract) Trả về thông tin chính sách bảo hiểm.
abstract class Vehicle{
    private static idVehicle=1
    id: number
    type: string
    rentalPricePerDay:number
    isAvailable:boolean
    constructor(type: string, rentalPricePerDay:number
        // ,isAvailable:boolean
    ) {
        this.id= Vehicle.idVehicle++
        this.type=type
        this.rentalPricePerDay=rentalPricePerDay
        this.isAvailable=true
    }
    rent():void{
        this.isAvailable=false
        console.log("Thue xe thanh cong");
    }
    returnVehicle():void{
        this.isAvailable=true
        console.log("Tra xe thanh cong");
    }
    abstract calculateRentalCost(days: number): number
    abstract getFeatures(): string[]
    abstract getInsurancePolicy(): string
}
// Các lớp con (kế thừa) của Vehicle
// Car:
// Tính năng: "Điều hòa", "GPS dẫn đường".
// Chính sách bảo hiểm: "Bảo hiểm toàn diện, miễn thường $500".
class Car extends Vehicle{
      constructor(rentalPricePerDay: number) {
        super(`car`, rentalPricePerDay);
    }
    calculateRentalCost(days: number): number {
        return this.rentalPricePerDay * days;
    }
    getFeatures(): string[] {
        return ["dieu hoa", "gps dan duong"];
    }
    getInsurancePolicy(): string {
        return "bao hiem toan dien, mien thuong $500";
    }
}
// Motorcycle:
// Tính năng: "Mũ bảo hiểm đi kèm".
// Chính sách bảo hiểm: "Bảo hiểm trách nhiệm dân sự cơ bản".
class Motorcycle extends Vehicle{
      constructor(rentalPricePerDay: number) {
        super(`Motorcycle`, rentalPricePerDay);
    }
    calculateRentalCost(days: number): number {
        return this.rentalPricePerDay * days;
    }
    getFeatures(): string[] {
        return ["mu bao hiem di kem"];
    }
    getInsurancePolicy(): string {
        return "bao hiem trach nhiem dan su co ban";
    }
}

// Truck:
// Tính năng: "Thùng hàng lớn", "Bửng nâng thủy lực".
// Chính sách bảo hiểm: "Bảo hiểm hàng hóa và phương tiện thương mại".
class Truck extends Vehicle{
      constructor(rentalPricePerDay: number) {
        super(`Truck`, rentalPricePerDay);
    }
    calculateRentalCost(days: number): number {
        return this.rentalPricePerDay * days;
    }
    getFeatures(): string[] {
        return ["Thung hang lon", "Bung nang thuy luc"];
    }
    getInsurancePolicy(): string {
        return "bao hiem hang hoa va phuong tien thuong mai";
    }
}
// Lớp Rental (Hợp đồng thuê xe):
// Thuộc tính:
// rentalId: Mã hợp đồng (số nguyên, tự động tăng).
// customer: Khách hàng thuê xe (Customer).
// vehicle: Phương tiện được thuê (Vehicle).
// days: Số ngày thuê (số nguyên).
// totalCost: Tổng chi phí (số thực).
// Phương thức:
// getDetails(): Trả về thông tin chi tiết của hợp đồng thuê.
class Rental{
    private static idRental=1
    rentalId:number
    customer: Customer
    vehicle: Vehicle
    days: number
    totalCost: number
    constructor(customer: Customer, vehicle: Vehicle, days: number) {
        this.rentalId = Rental.idRental++;
        this.customer = customer;
        this.vehicle = vehicle;
        this.days = days;
        // this.totalCost = vehicle.calculateRentalCost(days);
        this.totalCost = this.vehicle.rentalPricePerDay * this.days
    }

    getDetails(): string {
        return `ma hop dong: ${this.rentalId}, khach: ${this.customer.name}, xe: ${this.vehicle.type} (ma: ${this.vehicle.id}), so ngay: ${this.days}, tong chi phi: ${this.totalCost}`;
    }
}
//  Lớp RentalAgency (Công ty cho thuê):
// Thuộc tính:
// vehicles: Vehicle[]: Danh sách các phương tiện.
// customers: Customer[]: Danh sách khách hàng.
// rentals: Rental[]: Danh sách các hợp đồng đang hoạt động.
// Phương thức:
// addVehicle(vehicle: Vehicle): void: Thêm một phương tiện mới vào đội xe.
// addCustomer(name: string, email: string, phone: string): Customer: Thêm khách hàng mới.
// rentVehicle(customerId: number, vehicleId: number, days: number): Rental | null: Tạo hợp đồng cho thuê xe.
// returnVehicle(vehicleId: number): void: Nhận lại xe từ khách hàng.
// listAvailableVehicles(): void: Hiển thị danh sách các phương tiện đang sẵn sàng cho thuê (sử dụng filter).
// listCustomerRentals(customerId: number): void: Hiển thị các hợp đồng thuê của một khách hàng cụ thể (sử dụng filter).
// calculateTotalRevenue(): number: Tính tổng doanh thu từ tất cả các hợp đồng (sử dụng reduce).
// getVehicleTypeCount(): void: Đếm và hiển thị số lượng xe của từng loại (ví dụ: Car: 5, Motorcycle: 10) (sử dụng reduce hoặc map).
// getVehicleFeatures(vehicleId: number): void: Hiển thị các tính năng đặc biệt của một xe (sử dụng find).
// getVehicleInsurance(vehicleId: number): void: Hiển thị chính sách bảo hiểm của một xe (sử dụng find).
function findById<T extends {id: number}>(list: T[], id: number): T | undefined {
    return list.find(item => item.id === id);
}
class RentalAgency{
    vehicles: Vehicle[]=[]
    customers: Customer[]=[]
    rentals: Rental[]=[]
    addVehicle(vehicle: Vehicle): void{
        this.vehicles.push(vehicle)
    }
    addCustomer(name: string, email: string, phone: string): Customer{
        const customer= new Customer(name,email,phone)
        this.customers.push(customer)
        return customer
    }
    rentVehicle(customerId: number, vehicleId: number, days: number): Rental | null{
        const customer = findById(this.customers, customerId);
        const vehicle = findById(this.vehicles, vehicleId);
        if (!customer || !vehicle ) {
            console.log("khong tim thay khach hang hoac khong thay xe");
            return null;
        }
        if( !vehicle.isAvailable){
            console.log("xe da duoc thue");
            return null
        }
        vehicle.rent();
        const rental = new Rental(customer, vehicle, days);
        this.rentals.push(rental);
        console.log("tao hop dong thanh cong!");
        return rental;
    }
    returnVehicle(vehicleId: number): void {
        const vehicle = findById(this.vehicles, vehicleId);
        if (!vehicle) {
            console.log("khong tim thay xe");
            return;
        }
        vehicle.returnVehicle();
        console.log("tra xe thanh cong");
    }

    listAvailableVehicles(): void {
        const available = this.vehicles.filter(item => item.isAvailable);
        if (available.length === 0) {
            console.log("khong co xe trong kho");
            return;
        }
        console.log(">>>>>>Danh sach xe trong kho<<<<<<<");
        available.forEach(item =>
            console.log(`Ma xe: ${item.id}, loai xe: ${item.type}, Gia 1 ngay: ${item.rentalPricePerDay}`)
        );
    }

    listCustomerRentals(customerId: number): void {
        const rentals = this.rentals.filter(r => r.customer.id === customerId);
        if (rentals.length === 0) {
            console.log("khach hang chua co hop dong nao");
            return;
        }
        console.log(">>>>>>>>Hop dong cua Khach<<<<<<<");
        rentals.forEach(r => console.log(r.getDetails()));
    }

    calculateTotalRevenue(): number {
        return this.rentals.reduce((sum, r) => sum + r.totalCost, 0);
    }

    getVehicleTypeCount(): void {}

    getVehicleFeatures(vehicleId: number): void {
        const vehicle = findById(this.vehicles, vehicleId);
        if (!vehicle) {
            console.log("khong tim thay xe");
            return;
        }
        console.log(`tinh nang cua xe: ${vehicle.getFeatures().join(", ")}`);
    }

    getVehicleInsurance(vehicleId: number): void {
        const vehicle = findById(this.vehicles, vehicleId);
        if (!vehicle) {
            console.log("khong tim thay xe");
            return;
        }
        console.log(`chinh sach bao hiem: ${vehicle.getInsurancePolicy()}`);
    }
}
const agency = new RentalAgency();
const user1 = agency.addCustomer("Nguyen Van A", "a@gmail.com", "0123456789");
const user2 = agency.addCustomer("Le Thi B", "b@gmail.com", "0987654321");
agency.addVehicle(new Car(1000));
agency.addVehicle(new Car(1200));
agency.addVehicle(new Motorcycle(500));
agency.addVehicle(new Truck(2000));

agency.rentVehicle(user1.id, 1, 3);
agency.rentVehicle(user2.id, 3, 2);

agency.listAvailableVehicles();

agency.listCustomerRentals(user1.id);

console.log("tong doanh thu: " + agency.calculateTotalRevenue());

agency.getVehicleFeatures(1);
agency.getVehicleInsurance(1);

agency.returnVehicle(1);

agency.listAvailableVehicles();