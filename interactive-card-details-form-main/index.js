const btn = document.getElementById("formSubmit");
const input = document.querySelectorAll("input");
const parent= document.querySelectorAll(".cardData");

var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;
btn.addEventListener("click",(e)=>{
    const k =0;
    input.forEach(myFunction);
    function myFunction(element,id){
        if(element.value==""){
            console.log(`this is ${id}`);
            if(id>=3){
                id=id-1;
            }
            console.log(id);
            parent[id].children[2].innerHTML="Can't be blank";
            element.style.borderColor="hsl(0, 100%, 66%)";
            parent[id].children[2].style.color="hsl(0, 100%, 66%)";
            
    e.preventDefault();
        }else if( (id===0 && !element.value.match(letters))){
            parent[id].children[2].innerHTML=`Wrong format letters only`;

        }else if((id===1 && !element.value.match(numbers))){
            parent[id].children[2].innerHTML=`Wrong format numbers only`;
            
    
        }
        else{
            element.style.borderColor='hsl(278, 68%, 11%)';
            parent[id].children[2].innerHTML="";
            k++;
        }
    }
    if(k==5){
        document.getElementById("user").style.display="none";
        document.getElementById("server").style.display="flex";
    }
})