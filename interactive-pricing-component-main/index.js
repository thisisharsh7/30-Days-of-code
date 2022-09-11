const btn = document.querySelector(".toggle-inner");
const rate = document.getElementById("charge");
const slide = document.querySelector(".slider-inner");
const sliding = document.getElementById("slider-outer");
const slidSurface = document.querySelector(".slider-surface");

let mval = 16.00;
let yval = mval*12 - (mval*12*25)/100;


sliding.addEventListener("click",e=>{
    slidSurface.style.width=`${e.offsetX}px`;
    slide.style.left=`${e.offsetX>40? e.offsetX-25: e.offsetX-20}px`;
})

window.addEventListener("resize",()=>{
    slidSurface.style.width="40px";
    slide.style.left="40px";
})

btn.addEventListener("click",(event)=>{
    const el = event.target.classList;
    el.toggle("toggle-right");
    if(el.length==1){
        rate.innerText=`$${Number(mval).toFixed(2)}`;
    }else{
        rate.innerText=`$${Number(yval).toFixed(2)}`;
    }
})
