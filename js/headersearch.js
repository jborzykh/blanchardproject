window.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const searchBtn = document.querySelector('#header__search');
    const searchInput = document.querySelector('#search__input');
    const burger = document.querySelector('#burger');
    const headerLogo = document.querySelector('#header__logo');
    const searchClose = document.querySelector('#search__icon--close');
    const header320 = document.querySelector('.header');
    let active = false;

    body.addEventListener('click', (e) => {
        if (e.target.id === 'header__search' ||
            e.target.id === 'search__input' ||
            e.target.id === 'search__icon' ||
            e.target.id === 'search__icon--close' ||
            e.target.id === 'burger' ||
            e.target.id === 'header__logo' ||
            e.target.class === 'header') {
            if (!active) {
                searchBtn.classList.add('active');
                searchInput.classList.add('active');
                burger.classList.add('active');
                headerLogo.classList.add('active');
                searchClose.classList.add('active');
                header320.classList.add('active');
                active = true;
            }
        } else {
            searchClose.classList.remove('active');
            searchBtn.classList.remove('active');
            searchInput.classList.remove('active');
            burger.classList.remove('active');
            headerLogo.classList.remove('active');
            header320.classList.remove('active');

            searchInput.value = '';
            active = false;
        }
    })
});