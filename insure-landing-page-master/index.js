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
    if(sbtn.style.display=="block" || window.innerWidth>632){

        if(window.innerWidth>632){
            nav.classList.remove("showOnClick");
            sbtn.style.display="none";
            btn.style.display="none";
            
        }else{
            nav.classList.remove("showOnClick");
            sbtn.style.display="none";
            btn.style.display="block";
        }
       
    }else{
        btn.style.display="block";
    }
})