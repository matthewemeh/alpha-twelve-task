interface SummaryItem {
  mainLabel: string;
  subLabel: string;
  change?: 'gain' | 'loss';
  changeValuePercent: number;
}

function loadSummaryItems() {
  const summaryItems: SummaryItem[] = [
    {
      change: 'gain',
      subLabel: '100,000',
      changeValuePercent: 5,
      mainLabel: 'Total Events',
    },
    {
      change: 'loss',
      subLabel: '25',
      changeValuePercent: 5,
      mainLabel: 'Active Speakers',
    },
    {
      change: 'gain',
      subLabel: '300',
      changeValuePercent: 5,
      mainLabel: 'Total Registrations',
    },
    {
      change: 'gain',
      subLabel: '$500,000',
      changeValuePercent: 5,
      mainLabel: 'Total Revenue',
    },
  ];

  const summarySection = document.querySelector('.summary')!;
  summaryItems.forEach(({ changeValuePercent, mainLabel, subLabel, change }) => {
    summarySection.innerHTML += `
        <div class="summary-item">
            <div class="top">
                <span class="label">${mainLabel}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8.66666V9.99999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.33335 5.99999C8.33335 6.18409 8.18412 6.33332 8.00002 6.33332C7.81593 6.33332 7.66669 6.18409 7.66669 5.99999C7.66669 5.81589 7.81593 5.66666 8.00002 5.66666C8.18412 5.66666 8.33335 5.81589 8.33335 5.99999Z"/>
                  <path d="M12.8334 7.99999C12.8334 10.6694 10.6694 12.8333 8.00002 12.8333C5.33064 12.8333 3.16669 10.6694 3.16669 7.99999C3.16669 5.33061 5.33064 3.16666 8.00002 3.16666C10.6694 3.16666 12.8334 5.33061 12.8334 7.99999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="bottom">
                <span class="label">${subLabel}</span>
                <span data-change="${change}" class="value">${
      change === 'gain' ? '+' : '-'
    }${changeValuePercent.toFixed(1)}%</span>
            </div>
        </div>
    `;
  });
}

window.addEventListener('load', () => {
  loadSummaryItems();
});
