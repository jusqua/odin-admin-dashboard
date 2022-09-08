document.querySelector('.theme-other').addEventListener('click', e => {
  theme = e.target;
  if (theme.classList.contains('ph-moon-fill')) {
    theme.classList.remove('ph-moon-fill');
    theme.classList.add('ph-sun-fill');
    theme.firstChild.innerHTML = 'Light theme'
  }
  else {
    theme.classList.remove('ph-sun-fill');
    theme.classList.add('ph-moon-fill');
    theme.firstChild.innerHTML = 'Dark theme'
  }
  document.body.classList.toggle('dark');
});
