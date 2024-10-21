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
