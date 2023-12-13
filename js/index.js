let audio = document.getElementById("audio");
audio.volume = 0.5;

let toggleMenu=document.getElementById("toggle-menu");
let menu=document.getElementById("menu");
toggleMenu.addEventListener('click',()=>{
    menu.classList.toggle("menu--show");
});

menu.addEventListener('click',()=>{
    menu.classList.toggle("menu--show");
});


