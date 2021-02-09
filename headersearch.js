window.addEventListener('DOMContentLoaded', function(){
const body = document.querySelector('body');
const searchBtn = document.querySelector('#header__search1024');
const searchInput = document.querySelector('#search__input');
let active = false;

body.addEventListener('click', (e) => {
  if(e.target.id === '#header__search1024' || e.target.id === 'search__input' || e.target.id === 'search__icon') {
    if(!active) {
      searchBtn.classList.add('active');
      searchInput.classList.add('active');
      active = true;
    }
  } else {
      searchBtn.classList.remove('active');
      searchInput.classList.remove('active');
      searchInput.value = '';
      active = false;
  }
})
});

