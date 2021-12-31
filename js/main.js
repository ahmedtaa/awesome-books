// class Books
class Book {
  constructor(title = null, author = null) {
    this.title = title;
    this.author = author;
    // the book collection
  }

  addToBookCollection() {
    const books = JSON.parse(localStorage.getItem('books'));
    const bookObj = {};
    bookObj.title = this.title;
    bookObj.author = this.author;
    books.push(bookObj);
    localStorage.setItem('books', JSON.stringify(books));
  }

  // loader
  loader = () => {
    const books = JSON.parse(localStorage.getItem('books'));
    document.getElementById('view').innerHTML = '';
    let article = '';
    books.forEach((book) => {
      article += `
            <article>
             <p class="book-title">${book.title}</p>
             <p class="author">${book.author}</p>
             <button class="remove" onclick="whatButton(this)">Remove</button>
             <hr>
              </article>
    `;
    });
    document.getElementById('view').innerHTML = article;
  };

  // remove a Book fn
  removeFromBookCollection() {
    let books = JSON.parse(localStorage.getItem('books'));
    books = books.filter((e) => e.title !== this.title);
    localStorage.setItem('books', JSON.stringify(books));
    this.loader();
  }
}

new Book().loader();

/* eslint-disable no-unused-vars */
function whatButton(button) {
  const book = new Book(button.parentElement.children[0].innerHTML);
  book.removeFromBookCollection();
}

// oldcode
function add() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title !== '' && author !== '') {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    const book = new Book(title, author);
    book.addToBookCollection();
    book.loader();
  } else {
    // implement a validation message
  }
}
