const MOBILE_WIDTH = 600;

function showOverlay() {
  const overlay = document.querySelector('.overlay') as HTMLDivElement;
  removeClass(overlay, 'invisible');
}

function hideOverlay() {
  const overlay = document.querySelector('.overlay') as HTMLDivElement;
  addClass(overlay, 'invisible');
}

function closeAllModals() {
  document.querySelectorAll<HTMLElement>('.modal').forEach(modal => {
    addClass(modal, 'invisible');
  });
  hideOverlay();
}

window.addEventListener('load', () => {
  const searchbarInput = document.querySelector('.searchbar input') as HTMLInputElement;

  searchbarInput.addEventListener('input', e => {
    // @ts-ignore
    const value = e.target!.value.toLowerCase();

    filteredEvents = events.filter(({ speakers, name }) => {
      return (
        name.toLowerCase().includes(value) ||
        speakers.some(speaker => speaker.toLowerCase().includes(value))
      );
    });
    sort(lastSortFilter.sortName, lastSortFilter.sortOrder);
    loadPaginationNumbers();
    update(0);
  });
});
