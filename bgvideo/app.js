let btn = document.querySelector("#btn");
btn.addEventListener('click',()=>{
    document.querySelector("section").classList.toggle("cls")
    document.querySelector("footer").classList.toggle("dis")
})