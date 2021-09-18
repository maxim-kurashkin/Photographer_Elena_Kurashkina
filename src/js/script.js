window.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger'),
      span = document.querySelectorAll('.spanm'),
      menu = document.querySelector('.menu'),
      block = document.querySelector('.menu__block'),
      overlay = document.querySelector('.menu__overlay'),
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

    overlay.addEventListener('click', (e)=> { 
        if(e.target != block) {
            closeMenu();
        }
    })

    function closeMenu() {
        menu.classList.remove('active');
    }
    

    function showMenuByScroll() {
        if (window.pageYOffset >=  880) {
            span.forEach(item => {
                item.classList.add('black');
            })
        }
        if (window.pageYOffset <=  880) {
            span.forEach(item => {
                item.classList.remove('black');
            })
        }
    }



    window.addEventListener('scroll', showMenuByScroll);

    closeLink.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu();
        });
    });

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



