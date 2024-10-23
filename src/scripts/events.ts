interface EventType {
  name: string;
  date: string;
  attendees: number;
  description: string;
  speakers: string[];
  status: 'completed' | 'in progress';
}

const events: EventType[] = [
  {
    date: '2024-10-15',
    status: 'completed',
    attendees: 300,
    description:
      'The Cloud Innovation Summit is a premier event that gathers industry leaders, experts, and enthusiasts to explore the latest trends and breakthroughs in cloud technology. Join us for insightful discussions, workshops, and networking opportunities.',
    speakers: ['Jane Doe', 'John Wilde', 'Danny Murphy'],
    name: 'Cloud Innovation Summit',
  },
  {
    date: '2024-11-05',
    status: 'in progress',
    attendees: 200,
    speakers: ['Dr. Peter Smith', 'John Wilde', 'Danny Murphy'],
    name: 'Blockchain Revolution Conference',
    description:
      'The Blockchain Revolution Conference is a dynamic event that brings together innovators, experts, and pioneers in the blockchain industry. Expect engaging keynotes, panel discussions, and hands-on workshops exploring the potential of blockchain technology across various sectors.',
  },
  {
    date: '2024-12-01',
    status: 'completed',
    attendees: 150,
    speakers: ['Dr. Aisha Malik', 'John Wilde', 'Danny Murphy'],
    name: 'AI in Healthcare Symposium',
    description:
      'The AI in Healthcare Symposium is a forward-thinking event that explores the intersection of artificial intelligence and healthcare. Delve into the latest research, applications, and ethical considerations of AI in healthcare. With insightful presentations from industry leaders and opportunities for networking.',
  },
  {
    date: '2024-10-25',
    status: 'completed',
    attendees: 30,
    speakers: ['John Lee', 'John Wilde', 'Danny Murphy'],
    name: 'Future of Fintech Forum',
    description:
      'Future of Fintech Forum is a dynamic event that brings together industry leaders, innovators, and tech enthusiasts to explore the latest trends and advancements in financial technology. The forum features panel discussions, keynote presentations, and networking sessions focusing on emerging technologies such as blockchain, digital payments, AI in finance, and the evolution of financial services.',
  },
  {
    date: '2024-11-12',
    status: 'completed',
    attendees: 500,
    speakers: ['Rachel Moore', 'John Wilde', 'Danny Murphy'],
    name: 'Data Analytics in Business',
    description:
      'Data Analytics in Business explores how data-driven insights can transform decision-making and strategy. The event features concise talks and discussions on leveraging analytics tools, predictive modeling, and big data to boost business performance and innovation.',
  },
  {
    date: '2024-09-28',
    status: 'completed',
    attendees: 600,
    speakers: ['Prof. Alan Green', 'John Wilde', 'Danny Murphy'],
    name: 'Sustainable Energy Expo',
    description:
      'Sustainable Energy Expo showcases the latest innovations in renewable energy and eco-friendly technologies. The event includes exhibits, expert talks, and networking opportunities focused on solar, wind, and other sustainable energy solutions.',
  },
  {
    date: '2024-10-10',
    status: 'in progress',
    attendees: 6000,
    speakers: ['Kevin Adams', 'John Wilde', 'Danny Murphy'],
    name: 'Web3 Interfaces Workshop',
    description:
      'Web3 Interfaces Workshop is a hands-on event focused on building user-friendly interfaces for decentralized applications (dApps). Participants will explore design principles, tools, and frameworks for creating seamless Web3 experiences.',
  },
  {
    date: '2024-09-30',
    status: 'in progress',
    attendees: 30,
    speakers: ['Guest Panel', 'John Wilde', 'Danny Murphy'],
    name: 'Tech Safari Mixer',
    description:
      'Tech Safari Mixer is a casual networking event for tech enthusiasts, startups, and industry pros to connect and share ideas. It offers a relaxed atmosphere with discussions on the latest tech trends and innovations.',
  },
  {
    date: '2024-11-19',
    status: 'completed',
    attendees: 760,
    speakers: ['Emily Zhang', 'John Wilde', 'Danny Murphy'],
    name: 'Cybersecurity for Startups',
    description:
      'Cybersecurity for Startups is an event designed to help new businesses protect their digital assets. It covers practical strategies, risk management, and tools to safeguard against cyber threats.',
  },
  {
    date: '2024-10-18',
    status: 'in progress',
    attendees: 764,
    speakers: ['Dr. Maria Hernandez', 'John Wilde', 'Danny Murphy'],
    name: 'Smart Cities Forum',
    description:
      'Smart Cities Forum explores innovations in urban planning and technology, focusing on IoT, AI, and sustainable solutions for smarter, more connected cities. It features expert panels and networking opportunities.',
  },
  {
    date: '2024-10-15',
    status: 'completed',
    attendees: 300,
    speakers: ['Jane Doe', 'John Wilde', 'Danny Murphy'],
    name: 'Cloud Innovation Summit',
    description:
      'The Cloud Innovation Summit is a premier event that gathers industry leaders, experts, and enthusiasts to explore the latest trends and breakthroughs in cloud technology. Join us for insightful discussions, workshops, and networking opportunities.',
  },
  {
    date: '2024-12-01',
    status: 'completed',
    attendees: 300,
    speakers: ['Dr. Aisha Malik', 'John Wilde', 'Danny Murphy'],
    name: 'AI in Healthcare Symposium',
    description:
      'The AI in Healthcare Symposium is a forward-thinking event that explores the intersection of artificial intelligence and healthcare. Delve into the latest research, applications, and ethical considerations of AI in healthcare. With insightful presentations from industry leaders and opportunities for networking.',
  },
  {
    date: '2024-11-05',
    status: 'in progress',
    attendees: 300,
    speakers: ['Dr. Peter Smith', 'John Wilde', 'Danny Murphy'],
    name: 'Blockchain Revolution Conference',
    description:
      'The Blockchain Revolution Conference is a dynamic event that brings together innovators, experts, and pioneers in the blockchain industry. Expect engaging keynotes, panel discussions, and hands-on workshops exploring the potential of blockchain technology across various sectors.',
  },
  {
    date: '2024-10-25',
    status: 'completed',
    attendees: 300,
    speakers: ['John Lee', 'John Wilde', 'Danny Murphy'],
    name: 'Future of Fintech Forum',
    description:
      'Future of Fintech Forum is a dynamic event that brings together industry leaders, innovators, and tech enthusiasts to explore the latest trends and advancements in financial technology. The forum features panel discussions, keynote presentations, and networking sessions focusing on emerging technologies such as blockchain, digital payments, AI in finance, and the evolution of financial services.',
  },
  {
    date: '2024-11-12',
    status: 'completed',
    attendees: 300,
    speakers: ['Rachel Moore', 'John Wilde', 'Danny Murphy'],
    name: 'Data Analytics in Business',
    description:
      'Data Analytics in Business explores how data-driven insights can transform decision-making and strategy. The event features concise talks and discussions on leveraging analytics tools, predictive modeling, and big data to boost business performance and innovation.',
  },
  {
    date: '2024-09-28',
    status: 'completed',
    attendees: 503,
    speakers: ['Prof. Alan Green', 'John Wilde', 'Danny Murphy'],
    name: 'Sustainable Energy Expo',
    description:
      'Sustainable Energy Expo showcases the latest innovations in renewable energy and eco-friendly technologies. The event includes exhibits, expert talks, and networking opportunities focused on solar, wind, and other sustainable energy solutions.',
  },
  {
    date: '2024-10-10',
    status: 'in progress',
    attendees: 300,
    speakers: ['Kevin Adams', 'John Wilde', 'Danny Murphy'],
    name: 'Web3 Interfaces Workshop',
    description:
      'Web3 Interfaces Workshop is a hands-on event focused on building user-friendly interfaces for decentralized applications (dApps). Participants will explore design principles, tools, and frameworks for creating seamless Web3 experiences.',
  },
  {
    date: '2024-11-19',
    status: 'completed',
    attendees: 90,
    speakers: ['Emily Zhang', 'John Wilde', 'Danny Murphy'],
    name: 'Cybersecurity for Startups',
    description:
      'Cybersecurity for Startups is an event designed to help new businesses protect their digital assets. It covers practical strategies, risk management, and tools to safeguard against cyber threats.',
  },
  {
    date: '2024-10-18',
    status: 'in progress',
    attendees: 300,
    speakers: ['Dr. Maria Hernandez', 'John Wilde', 'Danny Murphy'],
    name: 'Smart Cities Forum',
    description:
      'Smart Cities Forum explores innovations in urban planning and technology, focusing on IoT, AI, and sustainable solutions for smarter, more connected cities. It features expert panels and networking opportunities.',
  },
  {
    date: '2024-09-30',
    status: 'in progress',
    attendees: 101,
    speakers: ['Guest Panel', 'John Wilde', 'Danny Murphy'],
    name: 'Tech Safari Mixer',
    description:
      'Tech Safari Mixer is a casual networking event for tech enthusiasts, startups, and industry pros to connect and share ideas. It offers a relaxed atmosphere with discussions on the latest tech trends and innovations.',
  },
  {
    date: '2024-09-30',
    status: 'in progress',
    attendees: 311,
    speakers: ['Guest Panel', 'John Wilde', 'Danny Murphy'],
    name: 'Tech Safari Mixer',
    description:
      'Tech Safari Mixer is a casual networking event for tech enthusiasts, startups, and industry pros to connect and share ideas. It offers a relaxed atmosphere with discussions on the latest tech trends and innovations.',
  },
];

