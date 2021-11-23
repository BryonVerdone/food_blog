//show sidebar

const hideSidebar = document.querySelector('.hide-sidebar');

const navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', function () {
  hideSidebar.classList.toggle('hide-sidebar');
});
// close open sidebar
const closeNav = document.querySelector('.close-nav');

closeNav.addEventListener('click', function () {
  closeNav.classList.add('hide-sidebar');
});
