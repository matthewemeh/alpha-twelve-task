let startIndex = 0,
  itemsPerRow = 10;

function updateItemsPerRow(value: number) {
  itemsPerRow = value;
  update(0);
  loadPaginationNumbers();
}

function updateSelected() {
  // update pagination number control buttons...
  const buttons = document.querySelectorAll<HTMLButtonElement>('.pagination-control-number');
  buttons.forEach(btn => removeClass(btn, 'selected'));

  const newSelectedButton = buttons.item(startIndex);
  addClass(newSelectedButton, 'selected');

  // ...then update pagination control buttons
  const pagesLength = Math.ceil(filteredEvents.length / itemsPerRow);

  const prevButton = document.querySelector(
    '.pagination-control-btn.previous'
  ) as HTMLButtonElement;
  const nextButton = document.querySelector('.pagination-control-btn.next') as HTMLButtonElement;
  prevButton.disabled = startIndex === 0;
  nextButton.disabled = startIndex === pagesLength - 1;
}

function update(index: number) {
  // this function updates the events table and pagination based on the currently viewed pagination index
  startIndex = index;
  updateSelected();
  loadEvents();
}

function nextPage() {
  // goes to next set of paginated items
  startIndex++;
  updateSelected();
  loadEvents();
}

function previousPage() {
  // goes to previous set of paginated items
  startIndex--;
  updateSelected();
  loadEvents();
}

function loadPaginationNumbers() {
  const paginationNumbersContainer = document.querySelector(
    '.pagination-control-numbers'
  ) as HTMLDivElement;
  paginationNumbersContainer.innerHTML = '';
  const pages = Math.ceil(filteredEvents.length / itemsPerRow);

  Array.from({ length: pages }, (_, index) => {
    paginationNumbersContainer.innerHTML += `
      <button onclick="update(${index})" class="pagination-control-number ${
      index === 0 && 'selected'
    }">${index + 1}</button>
    `;
  });
}

window.addEventListener('load', () => {
  loadPaginationNumbers();
});
