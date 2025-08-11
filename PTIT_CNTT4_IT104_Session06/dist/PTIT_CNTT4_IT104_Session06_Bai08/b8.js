"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
}
class Member {
    constructor(id, name, contact, status, lendedBooks = []) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = lendedBooks;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getStatus() {
        return this.status;
    }
    getLendedBooks() {
        return this.lendedBooks;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() {
        return this.memberId;
    }
    getBookId() {
        return this.bookId;
    }
    getDueDate() {
        return this.dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thu vien chua co sach");
            return;
        }
        for (const b of this.books) {
            console.log(`ID: ${b.getId()}, Tieu de: ${b.getTitle()}, Tac gia: ${b.getAuthor()}, ` +
                `So luong: ${b.getStock()}, Tinh trang: ${b.getStatus()}`);
        }
    }
    addMember(member) {
        this.members.push(member);
    }
}
const library = new Library();
const book1 = new Book(1, "Dac nhan tam", "Dale Carnegie", 3, "co san");
const book2 = new Book(2, "Khong lam ma doi an", "Nguyen Van A", 5, "co san");
const book3 = new Book(3, "Viec nhe luong cao", "Tran Thi B", 0, "het hang");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
