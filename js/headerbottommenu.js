window.addEventListener('DOMContentLoaded', function() {
    let accordion = document.querySelector('.bottom__menu--action');
    let items = accordion.querySelectorAll('.bottom__menu--item');
    let title = accordion.querySelectorAll('.bottom__menu--title');

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