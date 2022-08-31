const btn = document.getElementById("formSubmit");
const input = document.querySelectorAll("input");
const parent= document.querySelectorAll(".cardData");

var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;
btn.addEventListener("click",(e)=>{
    input.forEach(myFunction);
    function myFunction(element){
        console.log(element);
    }




    document.getElementById("user").style.display="none"; 
    document.getElementById("server").style.display="flex";
    
    e.preventDefault();
})