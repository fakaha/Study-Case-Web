const hamburgerMenu = document.querySelector('.hamburger-menu input');
const nav = document.querySelector('nav .navigation-page ul');

hamburgerMenu.addEventListener('click', function(){
    nav.classList.toggle('slide');
})