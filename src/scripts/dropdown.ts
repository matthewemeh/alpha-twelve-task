interface Option {
  label: string;
  onclick: string;
}

interface DropdownButton {
  id: string;
  title: string;
  content?: string;
  options: Option[];
}

function toggleDropdown(dropdownID: string) {
  closeAllDropdowns(dropdownID);

  const dropdown = document.getElementById(dropdownID)!;
  const oldAriaValue = dropdown.ariaExpanded;
  dropdown.ariaExpanded = oldAriaValue === 'true' ? 'false' : 'true';
}

function closeAllDropdowns(exceptDropdownID?: string) {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    if (dropdown.id !== exceptDropdownID) {
      dropdown.ariaExpanded = 'false';
    }
  });
}

function updateDropdownText(dropdownID: string, newText: string) {
  document.querySelector(`#${dropdownID} .text`)!.textContent = newText;
}

function loadDropdowns() {
  const dropdownButtons: DropdownButton[] = [
    {
      title: 'Date',
      id: 'date-filter',
      content: "<div class='date-picker'></div>",
      options: [],
    },
    {
      title: 'Status',
      id: 'status-filter',
      options: [
        { label: 'All', onclick: 'resetFilter()' },
        { label: 'Completed', onclick: "filter('status','completed')" },
        { label: 'In Progress', onclick: "filter('status','in progress')" },
      ],
    },
    {
      title: 'Name',
      id: 'name-filter',
      options: [
        { label: 'All', onclick: 'resetFilter()' },
        ...[...new Set(filteredEvents.map(({ speakers: [mainSpeaker] }) => mainSpeaker))].map(
          speaker => ({
            label: speaker,
            onclick: `filter('speakers','${speaker}')`,
          })
        ),
      ],
    },
    {
      title: 'Most Recent',
      id: 'recent-filter',
      options: [
        {
          label: 'Most Recent',
          onclick: "sort('date','desc');updateDropdownText('recent-filter', 'Most Recent')",
        },
        {
          label: 'Earliest',
          onclick: "sort('date','asc');updateDropdownText('recent-filter', 'Earliest')",
        },
        {
          label: 'Most Attendees',
          onclick: "sort('attendees','desc');updateDropdownText('recent-filter', 'Attendees')",
        },
        {
          label: 'Least Attendees',
          onclick: "sort('attendees','asc');updateDropdownText('recent-filter', 'Attendees')",
        },
        {
          label: 'Event Name',
          onclick: "sort('name','asc');updateDropdownText('recent-filter', 'Event Name')",
        },
      ],
    },
    {
      title: '10 rows',
      id: 'items-length-filter',
      options: [
        {
          label: '5',
          onclick: "updateItemsPerRow(5);updateDropdownText('items-length-filter', '5 rows')",
        },
        {
          label: '10',
          onclick: "updateItemsPerRow(10);updateDropdownText('items-length-filter', '10 rows')",
        },
        {
          label: '15',
          onclick: "updateItemsPerRow(15);updateDropdownText('items-length-filter', '15 rows')",
        },
      ],
    },
  ];

  dropdownButtons.forEach(({ id, options, title, content }) => {
    const dropdown = document.getElementById(id) as HTMLDivElement;
    let optionButtons = '';

    options.forEach(({ label, onclick }) => {
      optionButtons += `<button class="dropdown-item" onclick="${onclick};closeAllDropdowns()">${label}</button>`;
    });

    dropdown.innerHTML = `
      <button class="btn" onclick="toggleDropdown('${id}')">
        <span class="text">${title}</span>
        <span class="caret">
          <svg width="6" height="5" fill="none" viewBox="0 0 6 5" xmlns="http://www.w3.org/2000/svg">
            <path stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M5.16665 1.16666L2.99998 3.5L0.833313 1.16666" />
          </svg>
        </span>
      </button>
      <div class="content">${content ?? optionButtons}</div>
    `;
  });
}

window.addEventListener('load', () => {
  loadDropdowns();
});
