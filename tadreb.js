let menu = document.querySelector(".menu");
let toggler = document.querySelector(".toggle");
let close = document.querySelector(".close");

toggler.onclick = function () {
  menu.classList.add("open");
};
close.onclick = function () {
  this.parentElement.classList.remove("open");
};

document.onkeyup = function (e) {
  // console.log(e);
  if (e.key === "Escape") {
    menu.classList.remove("open");
  }
};

let li = document.querySelectorAll(".menu li a");
let ArrayLi = Array.from(li);
ArrayLi.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    ArrayLi.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
