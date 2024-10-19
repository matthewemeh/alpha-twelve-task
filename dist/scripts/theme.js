"use strict";
function toggleTheme() {
    const body = document.querySelector('body');
    const isDarkTheme = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark');
    localStorage.setItem('theme', body.getAttribute('data-theme'));
}
function initLastTheme() {
    const theme = localStorage.getItem('theme') ?? 'light';
    document.querySelector('body').setAttribute('data-theme', theme);
    if (theme === 'dark') {
        const checkbox = document.querySelector('#checkbox');
        checkbox.defaultChecked = true;
    }
}
window.onload = () => {
    initLastTheme();
};
