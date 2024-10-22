"use strict";
function toggleNavCollapsed() {
    const nav = document.querySelector('nav');
    const collapsed = nav.getAttribute('data-collapsed') === 'true';
    nav.setAttribute('data-collapsed', collapsed ? 'false' : 'true');
}
function closeMobileNav() {
    document.querySelector('nav').setAttribute('data-mobile-nav-opened', 'false');
}
function toggleMobileNav() {
    const nav = document.querySelector('nav');
    const mobileNavOpened = nav.getAttribute('data-mobile-nav-opened') === 'true';
    nav.setAttribute('data-mobile-nav-opened', mobileNavOpened ? 'false' : 'true');
}
function highlightNavLink(id) {
    document.querySelectorAll('.nav-link').forEach(navLink => {
        removeClass(navLink, 'selected');
    });
    const currentActiveNavLink = document.getElementById(id);
    addClass(currentActiveNavLink, 'selected');
    closeMobileNav();
}
