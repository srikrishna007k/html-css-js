let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    document.querySelector("section").classList.add("bcc");
    document.querySelector("section").classList.remove("bc");
})
let x = document.getElementById("x");
x.addEventListener("click",()=>{
    document.querySelector("section").classList.add("bc");
    document.querySelector("section").classList.remove("bcc");

})