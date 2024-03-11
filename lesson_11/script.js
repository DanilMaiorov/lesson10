'use strict'

// В input[type=text] можно ввести цвет: red, green, blue и так далее.
// По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата

const textInput = document.querySelector('#text');
const square = document.querySelector('#square');
const rangeSpan = document.querySelector('#range-span');

document.querySelector('#btn').addEventListener('click', (e) => {
  square.style.backgroundColor = textInput.value;
  textInput.value = "";
});

// 2) В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; " 

document.querySelector('#e_btn').style.display = "none";

// 3) Повесить на input[type=range] обработчик события input и реализовать такой функционал:
// при каждом изменении положения ползунка значение  необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!) 
const rangeInput = document.querySelector('input[type=range]');

document.addEventListener('DOMContentLoaded', () => {
  rangeSpan.textContent = rangeInput.value;
})

rangeInput.addEventListener('input', (e) => {
  rangeSpan.textContent = e.target.value;
  document.querySelector('#circle').style.cssText = `width: ${e.target.value}%; height: ${e.target.value}%;`
})

