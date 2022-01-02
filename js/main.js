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
            <div class="book">
                <p class="title"> ${title} </p>
                <p class="author">by ${author} </p>
            </div>
            <div class="close">
                <a class="remove" onclick="remove(this)" href="#"><i class="fas fa-window-close fa-2x"></i></a>
            </div>
    `;
      document.getElementById('view').append(article);
   
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
