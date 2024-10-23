function addClass(element?: HTMLElement | null, ...classes: string[]) {
  if (element) classes.forEach(className => element.classList.add(className));
}

function removeClass(element?: HTMLElement | null, ...classes: string[]) {
  if (element) classes.forEach(className => element.classList.remove(className));
}

function scrollElement({
  top,
  left,
  delay,
  toTop,
  toLeft,
  target,
  toRight,
  toBottom,
  behavior = 'smooth',
}: ScrollElementProps) {
  let element: HTMLElement | null =
    typeof target === 'string' ? document.querySelector(target) : target;

  if (!element) {
    return console.error(`Div container with target: '${target}' does not exist in the DOM`);
  }

  const elementScrollWidth: number = element.scrollWidth;
  const elementScrollHeight: number = element.scrollHeight;
  let scrollProps: { top?: number; left?: number; behavior?: globalThis.ScrollBehavior } = {};

  if (toTop) {
    scrollProps = { top: 0 };
  } else if (toBottom) {
    scrollProps = { top: elementScrollHeight };
  } else if (toLeft) {
    scrollProps = { left: 0 };
  } else if (toRight) {
    scrollProps = { left: elementScrollWidth };
  } else if (top && left) {
    scrollProps = { top, left };
  } else if (top) {
    scrollProps = { top };
  } else if (left) {
    scrollProps = { left };
  }

  if (delay) setTimeout(() => element?.scrollTo({ ...scrollProps, behavior }), delay);
  else element.scrollTo({ ...scrollProps, behavior });
}

function scrollItems(
  direction: 'next' | 'previous',
  target: string | HTMLElement | null,
  scrollSlides = 1,
  xMovement?: number
) {
  let container: HTMLElement | null =
    typeof target === 'string' ? document.querySelector(target) : target;
  if (!container) {
    return console.error(`Div container with target: '${target}' does not exist in the DOM`);
  }

  const currentScrollLeft: number = container.scrollLeft;
  const containerWidth: number = xMovement || container.clientWidth;
  const newScrollLeft: number =
    direction === 'next'
      ? currentScrollLeft + containerWidth * scrollSlides
      : currentScrollLeft - containerWidth * scrollSlides;
  scrollElement({ target: container, left: newScrollLeft });
}

function modulo(num: number, mod: number): number {
  return ((num % mod) + mod) % mod;
}
