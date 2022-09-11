const btn = document.querySelector(".toggle-inner");
const views = document.getElementById("views");
const charge = document.getElementById("charge");



let x=18;
let y=(x*12*75)/100;
let cnt =100;
const rangeInputs = document.querySelector('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  cnt = val;
  views.innerText=`${val}k`;
  x = (cnt*(18/100)).toFixed(2);
  y=((x*12*75)/100).toFixed(2);
  if (charge.nextElementSibling.innerText == "/year") {
    charge.innerText = `$${y}`;
  } else {
    charge.innerText = `$${x}`;
  }
}
rangeInputs.addEventListener("input",handleInputChange);
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