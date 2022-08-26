console.log("harsh is here");
const btn=document.querySelectorAll(".arrow");
const div=document.querySelectorAll(".first");
console.log(btn);
btn.forEach(sbtn =>{
    sbtn.addEventListener('click',() =>{
        div.forEach(myFunction);
        const x = sbtn.id;
        // const x = sbtn.id;
        // const el=document.getElementById(`${div[x-1].lastElementChild.id}`)
        // el.style.display="block";
        // element.style.display="block";
        function myFunction(value){
            const x = value.children[1].id;
            const i = sbtn.parentElement.nextElementSibling.id;
            const el=document.getElementById(`${x}`);
            if(x==i){
                el.style.display="block";
            }else{
                el.style.display="none";
            }
        }
    })
})