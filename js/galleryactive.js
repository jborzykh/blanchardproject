window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.swiper-slide .swiper-slide--hover').addEventListener('click', function() {
        document.querySelector('.swiper-slide--hover').classList.toggle('active');
        document.querySelector('.swiper-slide--active').classList.toggle('active');
        document.querySelector('.slide-icon').classList.toggle('active');



    })



})
window.addEventListener('DOMContentLoaded', function() {
    let bottomAction = document.querySelector('.bottom__action');
    let bottomItems = bottomAction.querySelectorAll('.bottom__item');
    let bottomTitle = bottomAction.querySelectorAll('.bottom__button');

    function toggleMenu() {
        let thisItem = this.parentNode;

        bottomItems.forEach(item => {
            if (thisItem == item) {

                thisItem.classList.toggle('active');
                return;
            }

            item.classList.remove('active');
        });
    }

    bottomTitle.forEach(question => question.addEventListener('click', toggleMenu));
})