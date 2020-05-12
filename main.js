import caesar from "/modules/caesar13";

const result = document.querySelector(".result");

const inputText = document.querySelector(".input");
const form = document.querySelector(".form-wrap");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  caesar(inputText.value);
  inputText.value = "";
});
