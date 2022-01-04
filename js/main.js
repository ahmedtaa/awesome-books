// loader
function loader() {
  const books = JSON.parse(localStorage.getItem('books'));
  document.getElementById('view').innerHTML = '';
  const warning = document.querySelector('.warning');
  warning.style.visibility = 'hidden';
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
}

if (localStorage.getItem('books') === undefined) {
  const books = [];
  localStorage.setItem('books', JSON.stringify(books));
} else {
  loader();
}

// add a Book fn
function addToBookCollection(title, author) {
  const books = JSON.parse(localStorage.getItem('books'));
  const book = {};
  book.title = title;
  book.author = author;
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

// remove a Book fn
function removeFromBookCollection(title) {
  let books = JSON.parse(localStorage.getItem('books'));
  books = books.filter((e) => e.title !== title);
  localStorage.setItem('books', JSON.stringify(books));
  loader();
}

/* eslint-disable no-unused-vars */
function whatButton(button) {
  const titleToBeDeleted = button.parentElement.children[0].innerHTML;
  removeFromBookCollection(titleToBeDeleted);
}

// oldcode
function add() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title !== '' && author !== '') {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    addToBookCollection(title, author);
    loader();
  } else {
    const warning = document.querySelector('.warning');
    warning.style.visibility = 'visible';
  }
}
