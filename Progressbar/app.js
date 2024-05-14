let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let num = 0;
next.addEventListener("click",()=>{
    
    let l1 = document.querySelector(".l1");
    let l2 = document.querySelector(".l2");
    let l3 = document.querySelector(".l3");
    if(num == 0){
        l1.classList.add("com");
        prev.classList.remove("invis");
    }else if(num == 1){
        l2.classList.add("com");
    }else if(num == 2){
        l3.classList.add("com");
        next.classList.add("invis");
    }
    num++;
})
prev.addEventListener("click",()=>{
    
    let l1 = document.querySelector(".l1");
    let l2 = document.querySelector(".l2");
    let l3 = document.querySelector(".l3");
    if(num == 3){
        l3.classList.remove("com");
        next.classList.remove("invis");
    }else if(num == 2){
        l2.classList.remove("com");
    }else if(num == 1){
        l1.classList.remove("com")
        prev.classList.add("invis");
    }
    num--;
})
if(num==3){
    next.classList.add("invis");
}