const logo = document.querySelector('.logo');
const sidebar = document.querySelector('.sidebar');

logo.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
