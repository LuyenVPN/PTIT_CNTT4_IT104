"use strict";
class __Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getInfo() {
        return `id: ${this.id}, tieu de: ${this.title}, tac gia: ${this.author}`;
    }
    setInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
class __Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        if (this.books.length === 0) {
            console.log("khong co");
            return;
        }
        for (const b of this.books) {
            console.log(b.getInfo());
        }
    }
    searchBook(keyword) {
        let found = false;
        for (const book of this.books) {
            if (book.getTitle().toLowerCase().includes(keyword.toLowerCase())) {
                console.log(book.getInfo());
                found = true;
            }
        }
        if (!found) {
            console.log("khong tim thay sach");
        }
    }
}
const lbr = new __Library();
lbr.addBook(new __Book(1, "Sach 1", "A"));
lbr.addBook(new __Book(2, "xach 2", "B"));
lbr.addBook(new __Book(3, "Sach 3", "C"));
lbr.listBooks();
lbr.searchBook("Sach");
lbr.searchBook("b");
