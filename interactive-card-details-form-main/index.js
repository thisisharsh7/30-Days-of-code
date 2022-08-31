const btn = document.getElementById("formSubmit");
const input = document.querySelectorAll("input");
const parent = document.querySelectorAll(".cardData");

var letters = /^[A-Za-z\s]+$/;
var numbers = /^[0-9\s]+$/;
btn.addEventListener("click", (e) => {
    
  let success = true;
  input.forEach(myFunction);
  function myFunction(element) {
    const k = element.value;
    const id = element.id;
    let parent = element.parentElement;
    if (parent.id === "box") {
      parent = element.parentElement.parentElement;
    }
    if (k === "") {
      element.style.borderColor = "hsl(0, 100%, 66%)";
      parent.children[2].innerHTML = "Can't be blank";
      success = false;
    } else if (id == "name") {
      if (!k.match(letters)) {
        element.style.borderColor = "hsl(0, 100%, 66%)";
        parent.children[2].innerHTML = "Wrong format, letters only.";
        success = false;
      } else {
        element.style.borderColor = "hsl(278, 68%, 11%)";
        parent.children[2].innerHTML = "";
        document.getElementById("userName").innerText = k;
        success = success + 1;
      }
    } else if (id == "card-num") {
      if (!k.match(numbers)) {
        element.style.borderColor = "hsl(0, 100%, 66%)";
        parent.children[2].innerHTML = "Wrong format, numbers only.";
        success = false;
      } else if ((k.match(/[0-9]/g) || []).length != 16 || k=="0000 0000 0000 0000") {
        element.style.borderColor = "hsl(0, 100%, 66%)";
        parent.children[2].innerHTML = "Length must be 16.";
        success = false;
      } else {
        element.style.borderColor = "hsl(278, 68%, 11%)";
        parent.children[2].innerHTML = "";
        document.getElementById("userNumber").innerText = k;
      }
    } else if (id == "cardYear") {
      if (k <= 21 || k >= 31 || (k.match(/[0-9]/g) || []).length > 2) {
        element.style.borderColor = "hsl(0, 100%, 66%)";
        success = false;
      } else {
        element.style.borderColor = "hsl(278, 68%, 11%)";
        document.getElementById("userYear").innerText = k;
      }
    } else if (id == "cardMonth") {
      if (k <= 0 || k >= 13 || (k.match(/[0-9]/g) || []).length > 2) {
        element.style.borderColor = "hsl(0, 100%, 66%)";
        parent.children[2].innerHTML = "";
        success = false;
      } else if ((k.match(/[0-9]/g) || []).length < 2) {
        element.style.borderColor = "hsl(278, 68%, 11%)";
        parent.children[2].innerHTML = "";
        document.getElementById("userMonth").innerText = "0" + k;
        success = false;
      } else {
        element.style.borderColor = "hsl(278, 68%, 11%)";
        parent.children[2].innerHTML = "";
        document.getElementById("userMonth").innerText = k;
      }
    } else if (id == "cvc") {
      if (k <= 99 || k >= 1000 || (k.match(/[0-9]/g) || []).length > 3) {
        element.style.borderColor = "hsl(0, 100%, 66%)";
        parent.children[2].innerHTML = "Invalid input";
        success = false;
      } else {
        element.style.borderColor = "hsl(278, 68%, 11%)";
        parent.children[2].innerHTML = "";
        document.getElementById("card-expire").innerText = k;
      }
    }
  }
  if (success){
    document.getElementById("user").style.display="none";
    document.getElementById("server").style.display="flex";
  }
  e.preventDefault();
});

document
  .getElementById("card-num")
  .addEventListener("keypress", myFunction, false);
function myFunction(event) {
  const num = event.target.value.length;
  if (event.key == " ") {
    event.preventDefault();
  }
  if (num == 19 || (num==0 && event.key==0)) {
    event.preventDefault();
  }
  if (num == 4 || num == 9 || num == 14) {
    event.target.value = event.target.value + " ";
  }
}
