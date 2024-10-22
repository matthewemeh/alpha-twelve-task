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
window.addEventListener('load', () => {
    const searchbarInput = document.querySelector('.searchbar input');
    searchbarInput.addEventListener('input', e => {
        const value = e.target.value.toLowerCase();
        filteredEvents = events.filter(({ speakers, name }) => {
            return (name.toLowerCase().includes(value) ||
                speakers.some(speaker => speaker.toLowerCase().includes(value)));
        });
        loadPaginationNumbers();
        update(0);
    });
});
