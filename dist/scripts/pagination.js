"use strict";
let startIndex = 0, itemsPerRow = 10;
function updateItemsPerRow(value) {
    itemsPerRow = value;
    update(0);
    loadPaginationNumbers();
}
function updateSelected() {
    const buttons = document.querySelectorAll('.pagination-control-number');
    buttons.forEach(btn => removeClass(btn, 'selected'));
    const newSelectedButton = buttons.item(startIndex);
    addClass(newSelectedButton, 'selected');
    const pagesLength = Math.ceil(filteredEvents.length / itemsPerRow);
    const prevButton = document.querySelector('.pagination-control-btn.previous');
    const nextButton = document.querySelector('.pagination-control-btn.next');
    prevButton.disabled = startIndex === 0;
    nextButton.disabled = startIndex === pagesLength - 1;
}
function update(index) {
    startIndex = index;
    updateSelected();
    loadEvents();
}
function nextPage() {
    startIndex++;
    updateSelected();
    loadEvents();
}
function previousPage() {
    startIndex--;
    updateSelected();
    loadEvents();
}
function loadPaginationNumbers() {
    const paginationNumbersContainer = document.querySelector('.pagination-control-numbers');
    paginationNumbersContainer.innerHTML = '';
    const pages = Math.ceil(filteredEvents.length / itemsPerRow);
    Array.from({ length: pages }, (_, index) => {
        paginationNumbersContainer.innerHTML += `
      <button onclick="update(${index})" class="pagination-control-number ${index === 0 && 'selected'}">${index + 1}</button>
    `;
    });
}
window.addEventListener('load', () => {
    loadPaginationNumbers();
});
