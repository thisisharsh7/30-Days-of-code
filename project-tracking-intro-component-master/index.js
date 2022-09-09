const btnH = document.querySelector(".hamIcon");
const btnC = document.querySelector(".crossIcon");
const list = document.querySelector("ul");
function btnClicked(){
    btnH.classList.toggle("toggleHam");
    btnC.classList.toggle("toggleCross");
    list.classList.toggle("displayNavigation");
}