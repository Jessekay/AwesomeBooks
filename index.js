
// de5fine the book collection 
let books = [];

// getting the inputs
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('add-book');
const removeButton = document.getElementById('remove-book');

// render the books on the page
const bookList = document.querySelector('#book ul');
function renderBook() {
bookList.innerHTML = "";
book.forEach((book,index) => {
    const listItem = document.createElement(li);
    listItem.innerHTML = `${book.title} by ${book.author}<button data-index "${index}">Remove</button>`
    bookList.appendChild(listItem);
}); 
}

// adding a book to the collection

function addBook(title,author){
    const book = {title,author}
    book.push(book);
    renderBook();
}

// remove a book from the collection 

function removeBook(index){
    const book = book.filter((book,i) => i !== index);
    renderBook(); 
}