window.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeLink = document.querySelectorAll('.menu__link');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        closeMenu();
    });

    closeLink.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && menu.classList.contains('active')) { 
            closeMenu();
        }
    });

    function closeMenu() {
        menu.classList.remove('active');
    }
    
    // window.addEventListener('scroll', function() {
    //     document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    // });
    
    new WOW().init();

    //
    // let container = document.getElementById("container");
    // let container_width = container.offsetWidth;
    // let count = Math.ceil(container_width / 10);
    // let elem = container.innerHTML;
    // for (let i = 0; i < count; i++) {
    //     container.innerHTML += elem;
    // }

});



