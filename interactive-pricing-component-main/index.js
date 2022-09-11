const btn = document.querySelector(".toggle-inner");
const slide = document.querySelector(".slider-inner");
const sliding = document.getElementById("slider-outer");
const slidSurface = document.querySelector(".slider-surface");
const views = document.getElementById("views");
const charge = document.getElementById("charge");
let x = 16.0;
let y = 144.0;
sliding.addEventListener("click", (e) => {
  slidSurface.style.width = `${e.offsetX}px`;
  slide.style.left = `${e.offsetX > 40 ? e.offsetX - 25 : e.offsetX - 20}px`;
  x = e.offsetX / 4;
  y = (x * 12 * 75) / 100;
  views.innerText = `${e.offsetX}k`;
  if (charge.nextElementSibling.innerText == "/year") {
    charge.innerText = `$${y.toFixed(2)}`;
  } else {
    charge.innerText = `$${x.toFixed(2)}`;
  }
});

window.addEventListener("resize", () => {
  slidSurface.style.width = "40px";
  slide.style.left = "40px";
});

btn.addEventListener("click", (event) => {
  const el = event.target.classList;
  el.toggle("toggle-right");
  if (el.length == 1) {
    charge.innerText = `$${Number(x).toFixed(2)}`;
    charge.nextElementSibling.innerText = "/month";
  } else {
    charge.innerText = `$${Number((x * 12 * 75) / 100).toFixed(2)}`;
    charge.nextElementSibling.innerText = "/year";
  }
  views.innerText = `${cnt}k`;
});
