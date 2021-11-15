const menuNav = document.getElementById('navBar');
const btnOpenMenu = document.getElementById('btnOpenMenu');
const btnCloseMenu = document.getElementById('btnCloseMenu');
var classNameTwo = document.querySelector('.active')
btnOpenMenu.addEventListener('click', () => {
  btnOpenMenu.style.display = 'none';
  btnCloseMenu.style.display = 'block';
  menuNav.classList.add("active");
})
btnCloseMenu.addEventListener('click', () => {
  btnCloseMenu.style.display = 'none';
  btnOpenMenu.style.display = 'block';
  menuNav.classList.remove('active')
})