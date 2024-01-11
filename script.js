const menu=document.querySelector(".menu-icon")
const open=document.querySelector("nav ul")

menu.addEventListener('click',()=>{
    open.classList.toggle('open')
})