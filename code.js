// console.log(window.scrollHeight);
let header =document.querySelector("header")
let div =document.querySelector("header div")
let section =document.querySelector("header div section")
console.log(header.offsetTop);
window.addEventListener("scroll", ()=>{
    // let scroll=e.
    let scr=document.documentElement.scrollTop
    console.log(scr + " - " + section.offsetTop);
    if(section.offsetTop - 500 < scr ){
        section.style.opacity=1;
        section.classList.add("mostArriba")
    }
    // console.log(scr);
})

document.querySelector(".menu").addEventListener("click", ()=>{
    document.querySelector(".navBar").classList.toggle("activ")
})