const search_button = document.querySelector('.search_button');
const close_button = document.querySelector('.close_button');
const search_box = document.querySelector('.search_box');

search_button.addEventListener('click', function () {
  search_button.classList.add('active');
  close_button.classList.add('active');
  search_box.classList.add('active');
})

close_button.addEventListener('click', function () {
  search_button.classList.remove('active');
  close_button.classList.remove('active');
  search_box.classList.remove('active');
})