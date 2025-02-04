function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
let a = setInterval(() => {
    document.body.querySelector(".segbox").style.color = getRandomColor();
}, 1000);

let b=document.querySelector(".name");
b.addEventListener("click",()=>{
    b.style.color=getRandomColor();
});

document.querySelector(".photo").style.borderColor="none";

let c=document.querySelector(".photo")
c.addEventListener("mousemove",()=>{
    c.style.border="13px dotted";
    c.style.borderColor=getRandomColor();
})