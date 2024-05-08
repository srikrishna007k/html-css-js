function randcolor(){
    let a = "123456789ABCDEF";
    let color = "#"
    for(let i=0;i<6;i++){
        color += a[Math.floor(Math.random()*16)]
    }
    return color;
}

let btn = document.getElementById("btn");
btn.addEventListener('click',()=>{
    let clr = randcolor();
    document.body.style.backgroundColor = clr;
    console.log(clr);
})