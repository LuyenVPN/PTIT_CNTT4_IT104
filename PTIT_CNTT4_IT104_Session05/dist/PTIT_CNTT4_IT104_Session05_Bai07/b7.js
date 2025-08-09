"use strict";
class _Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `id: ${this.id}, tieu de: ${this.title}, tac gia: ${this.author}`;
    }
    setInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
class _Library {
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
    updatebook(id, title, author) {
        const book = this.books.find((b) => b.getId() === id);
        if (book) {
            book.setInfo(title, author);
        }
        else {
            console.log(`khong thay`);
        }
    }
}
const libr = new _Library();
libr.addBook(new _Book(1, "Sach 1", "A"));
libr.addBook(new _Book(2, "Sach 2", "B"));
libr.addBook(new _Book(3, "Sach 3", "C"));
libr.listBooks();
libr.updatebook(2, "Sach 5", "6");
libr.listBooks();
