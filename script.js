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


/* const addButton = document.querySelector('button');
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

addButton.addEventListener('click', boundFunc); */
// решил использовать bind для передачи аргумента в функцию в слушателе, но не до конца понятно как правильно его использовать
// да и вообще можно было обойтись без этого а сразу в условие писать input.value


// lesson 15


const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  // метод добавления стилей
  this.addStyles = function(elem) {
    elem.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background: ${this.bg};
      font-size: ${this.fontSize};
    `;
  };
  // метод создания элемента
  this.createElement = function(selector) {

    if(this.selector.startsWith(".")) {
      const newDiv = document.createElement("div");
      newDiv.classList.add(this.selector.substring(1));
      this.addStyles(newDiv);
      document.body.prepend(newDiv);
      newDiv.textContent = "это div";
    } else if(this.selector.startsWith("#")) {
      const newPar = document.createElement("p");
      newPar.id = this.selector.substring(1);
      this.addStyles(newPar);
      document.body.prepend(newPar);
      newPar.textContent = "это par"
    }
  };
};

const newClass = new DomElement(".class", "200px", "100px", "green", "20px");
const newId = new DomElement("#id", "100px", "200px", "yellow", "20px");
newClass.createElement();
newId.createElement();


// усложенное задание

const Square = function(selector, height, width, bg, fontSize, position, top, left, text) {
  DomElement.call(this, selector, height, width, bg, fontSize);
  this.position = position;
  this.top = top;
  this.left = left;
  this.text = text;
  // функция перемещения квадратика
  this.changePosition = function(elem, toLeft, toTop) {
    elem.style.position = this.position;
    this.top = this.top + toTop;
    this.left = this.left + toLeft;
    elem.style.top = this.top + "px";
    elem.style.left = this.left + "px"
  }
}
const newSquare = new Square(".class", "100px", "100px", "magenta", "20px", "absolute", 200, 200, "HARD");

// отрисовка квадратика после загрузки страницы
addEventListener('DOMContentLoaded', newSquare.createElement());

const createdSquare = document.querySelector(".class");
createdSquare.textContent = newSquare.text;
newSquare.changePosition(createdSquare, 0 ,0);
// слушатель на кнопки
addEventListener('keydown', (e) => {
  if(e.keyCode === 37) {
    newSquare.changePosition(createdSquare, -10, 0)
  } else if(e.keyCode === 39) {
    newSquare.changePosition(createdSquare, 10, 0)
  } else if(e.keyCode === 38) {
    newSquare.changePosition(createdSquare, 0, -10)
  } else if(e.keyCode === 40) {
    newSquare.changePosition(createdSquare, 0, 10)
  }
});



