let toggleBar=document.querySelector(".fa-burger")
let Context=document.querySelector(".message")
toggleBar.addEventListener("click",()=>{ 
    let style=document.createElement("style") 
    Context.classList.toggle("Noner")
    style.innerHTML=`
    .input input 
    {
        margin-left: 20px
    }
    ` 
    document.head.append(style)
    Context.style.backgroundColor="#D0D0F2"

}) 
function inner()
{ 
        let inner=document.querySelectorAll(".innerLayer") 

        inner.forEach(val=>{  

            let atti=val.getAttribute("atti") 
            val.style.backgroundColor=atti;
            val.style.width=`${(Math.random()*100)+40}px` 
            val.style.height="100%";

           
        })
    
} 
 
inner() 
setInterval(()=>{
inner()
},6000)