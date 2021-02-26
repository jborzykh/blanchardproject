window.addEventListener('DOMContentLoaded', function() {
    let accordion = document.querySelector('.bottom__action');
    let items = accordion.querySelectorAll('.bottom__item');
    let title = accordion.querySelectorAll('.bottom__button');

    function toggleAccordion() {
        let thisItem = this.parentNode;

        items.forEach(item => {
            if (thisItem == item) {

                thisItem.classList.toggle('active');
                return;
            }

            item.classList.remove('active');
        });
    }

    title.forEach(question => question.addEventListener('click', toggleAccordion));
})