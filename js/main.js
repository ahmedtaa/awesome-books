// class Books
class Book {
  constructor(title = null, author = null) {
    this.title = title;
    this.author = author;
    // the book collection
  }

  addToBookCollection() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const bookObj = {};
    bookObj.title = this.title;
    bookObj.author = this.author;
    books.push(bookObj);
    localStorage.setItem('books', JSON.stringify(books));
  }

  // loader
  loader = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    document.getElementById('view').innerHTML = '';
    let article = '';
    books.forEach((book) => {
      article += `
      <article class="row">
            <div class="book">
                <p class="title"> ${book.title} </p>
                <p class="author">by ${book.author} </p>
            </div>
            <div class="close">
                <a class="remove" onclick="remove(this)" href="#"><i class="fas fa-window-close fa-2x"></i></a>
            </div>
            </article>
    `;
    });
    document.getElementById('view').innerHTML = article;
  };

  // remove a Book fn
  removeFromBookCollection() {
    let books = JSON.parse(localStorage.getItem('books'));
    books = books.filter((book) => book.title.trim() !== this.title.trim());
    localStorage.setItem('books', JSON.stringify(books));
    this.loader();
  }
}

new Book().loader();

/* eslint-disable no-unused-vars */
function remove(button) {
  const parent = button.parentElement.parentElement;
  const title = parent.children[0].children[0].innerHTML;
  const book = new Book(title);
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
