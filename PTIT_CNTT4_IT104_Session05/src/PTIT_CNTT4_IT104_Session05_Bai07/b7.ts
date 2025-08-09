class _Book {
  private id: number;
  private title: string;
  private author: string;
  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  getId(): number {
    return this.id;
  }
  getInfo(): string {
    return `id: ${this.id}, tieu de: ${this.title}, tac gia: ${this.author}`;
  }
  setInfo(title: string, author: string): void {
    this.title = title;
    this.author = author;
  }
}

class _Library {
  private books: _Book[] = [];
  addBook(book: _Book): void {
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
  updatebook(id: number, title: string, author: string): void {
    const book = this.books.find((b) => b.getId() === id);
    if (book) {
      book.setInfo(title, author);
    
    } else {
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