interface EventType {
  name: string;
  date: string;
  speaker: string;
  status: 'completed' | 'in progress';
}

const events: EventType[] = [
  {
    date: '2024-10-15',
    status: 'completed',
    speaker: 'Jane Doe',
    name: 'Cloud Innovation Summit',
  },
  {
    date: '2024-11-05',
    status: 'in progress',
    speaker: 'Dr. Peter Smith',
    name: 'Blockchain Revolution Conference',
  },
  {
    date: '2024-12-01',
    status: 'completed',
    speaker: 'Dr. Aisha Malik',
    name: 'AI in Healthcare Symposium',
  },
  {
    date: '2024-10-25',
    status: 'completed',
    speaker: 'John Lee',
    name: 'Future of Fintech Forum',
  },
  {
    date: '2024-11-12',
    status: 'completed',
    speaker: 'Rachel Moore',
    name: 'Data Analytics in Business',
  },
  {
    date: '2024-09-28',
    status: 'completed',
    speaker: 'Prof. Alan Green',
    name: 'Sustainable Energy Expo',
  },
  {
    date: '2024-10-10',
    status: 'in progress',
    speaker: 'Kevin Adams',
    name: 'Web3 Interfaces Workshop',
  },
  {
    date: '2024-09-30',
    status: 'in progress',
    speaker: 'Guest Panel',
    name: 'Tech Safari Mixer',
  },
  {
    date: '2024-11-19',
    status: 'completed',
    speaker: 'Emily Zhang',
    name: 'Cybersecurity for Startups',
  },
  {
    date: '2024-10-18',
    status: 'in progress',
    speaker: 'Dr. Maria Hernandez',
    name: 'Smart Cities Forum',
  },
  {
    date: '2024-10-15',
    status: 'completed',
    speaker: 'Jane Doe',
    name: 'Cloud Innovation Summit',
  },
  {
    date: '2024-12-01',
    status: 'completed',
    speaker: 'Dr. Aisha Malik',
    name: 'AI in Healthcare Symposium',
  },
  {
    date: '2024-11-05',
    status: 'in progress',
    speaker: 'Dr. Peter Smith',
    name: 'Blockchain Revolution Conference',
  },
  {
    date: '2024-10-25',
    status: 'completed',
    speaker: 'John Lee',
    name: 'Future of Fintech Forum',
  },
  {
    date: '2024-11-12',
    status: 'completed',
    speaker: 'Rachel Moore',
    name: 'Data Analytics in Business',
  },
  {
    date: '2024-09-28',
    status: 'completed',
    speaker: 'Prof. Alan Green',
    name: 'Sustainable Energy Expo',
  },
  {
    date: '2024-10-10',
    status: 'in progress',
    speaker: 'Kevin Adams',
    name: 'Web3 Interfaces Workshop',
  },
  {
    date: '2024-11-19',
    status: 'completed',
    speaker: 'Emily Zhang',
    name: 'Cybersecurity for Startups',
  },
  {
    date: '2024-10-18',
    status: 'in progress',
    speaker: 'Dr. Maria Hernandez',
    name: 'Smart Cities Forum',
  },
  {
    date: '2024-09-30',
    status: 'in progress',
    speaker: 'Guest Panel',
    name: 'Tech Safari Mixer',
  },
  {
    date: '2024-09-30',
    status: 'in progress',
    speaker: 'Guest Panel',
    name: 'Tech Safari Mixer',
  },
];

let filteredEvents: EventType[] = [...events];

function resetFilter() {
  filteredEvents = [...events];
  loadPaginationNumbers();
  update(0);
}

function filter(field: keyof EventType, value: string) {
  filteredEvents = events.filter(event => event[field] === value);
  loadPaginationNumbers();
  update(0);
}

function loadEvents() {
  const eventsTableBody = document.querySelector('#events tbody')!;
  eventsTableBody.innerHTML = '';
  filteredEvents
    .slice(itemsPerRow * startIndex, itemsPerRow * startIndex + itemsPerRow)
    .forEach(({ date, name, speaker, status }) => {
      eventsTableBody.innerHTML += `
            <tr data-status="${status}">
                <td>${name}</td>
                <td>${date}</td>
                <td>${speaker}</td>
                <td><div class="status">${status}</div></td>
            </tr>
      `;
    });

  document.querySelector('.results')!.textContent = `Displaying ${filteredEvents.length} results`;
}

window.addEventListener('load', () => {
  loadEvents();
});
