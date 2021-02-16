window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__search, #search__icon--close').addEventListener('click', function() {
        document.querySelector('#header__search').classList.toggle('active');
        document.querySelector('#search__input').classList.toggle('active');
        document.querySelector('#header__logo').classList.toggle('active');
        document.querySelector('#burger').classList.toggle('active');
        document.querySelector('#search__icon--close').classList.toggle('active');
        document.querySelector('.header').classList.toggle('active');

    })



})