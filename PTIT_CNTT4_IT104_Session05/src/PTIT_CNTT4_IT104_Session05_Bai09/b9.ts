class _$Book {
    private id: number;
    private title: string;
    private author: string;
    year: number;
    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId(): number {
        return this.id;
    }
    getInfo(): string {
        return `id: ${this.id}, tieu de: ${this.title}, tac gia: ${this.author}, nam: ${this.year}`;
    }
    setInfo(title: string, author: string, year: number): void {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class _$Library {
    private books: _$Book[] = [];
    addBook(book: _$Book): void {
        this.books.push(book);
    }
    listBooks(): void {
        if (this.books.length === 0) {
            console.log("khong co");
            return;
        }
        for (const b of this.books) {
            console.log(b.getInfo());
        }
    }
    deleteBookById(id: number) {
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
    updatebook(
        id: number,
        newTitle: string,
        newAuthor: string,
        newYear: number
    ): void {
        const book = this.books.find((b) => b.getId() === id);
        if (book) {
            book.setInfo(newTitle, newAuthor, newYear);
        } else {
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
