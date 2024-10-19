"use strict";
function toggleNavCollapsed() {
    const nav = document.querySelector('nav');
    const collapsed = nav.getAttribute('data-collapsed') === 'true';
    nav.setAttribute('data-collapsed', collapsed ? 'false' : 'true');
}
