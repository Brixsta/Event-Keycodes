const boxes = document.querySelectorAll(".box");
const splashWrapper = document.querySelector(".splash-wrapper");
const texts = document.querySelectorAll(".text");

window.addEventListener("keypress", (e) => {
  splashWrapper.style.display = "none";
  texts[0].textContent = e.key;
  texts[1].textContent = e.keyCode;
  texts[2].textContent = e.code;
});
