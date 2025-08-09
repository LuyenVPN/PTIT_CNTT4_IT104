"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `tieu de: ${this.title}, tac gia: ${this.author}`;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(addbook) {
        this.books.push(addbook);
    }
    listBooks() {
        if (this.books.length === 0) {
            console.log("khong co");
        }
        else {
            for (let b of this.books) {
                console.log(b.getInfo());
            }
        }
    }
}
const book1 = new Book("Sach 1", "A");
const book2 = new Book("Sach 2", "B");
const book3 = new Book("Sach 3", "C");
const book4 = new Book("Sach 4", "D");
const book5 = new Book("Sach 5", "E");
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.listBooks();
