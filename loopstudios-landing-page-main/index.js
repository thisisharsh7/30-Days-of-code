const openNow=document.getElementById("hamburger-btn");
const closeNow=document.getElementById("closeNow");
const box=document.getElementById("header-link");

openNow.addEventListener("click",()=>{
    openNow.style.display="none";
    if(openNow.style.display=="none"){
        closeNow.className="close";
        closeNow.style.display="block";
        box.className="hamburger-link";
        closeNow.addEventListener("click",()=>{
            closeNow.style.display="none";
            openNow.style.display="block";
            box.className="";
            
        })
    }

})
window.addEventListener("resize",()=>{
    box.className="";
    closeNow.style.display="none";
    if(window.innerWidth>=655){
        openNow.style.display="none";
    }else{
        openNow.style.display="block";
    }
})