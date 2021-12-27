/* eslint-disable no-unused-vars */
function whatButton(button) {
  button.parentElement.parentElement.removeChild(button.parentElement);
}
// loader
function add(addButton) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title !== '' && author !== '') {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    const article = document.createElement('article');
    article.innerHTML = `
  
            <p class="book-title">${title}</p>
             <p class="author">${author}</p>
             <button class="remove" onclick="whatButton(this)">Remove</button>
             <hr>
    `;
    document.getElementById('view').append(article);
  } else {
    // implement a validation message
  }
}
