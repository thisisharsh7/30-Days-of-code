const btn = document.querySelector(".toggle-inner");
const rate = document.getElementById("charge");
const sliding = document.querySelector(".slider-surface");
const slide = document.querySelector(".slider-inner");

const mval = 16.00;
const yval = mval*12 - (mval*12*25)/100;


btn.addEventListener("click",(event)=>{
    const el = event.target.classList;
    el.toggle("toggle-right");
    if(el.length==1){
        rate.innerText="$" + Number(mval).toFixed(2);
    }else{
        rate.innerText="$" + Number(yval).toFixed(2);
    }
})
sliding.addEventListener("click",e=>{
    console.log(e);
    e.target.parentElement.style.left=80;
})

