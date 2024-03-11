'use strict'

const bookShelf = document.querySelector('.books');
const booksArr = document.querySelectorAll('.book');

// 1 Восстановление порядка книг
bookShelf.prepend(booksArr[1]);
bookShelf.append(booksArr[2]);
booksArr[3].before(booksArr[4]);

// 2 Замена картинки заднего фона
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// 3 Исправление заголовка в книге 3
let newTitle = booksArr[4].querySelector('a').textContent.replace("Пропопипы", "Прототипы");
booksArr[4].querySelector('a').textContent = newTitle;

// 4 Удаление рекламы
const banner = document.querySelector('.adv');

banner.remove();

// 5 Восстановление порядка глав во второй и пятой книгах
const secondBook = booksArr[0].querySelectorAll('li');
const fifthBook = booksArr[5].querySelectorAll('li');
const sixthBook = booksArr[2].querySelectorAll('li');

secondBook[3].after(secondBook[6], secondBook[8]);
secondBook[secondBook.length - 1].before(secondBook[2])

fifthBook[fifthBook.length - 1].before(fifthBook[5], fifthBook[8]);
fifthBook[2].replaceWith(fifthBook[9]);
fifthBook[4].after(fifthBook[2]);

// 6 добавление главы
sixthBook[sixthBook.length - 1].insertAdjacentHTML('beforebegin', `<li>Глава 8: За пределами ES6</li>`);

