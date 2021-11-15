const clickMenu = document.querySelector('.header-right > a');

clickMenu.addEventListener('click', 
    function() {
        const aproMenu = document.querySelector('.hamburger-menu');
        aproMenu.classList.add('active');   
        
});

const chiudoMenu = document.querySelector('.hamburger-menu > a');
chiudoMenu.addEventListener('click', 
function() {
    const aproMenu = document.querySelector('.hamburger-menu');
    aproMenu.remove('active');
});