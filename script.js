const hamburgermenu = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(hamburgermenu){
    hamburgermenu.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
