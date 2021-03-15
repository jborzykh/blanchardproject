document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.painter__button').forEach(function(flagBtn) {
        flagBtn.addEventListener('click', function(event) {

            const path = event.currentTarget.dataset.path
            const flag = event.currentTarget.dataset.path




            document.querySelectorAll('.catalog__left').forEach(function(tabContent) {
                tabContent.classList.remove('catalog__left-active');


            })
            document.querySelectorAll('.painter__button').forEach(function(flagBtn) {
                flagBtn.classList.remove('painter__button-active');
            })



            document.querySelector(`[data-path="${flag}"]`).classList.add('painter__button-active')
            document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-active')



        })

    })





})