// Book class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Library class
class Library {
  static getBooks() {
    const books = JSON.parse(localStorage.getItem('books'));
    return books || [];
  }

  static addBook(book) {
    const books = Library.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(book) {
    let books = Library.getBooks();
    books = books.filter((currentBook) => !(currentBook.title === book.title && currentBook.author === book.author));
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    const books = Library.getBooks();
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach((book) => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
      bookElement.innerHTML = `
        <div>
          <span><strong>Title:</strong> ${book.title}</span>
          <span><strong>Author:</strong> ${book.author}</span>
        </div>
        <button class="delete">Remove</button>
      `;
      bookList.appendChild(bookElement);
    });
  }

  static addBookFromUI() {
    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    const book = new Book(title, author);
    Library.addBook(book);
    Library.displayBooks();
    titleInput.value = '';
    authorInput.value = '';
  }

  static removeBookFromUI(target) {
    if (target.classList.contains('delete')) {
      const bookElement = target.parentElement;
      const title = bookElement.querySelector('span:first-child').textContent.split(': ')[1];
      const author = bookElement.querySelector('span:nth-child(2)').textContent.split(': ')[1];
      const book = new Book(title, author);
      Library.removeBook(book);
      Library.displayBooks();
    }
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', Library.displayBooks);

const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  Library.addBookFromUI();
});

const bookList = document.getElementById('book-list');
bookList.addEventListener('click', (e) => {
  Library.removeBookFromUI(e.target);
});

const list = document.getElementById('list');
list.addEventListener('click', (e) => {
  e.preventDefault();
  const booklist = document.querySelector('#book-list');
  const addBookForm = document.querySelector('#addBookForm');
  const contact = document.querySelector('.contact');
  const heading = document.querySelector('#heading1');
  booklist.style.display = 'block';
  addBookForm.style.display = 'none';
  heading.style.display = 'block';
  contact.style.display = 'none';
});

const add = document.getElementById('add');
add.addEventListener('click', (e) => {
  e.preventDefault();
  const addBookForm = document.querySelector('#addBookForm');
  const heading = document.querySelector('#heading1');
  const contact = document.querySelector('.contact');
  addBookForm.style.display = 'flex';
  const booklist = document.querySelector('#book-list');
  booklist.style.display = 'none';
  contact.style.display = 'none';
  heading.style.display = 'none';
});

const contact = document.getElementById('contact');
contact.addEventListener('click', (e) => {
  e.preventDefault();
  const addBookForm = document.querySelector('#addBookForm');
  const heading = document.querySelector('#heading1');
  const contact = document.querySelector('.contact');
  addBookForm.style.display = 'none';
  const booklist = document.querySelector('#book-list');
  contact.style.display = 'flex';
  booklist.style.display = 'none';
  heading.style.display = 'none';
});
