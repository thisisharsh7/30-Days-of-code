const btn = document.getElementById("hamburger");
const list = document.querySelector("ul");
btn.addEventListener("click",()=>{
    if(list.className==""){
        list.className="listHide";
    }else{
        list.className="";
    }
    if(list.className=="listHide"){
        window.addEventListener("resize",()=>{
            list.className="";
            
        })
        window.addEventListener("scroll",()=>{
            list.className="";
        })
    }
})

