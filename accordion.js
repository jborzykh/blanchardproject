window.addEventListener('DOMContentLoaded', function(){
let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.banner__accordion--item');
let title = accordion.querySelectorAll('.banner__accordion--title');

function toggleAccordion() {
  let thisItem = this.parentNode;
  
  items.forEach(item => {
    if (thisItem == item ) {
      
      thisItem.classList.toggle('active');
      return;
    } 
   
    item.classList.remove('active');
  });
}

title.forEach(question => question.addEventListener('click', toggleAccordion));
})