'use strict'

/* const sumBtn = document.querySelector("#sum");
const multiBtn = document.querySelector("#mult");
const resultInput = document.querySelector("#res");
const aInput = document.querySelector("#a");
const bInput = document.querySelector("#b");

const calculator = {
  sum: function(a, b){
    return a + b;
  },
  mult: function(a, b){
    return a * b;
  },
  show: function(a, b){
    document.addEventListener("click", (e) => {
      if (e.target.closest("#sum")) {
        resultInput.value = this.sum(+a.value, +b.value)
      } else if(e.target.closest("#mult")) {
        resultInput.value = this.mult(+a.value, +b.value)
      }
    });
  },
};

const boundCalc = calculator.show.call(calculator, aInput, bInput);

sumBtn.addEventListener("click", boundCalc);
multiBtn.addEventListener("click", boundCalc); */

// Задание 2

/* function getResult(x, y){
  let result = x ** y;
  let arr = []
  let str = result.toString();

  for (let i = 0; i < str.length; i++) {
    const element = str.slice(i);
    arr.push(element.slice(0, 1))
  };
  result = arr.reduce((sum, curr) => +sum + +curr);
  return result
}

console.log(getResult(4, 8)) */

// Задание 3

// const result = document.querySelector(".result");
// const countrySelect = document.querySelector("#country");
// const citySelect = document.querySelector("#city");

// добавил счётчик для события click, а не change
// let count = 0;
// по событию change не удавалось вывести список городов если кликаю по первому option
// можно было добавить еще один вперед "Россия", но по заданию не было этого сказано
// переменная названия города
// let city = "";

// const country = {
//   rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
//   uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
//   bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
//   jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
// };
// // функция рендера списка городов
// const renderList = (list) => {
//   list.forEach(item => {
//     const option = document.createElement('option');
//     option.innerHTML = `<option>${item}</option>`;
//     citySelect.append(option);
//     citySelect.style.display = "inline";
//   });
// }
// функция печати текста
// const showText = (country, city) => {
//   return result.textContent = `${country} ${city}`;
// };
// // слушатель клика на селекте стран
// countrySelect.addEventListener("click", function(e) {
//   count++;
//   if (count === 2) {
//     count = 0;
//     for (const item in country) {
//       if (Object.hasOwnProperty.call(country, item)) {
//         if (e.target.value === item) {
//           citySelect.innerHTML = "";
//           renderList(country[item]);
//           city = e.target.selectedOptions[0].textContent;
//         };
//       };
//     };
//   }
// });
// слушатель клика на селекте городов
// citySelect.addEventListener("click", function(e) {
//   count++;
//   if (count === 2) {
//     count = 0;
//     showText(city, e.target.value);
//   };
// });


const startBtn = document.querySelector(".btn__start");
const pauseBtn = document.querySelector(".btn__pause");
const resetBtn = document.querySelector(".btn__reset");

const square = document.querySelector(".square");
// id анимации
let animationId;

let animate = true;

let angle = 0;
let left = 0;
let right = 100;

let count = 0;

let updateBoxAngle = () => {
  if(!startBtn.classList.contains("started")) {
    angle += 1;
  }
  square.style.transform = `rotate(${angle}deg)`;
  if (left < 100) {
    left += 1
    square.style.left = `${left}px`;
  } else {
    right -= 1
    square.style.left = `${right}px`;
    if (right == 0) {
      left = 0
      right = 100;
    }
  }
  if (animate == true) {
    animationId = requestAnimationFrame(updateBoxAngle);
  }
};
// запуск анимации
startBtn.addEventListener("click", () => {
  if(startBtn.classList.contains("started")) {
    startBtn.classList.remove("started");
    animate = true;
    animationId = requestAnimationFrame(updateBoxAngle);
  }
});
// пауза анимации
pauseBtn.addEventListener("click", () => {
  if(!startBtn.classList.contains("started")) {
    if (angle > 0) {
      animate = false;
      animationId = cancelAnimationFrame(updateBoxAngle);
      count++;
    }
    if(count % 2 == 0) {
      count = 0;
      animate = true;
      animationId = requestAnimationFrame(updateBoxAngle);
    };
  }
});
// сброс анимации
resetBtn.addEventListener("click", () => {
  setTimeout(function () {
    angle = 0;
    left = 0;
    count = 0;
    animate = false;
    startBtn.classList.add("started");
    square.style.transform = `rotate(0deg)`;
    square.style.left = `0px`;
    animationId = cancelAnimationFrame(updateBoxAngle);
  }, 500);
});