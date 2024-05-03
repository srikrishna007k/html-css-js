let nam = document.getElementById("nam");

nam.addEventListener("input",()=>{
    nam.value=nam.value.toUpperCase();
})
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    document.getElementById("hh").innerText="YOU failed BRO"
})