type SortOrder = 'asc' | 'desc';
let filteredEvents: EventType[] = [...events];
let lastSortFilter: { sortName: keyof EventType; sortOrder: SortOrder } = {
  sortName: 'date',
  sortOrder: 'desc',
};

function resetFilter() {
  filteredEvents = [...events];
  loadPaginationNumbers();
  update(0);
}

function filter(field: keyof EventType, value: string) {
  filteredEvents = events.filter(event => {
    const eventKeyValue: string | number | string[] = event[field];
    if (Array.isArray(eventKeyValue)) {
      return eventKeyValue.includes(value);
    }
    return eventKeyValue === value;
  });
  loadPaginationNumbers();
  sort(lastSortFilter.sortName, lastSortFilter.sortOrder);
}

function sort(field: keyof EventType, order: SortOrder = 'desc') {
  filteredEvents = [...filteredEvents].sort((a, b) => {
    if (field === 'date') {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return order === 'desc' ? dateB - dateA : dateA - dateB;
    } else if (field === 'attendees') {
      return order === 'desc' ? b.attendees - a.attendees : a.attendees - b.attendees;
    } else if (field === 'name') {
      return order === 'desc' ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
    } else {
      return 0;
    }
  });
  lastSortFilter.sortName = field;
  lastSortFilter.sortOrder = order;
  update(0);
}

