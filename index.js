class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('book-list');
    this.addBookForm = document.getElementById('add-book-form');

    this.renderBookList();
    this.addBookForm.addEventListener('submit', this.handleAddBook.bind(this));
  }

  handleRemoveBook(event) {
    const { index } = event.target.parentNode.dataset;
    this.removeBook(index);
    this.renderBookList();
  }

  removeBook(index) {
    this.books = this.books.filter((book, i) => i.toString() !== index);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  renderBookList() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('p');
      li.innerHTML = `${book.title} by ${book.author} <br> `;
      this.bookList.appendChild(li);
      li.dataset.index = index;
      const p = document.createElement('hr');

      const removeButton = document.createElement('button');
      removeButton.innerHTML = 'Remove';
      li.appendChild(removeButton);
      removeButton.addEventListener('click', this.handleRemoveBook.bind(this));
      li.appendChild(p);
    });
  }

  handleAddBook(event) {
    event.preventDefault();
    const title = this.addBookForm.title.value;
    const author = this.addBookForm.author.value;
    this.addBook(title, author);
    this.renderBookList();
    this.addBookForm.reset();
  }

  addBook(title, author) {
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

const bookCollection = new BookCollection();