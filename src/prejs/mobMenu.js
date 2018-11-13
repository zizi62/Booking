

    let menu = document.querySelector('.nav');
    let btnOpen = document.querySelector('.mob__btn');
    let btnClose = document.querySelector('.close__btn');
    let navLink = document.querySelectorAll('.nav__link');

    btnOpen.addEventListener('click', function(e){
        menu.classList.add('nav-open');
        btnClose.classList.remove('opacityNull');
        for(let i = 0; i < navLink.length; i++){
            navLink[i].classList.add('opacity')
        }
    })

    btnClose.addEventListener('click', function(e){
        menu.classList.remove('nav-open');
        btnClose.classList.add('opacityNull');

        for(let i = 0; i < navLink.length; i++){
            navLink[i].classList.remove('opacity');
        }
    })



