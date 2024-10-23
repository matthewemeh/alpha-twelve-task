let activeBaseNavButtonIndex = 0;

type BaseNavButton = {
  title: string;
  icon: string;
  relatedSideBarID: string;
};

const baseNavButtons: BaseNavButton[] = [
  {
    relatedSideBarID: 'home',
    title: 'Home',
    icon: `
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M5.62516 16.0419H14.3752C15.2956 16.0419 16.0418 15.2957 16.0418 14.3752V8.12519L10.0002 3.95853L3.9585 8.12519V14.3752C3.9585 15.2957 4.70469 16.0419 5.62516 16.0419Z" />
        <path stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8.12465 13.1244C8.12465 12.2039 8.87085 11.4577 9.79132 11.4577H10.208C11.1285 11.4577 11.8747 12.2039 11.8747 13.1244V16.0411H8.12465V13.1244Z"/>
      </svg>`,
  },
  {
    relatedSideBarID: 'events-link',
    title: 'Events',
    icon: `
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.66666 9.00001C1.66666 5.85751 1.66666 4.28584 2.64332 3.31001C3.61999 2.33418 5.19082 2.33334 8.33332 2.33334H11.6667C14.8092 2.33334 16.3808 2.33334 17.3567 3.31001C18.3325 4.28668 18.3333 5.85751 18.3333 9.00001V10.6667C18.3333 13.8092 18.3333 15.3808 17.3567 16.3567C16.38 17.3325 14.8092 17.3333 11.6667 17.3333H8.33332C5.19082 17.3333 3.61916 17.3333 2.64332 16.3567C1.66749 15.38 1.66666 13.8092 1.66666 10.6667V9.00001Z" stroke="#ADA9BB" stroke-width="1.5"/>
        <path d="M5.83331 2.33334V1.08334M14.1666 2.33334V1.08334M2.08331 6.50001H17.9166" stroke="#ADA9BB" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M15 13.1667C15 13.3877 14.9122 13.5996 14.7559 13.7559C14.5996 13.9122 14.3877 14 14.1667 14C13.9457 14 13.7337 13.9122 13.5774 13.7559C13.4211 13.5996 13.3333 13.3877 13.3333 13.1667C13.3333 12.9457 13.4211 12.7337 13.5774 12.5774C13.7337 12.4211 13.9457 12.3333 14.1667 12.3333C14.3877 12.3333 14.5996 12.4211 14.7559 12.5774C14.9122 12.7337 15 12.9457 15 13.1667ZM15 9.83333C15 10.0543 14.9122 10.2663 14.7559 10.4226C14.5996 10.5789 14.3877 10.6667 14.1667 10.6667C13.9457 10.6667 13.7337 10.5789 13.5774 10.4226C13.4211 10.2663 13.3333 10.0543 13.3333 9.83333C13.3333 9.61232 13.4211 9.40036 13.5774 9.24408C13.7337 9.0878 13.9457 9 14.1667 9C14.3877 9 14.5996 9.0878 14.7559 9.24408C14.9122 9.40036 15 9.61232 15 9.83333ZM10.8333 13.1667C10.8333 13.3877 10.7455 13.5996 10.5893 13.7559C10.433 13.9122 10.221 14 10 14C9.77899 14 9.56702 13.9122 9.41074 13.7559C9.25446 13.5996 9.16667 13.3877 9.16667 13.1667C9.16667 12.9457 9.25446 12.7337 9.41074 12.5774C9.56702 12.4211 9.77899 12.3333 10 12.3333C10.221 12.3333 10.433 12.4211 10.5893 12.5774C10.7455 12.7337 10.8333 12.9457 10.8333 13.1667ZM10.8333 9.83333C10.8333 10.0543 10.7455 10.2663 10.5893 10.4226C10.433 10.5789 10.221 10.6667 10 10.6667C9.77899 10.6667 9.56702 10.5789 9.41074 10.4226C9.25446 10.2663 9.16667 10.0543 9.16667 9.83333C9.16667 9.61232 9.25446 9.40036 9.41074 9.24408C9.56702 9.0878 9.77899 9 10 9C10.221 9 10.433 9.0878 10.5893 9.24408C10.7455 9.40036 10.8333 9.61232 10.8333 9.83333ZM6.66667 13.1667C6.66667 13.3877 6.57887 13.5996 6.42259 13.7559C6.26631 13.9122 6.05435 14 5.83333 14C5.61232 14 5.40036 13.9122 5.24408 13.7559C5.0878 13.5996 5 13.3877 5 13.1667C5 12.9457 5.0878 12.7337 5.24408 12.5774C5.40036 12.4211 5.61232 12.3333 5.83333 12.3333C6.05435 12.3333 6.26631 12.4211 6.42259 12.5774C6.57887 12.7337 6.66667 12.9457 6.66667 13.1667ZM6.66667 9.83333C6.66667 10.0543 6.57887 10.2663 6.42259 10.4226C6.26631 10.5789 6.05435 10.6667 5.83333 10.6667C5.61232 10.6667 5.40036 10.5789 5.24408 10.4226C5.0878 10.2663 5 10.0543 5 9.83333C5 9.61232 5.0878 9.40036 5.24408 9.24408C5.40036 9.0878 5.61232 9 5.83333 9C6.05435 9 6.26631 9.0878 6.42259 9.24408C6.57887 9.40036 6.66667 9.61232 6.66667 9.83333Z" fill="#ADA9BB"/>
      </svg>`,
  },
  {
    relatedSideBarID: 'speakers',
    title: 'Speakers',
    icon: `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33333 8.33332C10.1743 8.33332 11.6667 6.84094 11.6667 4.99999C11.6667 3.15904 10.1743 1.66666 8.33333 1.66666C6.49238 1.66666 5 3.15904 5 4.99999C5 6.84094 6.49238 8.33332 8.33333 8.33332Z" stroke="#ADA9BB" stroke-width="1.5"/>
        <path d="M8.33333 17.5C11.555 17.5 14.1667 16.0076 14.1667 14.1666C14.1667 12.3257 11.555 10.8333 8.33333 10.8333C5.11167 10.8333 2.5 12.3257 2.5 14.1666C2.5 16.0076 5.11167 17.5 8.33333 17.5Z" stroke="#ADA9BB" stroke-width="1.5"/>
        <path d="M15.8333 1.66666C15.8333 1.66666 17.5 2.66666 17.5 4.99999C17.5 7.33332 15.8333 8.33332 15.8333 8.33332M14.1667 3.33332C14.1667 3.33332 15 3.83332 15 4.99999C15 6.16666 14.1667 6.66666 14.1667 6.66666" stroke="#ADA9BB" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `,
  },
  {
    relatedSideBarID: 'reports',
    title: 'Reports',
    icon: `
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 8.33332C1.5 5.19082 1.5 3.61916 2.47667 2.64332C3.45333 1.66749 5.02417 1.66666 8.16667 1.66666H9.83333C12.9758 1.66666 14.5475 1.66666 15.5233 2.64332C16.4992 3.61999 16.5 5.19082 16.5 8.33332V11.6667C16.5 14.8092 16.5 16.3808 15.5233 17.3567C14.5467 18.3325 12.9758 18.3333 9.83333 18.3333H8.16667C5.02417 18.3333 3.4525 18.3333 2.47667 17.3567C1.50083 16.38 1.5 14.8092 1.5 11.6667V8.33332Z" stroke="#ADA9BB" stroke-width="1.5"/>
        <path d="M5.66666 8.33331H12.3333M5.66666 11.6666H9.83332" stroke="#ADA9BB" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `,
  },
  {
    relatedSideBarID: '',
    title: 'Profile',
    icon: `
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.09753 17C9.244 15.625 10.9699 14.75 12.9001 14.75C14.8303 14.75 16.5562 15.625 17.7026 17M20.15 12C20.15 16.0041 16.9041 19.25 12.9 19.25C8.89596 19.25 5.65002 16.0041 5.65002 12C5.65002 7.99594 8.89596 4.75 12.9 4.75C16.9041 4.75 20.15 7.99594 20.15 12ZM15.15 10C15.15 11.2426 14.1427 12.25 12.9 12.25C11.6574 12.25 10.65 11.2426 10.65 10C10.65 8.75736 11.6574 7.75 12.9 7.75C14.1427 7.75 15.15 8.75736 15.15 10Z" stroke="#FCF7FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
];

function toggleNavCollapsed() {
  const nav = document.querySelector('nav')!;
  const collapsed = nav.getAttribute('data-collapsed') === 'true';
  nav.setAttribute('data-collapsed', collapsed ? 'false' : 'true');
}

function closeMobileNav() {
  document.querySelector('nav')!.setAttribute('data-mobile-nav-opened', 'false');
}

function toggleMobileNav() {
  const nav = document.querySelector('nav')!;
  const mobileNavOpened = nav.getAttribute('data-mobile-nav-opened') === 'true';

  nav.setAttribute('data-mobile-nav-opened', mobileNavOpened ? 'false' : 'true');
}

function highlightNavLink(id: string) {
  document.querySelectorAll<HTMLButtonElement>('.nav-link').forEach(navLink => {
    removeClass(navLink, 'selected');
  });

  const currentActiveNavLink = document.getElementById(id)!;
  addClass(currentActiveNavLink, 'selected');
}

function initBaseNav() {
  const baseNav = document.querySelector('.base-nav') as HTMLDivElement;
  baseNav.innerHTML += `<div class="base-nav-slider"></div>`;

  baseNavButtons.forEach(({ icon, title, relatedSideBarID }, index) => {
    baseNav.innerHTML += `
      <button onclick="moveSlider(${index});highlightNavLink('${relatedSideBarID}')" class="base-nav-item">
        <span class="icon">${icon}</span>
        <span>${title}</span>
      </button>
    `;
  });
}

function moveSlider(index: number) {
  activeBaseNavButtonIndex = index;

  const destinationButtons = document.querySelectorAll<HTMLButtonElement>('.base-nav-item');
  destinationButtons.forEach(btn => removeClass(btn, 'active'));

  const destinationButton = destinationButtons.item(index);
  addClass(destinationButton, 'active');

  const slider = document.querySelector('.base-nav-slider') as HTMLDivElement;
  slider.style.width = `${destinationButton.clientWidth}px`;
  slider.style.left = `${16 + index * (8 + destinationButton.clientWidth)}px`;
}

window.addEventListener('load', () => {
  initBaseNav();
  moveSlider(activeBaseNavButtonIndex);
});
