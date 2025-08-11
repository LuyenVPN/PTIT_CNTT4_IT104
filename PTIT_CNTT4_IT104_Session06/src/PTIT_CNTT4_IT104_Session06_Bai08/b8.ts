class Book {
  private id: number;
  private title: string;
  private author: string;
  private stock: number;
  private status: string;
  constructor(
    id: number,
    title: string,
    author: string,
    stock: number,
    status: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.stock = stock;
    this.status = status;
  }
  getId(): number {
    return this.id;
  }
  getTitle(): string {
    return this.title;
  }
  getAuthor(): string {
    return this.author;
  }
  getStock(): number {
    return this.stock;
  }
  getStatus(): string {
    return this.status;
  }
}

class Member {
  private id: number;
  private name: string;
  private contact: string;
  private lendedBooks: LendedBook[];
  private status: string;
  constructor(
    id: number,
    name: string,
    contact: string,
    status: string,
    lendedBooks: LendedBook[] = []
  ) {
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.status = status;
    this.lendedBooks = lendedBooks;
  }
  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getContact(): string {
    return this.contact;
  }
  getStatus(): string {
    return this.status;
  }

  getLendedBooks(): LendedBook[] {
    return this.lendedBooks;
  }
}
class LendedBook {
  private memberId: number;
  private bookId: number;
  private dueDate: Date;
  constructor(memberId: number, bookId: number, dueDate: Date) {
    this.memberId = memberId;
    this.bookId = bookId;
    this.dueDate = dueDate;
  }
  getMemberId(): number {
    return this.memberId;
  }
  getBookId(): number {
    return this.bookId;
  }
  getDueDate(): Date {
    return this.dueDate;
  }
}
class Library {
  private books: Book[] = [];
  private members: Member[] = [];
  addBook(book: Book): void {
    this.books.push(book);
  }
  showBooks(): void {
    if (this.books.length === 0) {
      console.log("Thu vien chua co sach");
      return;
    }
    for (const b of this.books) {
      console.log(
        `ID: ${b.getId()}, Tieu de: ${b.getTitle()}, Tac gia: ${b.getAuthor()}, ` +
          `So luong: ${b.getStock()}, Tinh trang: ${b.getStatus()}`
      );
    }
  }
  addMember(member: Member): void {
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
