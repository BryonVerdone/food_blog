//show sidebar

const hideSidebar = document.querySelector('.hide-sidebar');
const sidebar = document.querySelector('.sidebar');
const navBtn = document.querySelector('.nav-btn');

// navBtn.addEventListener('click', function () {
//   hideSidebar.classList.toggle('hide-sidebar');
// });
// // close open sidebar
// const closeNav = document.querySelector('.close-nav');

// if (closeNav.classList.contains)
//   closeNav.addEventListener('click', function () {
//     closeNav.classList.add('hide-sidebar');
//   });

navBtn.addEventListener('click', function () {
  if (sidebar.classList.contains('hide-sidebar')) {
    sidebar.classList.remove('hide-sidebar');
  } else {
    sidebar.classList.add('hide-sidebar');
  }
});
