function addClass(element?: HTMLElement | null, ...classes: string[]) {
  if (element) classes.forEach(className => element.classList.add(className));
}

function removeClass(element?: HTMLElement | null, ...classes: string[]) {
  if (element) classes.forEach(className => element.classList.remove(className));
}
