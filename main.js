import ces from './caesar13'

const inputText = document.querySelector('.input');
const form = document.querySelector('.form-wrap');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputText.value = '';
})