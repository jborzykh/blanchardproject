window.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('#burger');
    const search = document.querySelector('.header__search');

    let active = false;

    burger.addEventListener('click', (e) => {
        if (e.target.id === 'header__search') {

            if (active) {
                search.classList.remove('active');
                active = false;
            }

        }
    })
});