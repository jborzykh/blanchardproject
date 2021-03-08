document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.flag__btn').forEach(function(flagBtn) {
        flagBtn.addEventListener('click', function(event) {

            const path = event.currentTarget.dataset.path
            const flag = event.currentTarget.dataset.path




            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active');


            })
            document.querySelectorAll('.flag__btn').forEach(function(flagBtn) {
                flagBtn.classList.remove('flag__btn-active');
            })



            document.querySelector(`[data-path="${flag}"]`).classList.add('flag__btn-active')
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')



        })

    })





})