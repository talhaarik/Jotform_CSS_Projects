const modeButton = document.getElementById('modeToggle');
let darkModeEnabled = false;

modeButton.addEventListener('click', () => {
  darkModeEnabled = !darkModeEnabled;

  if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  modeButton.classList.toggle('active');
});
