"use strict";
function addClass(element, ...classes) {
    if (element)
        classes.forEach(className => element.classList.add(className));
}
function removeClass(element, ...classes) {
    if (element)
        classes.forEach(className => element.classList.remove(className));
}
function scrollElement({ top, left, delay, toTop, toLeft, target, toRight, toBottom, scrollSlides = 1, behavior = 'smooth', }) {
    let element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) {
        return console.error(`Div container with target: '${target}' does not exist in the DOM`);
    }
    const elementScrollWidth = element.scrollWidth;
    const elementScrollHeight = element.scrollHeight;
    let scrollProps = {};
    if (toTop) {
        scrollProps = { top: 0 };
    }
    else if (toBottom) {
        scrollProps = { top: elementScrollHeight };
    }
    else if (toLeft) {
        scrollProps = { left: 0 };
    }
    else if (toRight) {
        scrollProps = { left: elementScrollWidth };
    }
    else if (top && left) {
        scrollProps = { top, left };
    }
    else if (top) {
        scrollProps = { top };
    }
    else if (left) {
        scrollProps = { left };
    }
    if (delay)
        setTimeout(() => {
            for (let i = 0; i < scrollSlides; i++) {
                element?.scrollTo({ ...scrollProps, behavior });
            }
        }, delay);
    else {
        for (let i = 0; i < scrollSlides; i++) {
            element.scrollTo({ ...scrollProps, behavior });
        }
    }
}
function scrollItems(direction, target, scrollSlides, xMovement) {
    let container = typeof target === 'string' ? document.querySelector(target) : target;
    if (!container) {
        return console.error(`Div container with target: '${target}' does not exist in the DOM`);
    }
    const currentScrollLeft = container.scrollLeft;
    const containerWidth = xMovement || container.clientWidth;
    const newScrollLeft = direction === 'next' ? currentScrollLeft + containerWidth : currentScrollLeft - containerWidth;
    scrollElement({ target: container, left: newScrollLeft, scrollSlides });
}
function modulo(num, mod) {
    return ((num % mod) + mod) % mod;
}
