'use strict'

/* const bookShelf = document.querySelector('.books');
const booksArr = document.querySelectorAll('.book');

// 1
bookShelf.prepend(booksArr[1]);
bookShelf.append(booksArr[2]);
booksArr[3].before(booksArr[4]);

// 2
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// 3
let newTitle = booksArr[4].querySelector('a').textContent.replace("Пропопипы", "Прототипы");
booksArr[4].querySelector('a').textContent = newTitle;

// 4
const banner = document.querySelector('.adv');

banner.remove();

// 5
const secondBook = booksArr[0].querySelectorAll('li');
const fifthBook = booksArr[5].querySelectorAll('li');
const sixthBook = booksArr[2].querySelectorAll('li');

secondBook[3].after(secondBook[6], secondBook[8]);
secondBook[secondBook.length - 1].before(secondBook[2])

fifthBook[fifthBook.length - 1].before(fifthBook[5], fifthBook[8]);
fifthBook[2].replaceWith(fifthBook[9]);
fifthBook[4].after(fifthBook[2]);

// 6
const newBook = document.createElement('li').textContent = "Глава 8: За пределами ES6";

sixthBook[sixthBook.length - 1].before(newBook); */


const addButton = document.querySelector('button');
const list = document.querySelector('ul');
const input = document.querySelector('input');


const liAdd = function(elem) {
  if (elem.value) {
    list.insertAdjacentHTML('beforeend', `<li>${elem.value}</li>`);
    elem.value = "";
  }
    return console.log('Пустой инпут');


};
let boundFunc = liAdd.bind(null, input);

addButton.addEventListener('click', boundFunc);
// решил использовать bind для передачи аргумента в функцию в слушателе, но не до конца понятно как правильно его использовать
// да и вообще можно было обойтись без этого а сразу в условие писать input.value







