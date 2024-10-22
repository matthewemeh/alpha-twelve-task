"use strict";
const events = [
    {
        date: '2024-10-15',
        status: 'completed',
        attendees: 300,
        speakers: ['Jane Doe', 'John Wilde', 'Danny Murphy'],
        name: 'Cloud Innovation Summit',
    },
    {
        date: '2024-11-05',
        status: 'in progress',
        attendees: 200,
        speakers: ['Dr. Peter Smith', 'John Wilde', 'Danny Murphy'],
        name: 'Blockchain Revolution Conference',
    },
    {
        date: '2024-12-01',
        status: 'completed',
        attendees: 150,
        speakers: ['Dr. Aisha Malik', 'John Wilde', 'Danny Murphy'],
        name: 'AI in Healthcare Symposium',
    },
    {
        date: '2024-10-25',
        status: 'completed',
        attendees: 30,
        speakers: ['John Lee', 'John Wilde', 'Danny Murphy'],
        name: 'Future of Fintech Forum',
    },
    {
        date: '2024-11-12',
        status: 'completed',
        attendees: 500,
        speakers: ['Rachel Moore', 'John Wilde', 'Danny Murphy'],
        name: 'Data Analytics in Business',
    },
    {
        date: '2024-09-28',
        status: 'completed',
        attendees: 600,
        speakers: ['Prof. Alan Green', 'John Wilde', 'Danny Murphy'],
        name: 'Sustainable Energy Expo',
    },
    {
        date: '2024-10-10',
        status: 'in progress',
        attendees: 6000,
        speakers: ['Kevin Adams', 'John Wilde', 'Danny Murphy'],
        name: 'Web3 Interfaces Workshop',
    },
    {
        date: '2024-09-30',
        status: 'in progress',
        attendees: 30,
        speakers: ['Guest Panel', 'John Wilde', 'Danny Murphy'],
        name: 'Tech Safari Mixer',
    },
    {
        date: '2024-11-19',
        status: 'completed',
        attendees: 760,
        speakers: ['Emily Zhang', 'John Wilde', 'Danny Murphy'],
        name: 'Cybersecurity for Startups',
    },
    {
        date: '2024-10-18',
        status: 'in progress',
        attendees: 764,
        speakers: ['Dr. Maria Hernandez', 'John Wilde', 'Danny Murphy'],
        name: 'Smart Cities Forum',
    },
    {
        date: '2024-10-15',
        status: 'completed',
        attendees: 300,
        speakers: ['Jane Doe', 'John Wilde', 'Danny Murphy'],
        name: 'Cloud Innovation Summit',
    },
    {
        date: '2024-12-01',
        status: 'completed',
        attendees: 300,
        speakers: ['Dr. Aisha Malik', 'John Wilde', 'Danny Murphy'],
        name: 'AI in Healthcare Symposium',
    },
    {
        date: '2024-11-05',
        status: 'in progress',
        attendees: 300,
        speakers: ['Dr. Peter Smith', 'John Wilde', 'Danny Murphy'],
        name: 'Blockchain Revolution Conference',
    },
    {
        date: '2024-10-25',
        status: 'completed',
        attendees: 300,
        speakers: ['John Lee', 'John Wilde', 'Danny Murphy'],
        name: 'Future of Fintech Forum',
    },
    {
        date: '2024-11-12',
        status: 'completed',
        attendees: 300,
        speakers: ['Rachel Moore', 'John Wilde', 'Danny Murphy'],
        name: 'Data Analytics in Business',
    },
    {
        date: '2024-09-28',
        status: 'completed',
        attendees: 503,
        speakers: ['Prof. Alan Green', 'John Wilde', 'Danny Murphy'],
        name: 'Sustainable Energy Expo',
    },
    {
        date: '2024-10-10',
        status: 'in progress',
        attendees: 300,
        speakers: ['Kevin Adams', 'John Wilde', 'Danny Murphy'],
        name: 'Web3 Interfaces Workshop',
    },
    {
        date: '2024-11-19',
        status: 'completed',
        attendees: 90,
        speakers: ['Emily Zhang', 'John Wilde', 'Danny Murphy'],
        name: 'Cybersecurity for Startups',
    },
    {
        date: '2024-10-18',
        status: 'in progress',
        attendees: 300,
        speakers: ['Dr. Maria Hernandez', 'John Wilde', 'Danny Murphy'],
        name: 'Smart Cities Forum',
    },
    {
        date: '2024-09-30',
        status: 'in progress',
        attendees: 101,
        speakers: ['Guest Panel', 'John Wilde', 'Danny Murphy'],
        name: 'Tech Safari Mixer',
    },
    {
        date: '2024-09-30',
        status: 'in progress',
        attendees: 311,
        speakers: ['Guest Panel', 'John Wilde', 'Danny Murphy'],
        name: 'Tech Safari Mixer',
    },
];
let filteredEvents = [...events];
function resetFilter() {
    filteredEvents = [...events];
    loadPaginationNumbers();
    update(0);
}
function filter(field, value) {
    filteredEvents = events.filter(event => {
        const eventKeyValue = event[field];
        if (Array.isArray(eventKeyValue)) {
            return eventKeyValue.includes(value);
        }
        return eventKeyValue === value;
    });
    loadPaginationNumbers();
    update(0);
}
function showEventModal() {
    const modal = document.querySelector('.modal');
    removeClass(modal, 'invisible');
}
function showEvent(name, speakers, date, attendees) {
    document.querySelector('.event-name').textContent = name;
    document.querySelector('.event-date').textContent = date;
    document.querySelector('.event-info').innerHTML = `${speakers.length} Guest Speakers: ${speakers.join(', ')}.<br />${attendees} Attendees`;
    showOverlay();
    showEventModal();
}
function expandAccordion(index) {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach((accordion, idx) => {
        if (index !== idx)
            accordion.setAttribute('aria-expanded', 'false');
    });
    const oldAriaExpanded = accordions.item(index).getAttribute('aria-expanded') === 'true';
    accordions.item(index).setAttribute('aria-expanded', oldAriaExpanded ? 'false' : 'true');
}
function loadEvents() {
    const eventsTableBody = document.querySelector('#events tbody');
    eventsTableBody.innerHTML = '';
    filteredEvents
        .slice(itemsPerRow * startIndex, itemsPerRow * startIndex + itemsPerRow)
        .forEach((eventItem, index) => {
        const { date, name, speakers, status, attendees } = eventItem;
        eventsTableBody.innerHTML += `
        <tr class="default" data-status="${status}" onclick="showEvent('${name}', [${speakers.map(speaker => `'${speaker}'`)}], '${date}', ${attendees})">
          <td>${name}</td>
          <td>${date}</td>
          <td>${speakers[0]}</td>
          <td><div class="status">${status}</div></td>
        </tr>
        <tr class="accordion" aria-expanded="false" data-status="${status}" onclick="expandAccordion(${index})">
          <td>
            <div class="top">
              <button class="chevron">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <p class="text">${name}</p>
              <div class="status">${status}</div>
            </div>
            <div class="bottom" onclick="showEvent('${name}', [${speakers.map(speaker => `'${speaker}'`)}], '${date}', ${attendees})">
              <p>${speakers[0]}</p>
              <p>${date}</p>
            </div>
          </td>
        </tr>
      `;
    });
    document.querySelector('.results').textContent = `Displaying ${filteredEvents.length} results`;
}
window.addEventListener('load', () => {
    loadEvents();
});
