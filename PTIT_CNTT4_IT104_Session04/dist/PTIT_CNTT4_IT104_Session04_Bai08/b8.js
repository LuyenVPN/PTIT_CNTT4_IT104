"use strict";
function calculateOrderTotal(order) {
    let total = 0;
    for (let i = 0; i < order.items.length; i++) {
        total += order.items[i].product.price * order.items[i].quantity;
    }
    return total;
}
function printOrder(order) {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log("Sản phẩm:");
    for (let i = 0; i < order.items.length; i++) {
        const item = order.items[i];
        const name = item.product.name;
        const quantity = item.quantity;
        const price = item.product.price * quantity;
        console.log(`- ${name} × ${quantity} → ${price.toLocaleString()} VND`);
    }
    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total.toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
let product1 = { id: "P001", name: "Áo sơ mi", price: 250000 };
let product2 = { id: "P002", name: "Quần tây", price: 400000 };
const order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: product1, quantity: 2 },
        { product: product2, quantity: 1 }
    ],
    note: "Giao sau 18h"
};
printOrder(order);
