const btn = document.querySelector("#submit");
const input = document.querySelector('input');

var validRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
btn.addEventListener('click',(e)=>{
    input.style.borderColor="hsl(223, 100%, 88%)";
    console.log("clicked");
    if(!input.value.match(validRegex)){
        input.style.borderColor="hsl(354, 100%, 66%)";
        const p = input.parentElement.children[1];
        p.innerHTML="Please provide a valid email address";
        p.className="error";
        input.placeholder="example@email/com";
        input.value="";
        e.preventDefault();
    }
})