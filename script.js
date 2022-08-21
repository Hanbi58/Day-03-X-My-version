const toggler = document.querySelector(".control-container");
const mainCont = document.querySelector(".container");

toggler.addEventListener("click", () => {
  mainCont.classList.toggle("rotate");
});
