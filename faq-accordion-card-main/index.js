console.log("harsh is here");
const btn=document.querySelectorAll(".arrow");
const div=document.querySelectorAll(".first");
console.log(btn);
btn.forEach(sbtn =>{
    sbtn.addEventListener('click',()=>{
        const x = sbtn.id;
        const el=document.getElementById(`${div[x-1].lastElementChild.id}`)
        el.style.display="block";
    })
})