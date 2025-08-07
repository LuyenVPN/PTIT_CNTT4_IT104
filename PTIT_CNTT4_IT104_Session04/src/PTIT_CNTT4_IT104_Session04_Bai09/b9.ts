type MyProduct = {
  readonly id: string;
  name: string;
  price: number;
};

type MyOrderItem = {
  product: MyProduct;
  quantity: number;
  note?: string;
};

type MyOrder = {
  orderId: string;
  customerName: string;
  items: MyOrderItem[];
  deliveryAddress: string;
  isPaid: boolean;
};

type MyInvoice = {
  invoiceId: string;
  orders: MyOrder[];
  createdAt: Date;
};
function calculateInvoiceTotal(invoice: MyInvoice): number {
  let total = 0;
  for (let order of invoice.orders) {
    for (let item of order.items) {
      total += item.product.price * item.quantity;
    }
  }
  return total;
}

function getUnpaidOrders(invoice: MyInvoice): MyOrder[] {
  return invoice.orders.filter(order => !order.isPaid);
}

function printInvoice(invoice: MyInvoice){
  console.log(`HÓA ĐƠN: #${invoice.invoiceId} - Ngày tạo: ${invoice.createdAt.toISOString().split('T')[0]}`);
  console.log('----------------------------------------');
  for (let order of invoice.orders) {
    console.log(`\nĐƠN HÀNG: #${order.orderId} - ${order.customerName}`);
    let orderTotal = 0;
    for (let item of order.items) {
      const price = item.product.price * item.quantity;
      orderTotal += price;
      const noteText = item.note ? ` (note: ${item.note})` : '';
      console.log(`- ${item.product.name} × ${item.quantity} → ${price.toLocaleString('vi-VN')} VND${noteText}`);
    }
    console.log(`\nTổng đơn: ${orderTotal.toLocaleString('vi-VN')} VND`);
    console.log(`\nTrạng thái: ${order.isPaid ? 'ĐÃ THANH TOÁN' : 'CHƯA THANH TOÁN'}`);
  }
  const totalInvoice = calculateInvoiceTotal(invoice);
  console.log(`\n>> Tổng cộng hóa đơn: ${totalInvoice.toLocaleString('vi-VN')} VND`);
}
let invoice: MyInvoice = {
  invoiceId: 'INV001',
  createdAt: new Date('2024-05-14'),
  orders: [
    {
      orderId: 'ORD001',
      customerName: 'Nguyễn Văn A',
      deliveryAddress: 'Hà Nội',
      isPaid: true,
      items: [
        { product: { id: 'p1', name: 'Áo sơ mi', price: 250000 }, quantity: 2 },
        { product: { id: 'p2', name: 'Quần jean', price: 400000 }, quantity: 1 }
      ]
    },
    {
      orderId: 'ORD002',
      customerName: 'Trần Thị B',
      deliveryAddress: 'TP.HCM',
      isPaid: false,
      items: [
        { product: { id: 'p3', name: 'Váy hoa', price: 700000 }, quantity: 1, note: 'size M' }
      ]
    }
  ]
};

printInvoice(invoice);
