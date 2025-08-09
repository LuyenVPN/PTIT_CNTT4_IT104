"use strict";
class _$Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `id: ${this.id}, tieu de: ${this.title}, tac gia: ${this.author}, nam: ${this.year}`;
    }
    setInfo(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class _$Library {
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
    deleteBookById(id) {
        const idx = this.books.findIndex((b) => b.getId() === id);
        if (idx === -1) {
            console.log(`khong tim thay sach`);
            return;
        }
        console.log("Truoc khi xoa:");
        this.listBooks();
        this.books.splice(idx, 1);
        console.log("Sau khi xoa:");
        this.listBooks();
    }
    updatebook(id, newTitle, newAuthor, newYear) {
        const book = this.books.find((b) => b.getId() === id);
        if (book) {
            book.setInfo(newTitle, newAuthor, newYear);
        }
        else {
            console.log(`khong thay`);
        }
    }
}
const libry = new _$Library();
libry.addBook(new _$Book(1, "Sach 1", "A", 2000));
libry.addBook(new _$Book(2, "Sach 2", "B", 2100));
libry.addBook(new _$Book(3, "Sach 3", "C", 2111));
libry.listBooks();
libry.updatebook(2, "Sach 5", "6", 1111);
libry.listBooks();
libry.deleteBookById(2);
libry.deleteBookById(8);
