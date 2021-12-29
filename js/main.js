/* eslint-disable no-unused-vars */
function remove(button) {
  const b = button.parentElement.parentElement;
  b.parentElement.removeChild(b);
}
// loader
function add(addButton) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title !== '' && author !== '') {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    const article = document.createElement('article');
    article.classList.add('row');
    article.innerHTML = `
           <div class="book">
                <p class="title"> ${title} </p>
                <p class="author">by ${author} </p>
            </div>
            <div class="close">
                <a class="remove" onclick="remove(this)" href="#"><i class="fas fa-window-close fa-2x"></i></a>
            </div>
    `;
    document.getElementById('view').append(article);
  } else {
    // implement a validation message
  }
}
