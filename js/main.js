const menuHamburger = document.querySelector('.bar');
const menuClose = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

menuHamburger.addEventListener('click', ()=>{
    overlay.classList.add('active');
    modal.classList.add('active');
    menuHamburger.classList.add('active')
    menuClose.classList.add('active');
})

menuClose.addEventListener('click', ()=>{
    overlay.classList.remove('active');
    modal.classList.remove('active');
    menuHamburger.classList.remove('active');
    menuClose.classList.remove('active');
})

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 767){
        overlay.classList.remove('active');
        modal.classList.remove('active');
        menuClose.classList.remove('active');
        menuHamburger.classList.remove('active');
    }
})