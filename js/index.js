/* audio */
let audio = document.getElementById("audio");
audio.volume = 0.5;

/* toggle menu */
let toggleMenu=document.getElementById("toggle-menu");
let menu=document.getElementById("menu");
toggleMenu.addEventListener('click',()=>{
    menu.classList.toggle("menu--show");
});

menu.addEventListener('click',()=>{
    menu.classList.toggle("menu--show");
});


/* contador */
const DATE_TARGET = new Date('04/13/2024 0:01 AM');
let contHora=document.getElementById("horasc");
let contMinuto=document.getElementById("minutosc");
let contSegundo=document.getElementById("segundosc");
let contDia=document.getElementById("diasc");

const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;


function updateCountdown() {
    const NOW = new Date();
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);


    contDia.textContent = REMAINING_DAYS;
    contHora.textContent = REMAINING_HOURS;
    contMinuto.textContent = REMAINING_MINUTES;
    contSegundo.textContent = REMAINING_SECONDS;
}


updateCountdown();
// refrescar cada segundo
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

//======================================================================
// LOADING
//======================================================================





let spinLoader=document.getElementById("spin");

 window.addEventListener("load", (event) => {
    if(spinLoader.parentElement){
        spinLoader.parentElement.removeChild(spinLoader);
    }
  });
