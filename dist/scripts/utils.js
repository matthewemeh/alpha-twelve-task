"use strict";
function addClass(element, ...classes) {
    if (element)
        classes.forEach(className => element.classList.add(className));
}
function removeClass(element, ...classes) {
    if (element)
        classes.forEach(className => element.classList.remove(className));
}
