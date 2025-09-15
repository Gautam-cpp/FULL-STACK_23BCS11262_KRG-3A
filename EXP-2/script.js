const toggle = document.getElementById('theme-toggle');
const dashboard = document.querySelector('.dashboard');
const themeName = document.getElementById('theme-name');

const themes = ['light', 'dark', 'blue', 'green', 'purple'];

function updateThemeName(theme) {
  themeName.textContent = `Current Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
}

toggle.addEventListener('click', () => {
  const currentTheme = dashboard.dataset.theme;
  let nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
  const newTheme = themes[nextIndex];
  dashboard.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
  updateThemeName(newTheme);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  dashboard.dataset.theme = savedTheme;
  updateThemeName(savedTheme);
});
