export function getThemeMode() {
  return localStorage.getItem('theme');
}

export function saveThemeMode(val) {
  return localStorage.setItem('theme', val);
}