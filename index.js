let value=document.querySelector(".counter")
let dec=document.querySelector(".dec")
let reset=document.querySelector(".reset")
let inc=document.querySelector(".inc")
let btn=document.querySelectorAll(".btn")
let count=0;
reset.addEventListener("click",()=>{
    count=0;
    value.textContent=count;
    if(count==0){
     
        value.style.color="black";
            
        }
 
})
inc.addEventListener("click",()=>{
    count++;
  
    value.textContent=count;
    if(count>0){
     
    value.style.color="green"
        
    }
    if(count==0){
     
        value.style.color="black";
            
        }

 
})
dec.addEventListener("click",()=>{
    count--;
    value.textContent=count;
    if(count<0){
        
        value.style.color="red"
        
    }
    if(count==0){
     
        value.style.color="black";
            
        }
  
 
})