function showEventModal() {
  const modal = document.querySelector('.modal') as HTMLDivElement;
  removeClass(modal, 'invisible');
}

function showEvent(
  name: string,
  speakers: string[],
  date: string,
  attendees: number,
  description: string
) {
  document.querySelector('.event-name')!.textContent = name;
  document.querySelector('.event-date')!.textContent = date;
  document.querySelector('.event-description')!.textContent = description;
  document.querySelector('.event-info')!.innerHTML = `${
    speakers.length
  } Guest Speakers: ${speakers.join(', ')}.<br />${attendees} Attendees`;
  showOverlay();
  showEventModal();
}

function expandAccordion(index: number) {
  const accordions = document.querySelectorAll<HTMLTableRowElement>('.accordion');
  accordions.forEach((accordion, idx) => {
    if (index !== idx) accordion.setAttribute('aria-expanded', 'false');
  });
  const oldAriaExpanded = accordions.item(index).getAttribute('aria-expanded') === 'true';

  accordions.item(index).setAttribute('aria-expanded', oldAriaExpanded ? 'false' : 'true');
}

function loadEvents() {
  const eventsTableBody = document.querySelector('#events tbody')!;
  eventsTableBody.innerHTML = '';
  filteredEvents
    .slice(itemsPerRow * startIndex, itemsPerRow * startIndex + itemsPerRow)
    .forEach((eventItem, index) => {
      const { date, name, speakers, status, attendees, description } = eventItem;
      eventsTableBody.innerHTML += `
        <tr class="default" data-status="${status}" onclick="showEvent('${name}', [${speakers.map(
        speaker => `'${speaker}'`
      )}], '${date}', ${attendees}, '${description}')">
          <td>${name}</td>
          <td>${date}</td>
          <td>${speakers[0]}</td>
          <td><div class="status">${status}</div></td>
        </tr>
        <tr class="accordion" aria-expanded="false" data-status="${status}">
          <td>
            <div class="top" onclick="expandAccordion(${index})">
              <button class="chevron">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <p class="text">${name}</p>
              <div class="status">${status}</div>
            </div>
            <div class="bottom" onclick="showEvent('${name}', [${speakers.map(
        speaker => `'${speaker}'`
      )}], '${date}', ${attendees}, '${description}')">
              <p>${speakers[0]}</p>
              <p>${date}</p>
            </div>
          </td>
        </tr>
      `;
    });

  document.querySelector('.results')!.textContent = `Displaying ${filteredEvents.length} results`;
}

window.addEventListener('load', () => {
  loadEvents();
  sort('date', 'desc');
});
