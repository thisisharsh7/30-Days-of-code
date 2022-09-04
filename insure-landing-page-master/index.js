const btn = document.getElementById("hamburger");
const sbtn = document.getElementById("close");
const nav = document.getElementById("header-click");
btn.addEventListener("click",()=>{
    btn.style.display="none";
    sbtn.style.display="block";
    nav.classList.add("showOnClick");
})
sbtn.addEventListener("click",()=>{
    sbtn.style.display="none";
    btn.style.display="block";
    nav.classList.remove("showOnClick");
})

window.addEventListener("resize",()=>{
    if(window.innerWidth>632 || sbtn.style.display=="block"){
        sbtn.style.display="none";
        btn.style.display="none";
        nav.classList.remove("showOnClick");
    }else{
        btn.style.display="block";
    }
})