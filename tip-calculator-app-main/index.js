const btnInput = document.querySelectorAll("input[readonly]");
const clear = document.querySelector("input[type=reset]");
const show = document.querySelectorAll(".tip-show");
const input = document.querySelectorAll("input[type='number']");
const form = document.querySelector("form");
let tip = 0,
  bill = 0,
  person = 0;

btnInput.forEach((el) => {
  el.addEventListener("click", (event) => {
    console.log(Number(event.target.id));
    tip = Number(event.target.id);
    show[0].innerText = `${(bill * (tip / 100)).toFixed(2)}`;
    show[1].innerText = `${(bill * (tip / 100) * person).toFixed(2)}`;
  });
});
input.forEach((sinput) => {
  sinput.addEventListener("input", (event) => {
    const val = event.target.value;
    if (event.target.placeholder == "Custom") {
      tip = val;
    } else if (event.target.id == "bill") {
      bill = val;
    } else {
      person = val;
    }

    show[0].innerText = `${(bill * (tip / 100)).toFixed(2)}`;
    show[1].innerText = `${(bill * (tip / 100) * person).toFixed(2)}`;
  });
});
let k = 1;
clear.addEventListener("click", () => {
  show[0].innerText = "0.00";
  show[1].innerText = "0.00";
  input.forEach((sinp) => {
    if (sinp.value == "" && (sinp.id == "bill" || sinp.id == "people")) {
      sinp.parentElement.classList.add("error");
      
    } else {
      sinp.parentElement.classList.remove("error");
    }
    sinp.value="";
  });
  tip = 0;
  bill = 0;
  person = 0;
});
