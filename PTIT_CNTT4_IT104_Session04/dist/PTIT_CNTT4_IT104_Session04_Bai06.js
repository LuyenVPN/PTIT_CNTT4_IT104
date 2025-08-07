"use strict";
const listProduct = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        discount: 20,
        category: {
            id: "C001",
            name: "Thời trang nam"
        }
    },
    {
        id: "P002",
        name: "Quần jeans",
        price: 500000,
        category: {
            id: "C001",
            name: "Thời trang nam"
        }
    },
    {
        id: "P003",
        name: "Giày thể thao",
        price: 1000000,
        discount: 10,
        category: {
            id: "C002",
            name: "Phụ kiện"
        }
    }
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price - (product.price * product.discount) / 100;
    }
    return product.price;
}
function printProductInfo(product) {
    console.log(`\nTên: ${product.name}`);
    console.log(`Giá gốc: ${(product.price).toLocaleString("vi-VN")} VND`);
    if (product.discount) {
        console.log(`Giá sau giảm: ${getFinalPrice(product).toLocaleString("vi-VN")} VND`);
    }
    console.log(`Danh mục: ${product.category.name}\n`);
}
for (const product of listProduct) {
    printProductInfo(product);
}
