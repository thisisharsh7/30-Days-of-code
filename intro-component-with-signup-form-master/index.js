const sbmit = document.getElementById("btn");
const input = document.querySelectorAll(".inp");
const txt = " cannot be empty";
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var letters = /^[A-Za-z]+$/;
sbmit.addEventListener("click", (e) => {
  let k = 0;
  input.forEach((element) => {
    const p = element.parentElement.nextElementSibling;
    if (element.value.length == 0) {
      element.placeholder = "";
      element.parentElement.className = "invalid";
      if (element.id == "email") {
        element.placeholder = "email@example/com";
        p.innerHTML = "Looks like this is not an email";
      } else {
        p.innerHTML = `${element.id + txt}`;
      }
      p.className = "error";
    } else {
      if (element.id == "Password" && element.value.length < 6) {
        element.parentElement.className = "invalid";
        p.innerHTML = "Password must be atleast 6 characters long";
        element.value = "";
        p.className = "error";
      }else if(element.id == "email" && !email.value.match(validRegex)){
        element.parentElement.className = "invalid";
        element.placeholder = "email@example/com";
        element.value="";
        p.innerHTML = "Looks like this is not an email";
        p.className = "error";
      }else if((element.id== "First Name" || element.id=="Last Name") && !element.value.match(letters)){
        element.parentElement.className = "invalid";
        element.placeholder = "";
        p.innerHTML = "Looks like this is not a name";
        p.className = "error";
      }
       else {
        p.className = "";
        element.parentElement.className = "";
        element.style.borderColor = "1px solid hsl(249, 10%, 26%)";
        k++;
      }
    }
  });
  if (k == 4) {
      window.location.reload();
  }
  e.preventDefault();
});
