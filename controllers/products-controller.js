const newRightButton = document.querySelector(".new__right"),
  newLeftButton = document.querySelector(".new__left"),
  mostRightButton = document.querySelector(".most__right"),
  mostLeftButton = document.querySelector(".most__left"),
  newUl = document.querySelector(".new__ul"),
  mostUl = document.querySelector(".most__ul"),
  loginBtn = document.querySelector(".login__button"),
  discoverButton = document.querySelector(".discover__button");

loginBtn.addEventListener("click", () => {
  window.location.href = "/screens/login.html"
})

discoverButton.addEventListener("click", () => {
  window.location.href = "/screens/search.html"
})

newRightButton.addEventListener("click", () => {
  newUl.scrollLeft += 520;
})

newLeftButton.addEventListener("click", () => {
  newUl.scrollLeft -= 520;
})

mostRightButton.addEventListener("click", () => {
  mostUl.scrollLeft += 520;
})

mostLeftButton.addEventListener("click", () => {
  mostUl.scrollLeft -= 520;
})