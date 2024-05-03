let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");
let btn3 = document.querySelector("#button3");
let btn4 = document.querySelector("#button4");

btn1.addEventListener("click",()=>{
    let a = document.querySelector("#fst").value;
    let b = document.querySelector("#snd").value;
    let d = Number(a)+Number(b);
    document.querySelector(".output").innerHTML=d;
    console.log(Number(a)+Number(b));

})
btn2.addEventListener("click",()=>{
    let a = document.querySelector("#fst").value;
    let b = document.querySelector("#snd").value;
    let d = Number(a)-Number(b);
    document.querySelector(".output").innerHTML=d;
    console.log(Number(a)-Number(b));

})
btn3.addEventListener("click",()=>{
    let a = document.querySelector("#fst").value;
    let b = document.querySelector("#snd").value;
    let d = Number(a)*Number(b);
    document.querySelector(".output").innerHTML=d;
    console.log(Number(a)*Number(b));

})
btn4.addEventListener("click",()=>{
    let a = document.querySelector("#fst").value;
    let b = document.querySelector("#snd").value;
    let d = Number(a)/Number(b);
    document.querySelector(".output").innerHTML=d;
    console.log(Number(a)/Number(b));

})