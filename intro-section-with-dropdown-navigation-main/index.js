const expand = document.querySelectorAll(".more-list");
const side = document.querySelectorAll(".hamAndCross");
const nav = document.querySelector(".nav-items");
side.forEach(myFunction);
expand.forEach(onExapnd);
function onExapnd(event){
    const upAir = event.children[1].classList;
    const downAir = event.children[2].classList;
    upAir.toggle("showArrow");
    event.nextElementSibling.classList.toggle("sub-bie");
    event.addEventListener("click",()=>{
        event.classList.toggle("colorChange");
        event.nextElementSibling.classList.toggle("sub-display");
        event.nextElementSibling.classList.toggle("sub-bie");
        upAir.toggle("showArrow");
        downAir.toggle("showArrow");
       
    })
}
function myFunction(el){
    el.addEventListener("click",(event)=>{
        side[0].classList.toggle("hamToggle");
        side[1].classList.toggle("crossToggle");
        nav.classList.toggle("show-nav-items");
        document.body.classList.toggle("overlay");
        if(event.target.getAttribute("alt")=="close"){
            document.querySelector("main").classList.add("mainAnimate");
        }else{
            document.querySelector("main").classList.remove("mainAnimate");
        }
        
    })
}
