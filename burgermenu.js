window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#burger').addEventListener('click' , function() {
        document.querySelector('#menu').classList.toggle('is-active');
        document.querySelector('.burger').classList.toggle('is-active');
        document.querySelector('.header__logo').classList.toggle('is-active');
        document.querySelector('.header__search').classList.toggle('is-active');
        document.querySelector('#header__search1024').classList.toggle('is-active');
        document.querySelector('.header__date1024').classList.toggle('is-active');

    })

    

})

