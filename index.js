// de5fine the book collection
const book = [];

// getting the inputs
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('add-book');
const removeButton = document.getElementById('remove-book');

// render the books on the page
const bookList = document.querySelector('#book ul');
function renderBook() {
  bookList.innerHTML = '';
  book.forEach((book, index) => {
    const listItem = document.createElement(li);
    listItem.innerHTML = `${book.title} by ${book.author}<button data-index "${index}">Remove</button>`;
    bookList.appendChild(listItem);
  });
}

// adding a book to the collection

function addBook(title, author) {
  const book = { title, author };
  book.push(book);
  renderBook();
}

// remove a book from the collection

function removeBook(index) {
  const book = book.filter((books, i) => i !== index);
  renderBook();
}

// load the saved books from localStorage
if (localStorage.hetItem('book')) {
  book = JSON.parse(localStorage.getItem('book'));
  renderBook();
}

// Add event listerners to the buttons
addButton.addEventListener('click', () => {
  const title = titleInput.ariaValueMax;
  const author = authorInput.ariaValueMax;
  addBook(title, author);
  localStorage.setItem('book', JSON.stringify(book));
  title.value = '';
  authorInput.value = '';
});

bookList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const index = parseInt(event.target.dataset.index, 10);
    removeBook(index);
    localStorage.setItem('book', JSON.stringify(book));
  }
});

removeButton.addEventListener('click', () => {
  book = [];
  renderBook();
  localStorage.setItem('book', JSON.stringify(book));
});
