// Select the mobile menu
var mobileMenu = document.querySelector('.mobile-menu');

function toggleMobileMenu(menu){

    setTimeout(function() {
        menu.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    }, 100);

}