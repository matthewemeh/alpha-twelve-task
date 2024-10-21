"use strict";
function showOverlay() {
    const overlay = document.querySelector('.overlay');
    removeClass(overlay, 'invisible');
}
function hideOverlay() {
    const overlay = document.querySelector('.overlay');
    addClass(overlay, 'invisible');
}
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        addClass(modal, 'invisible');
    });
    hideOverlay();
}
