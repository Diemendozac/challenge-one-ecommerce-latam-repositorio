const homeBtn = document.querySelector(".login__button"),
  loginSwitch = document.querySelector(".switch__link"),
  switchParagraph = document.querySelector(".switch__paragraph"),
  confirmPassword = document.getElementById("confirm__password"),
  loginTitle = document.querySelector(".form__title"),
  formButton = document.querySelector(".form__button"),
  userEmail = document.getElementById("email"),
  userPassword = document.getElementById("password");

let toogle = 0;
const toogleMessages = [
  ["Sign Up", "Log In"],
  ["¿Ya tienes una cuenta?", "¿No tienes cuenta?"],
  ["Ingresa", "Regístrate"],
];

homeBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});

loginSwitch.addEventListener("click", () => {
  confirmPassword.parentElement.classList.toggle("login");
  userEmail.value = '';
  userPassword.value = '';
  confirmPassword.value = '';
  toogleForm(loginTitle, 0, toogle);
  toogleForm(formButton, 0, toogle)
  toogleForm(switchParagraph, 1, toogle);
  toogleForm(loginSwitch, 2, toogle);
  if (toogle === 0) {
    toogle = 1;
  } else {
    toogle = 0;
  }
});

function toogleForm(element, row, column) {
  element.innerHTML = toogleMessages[row][column];
}
