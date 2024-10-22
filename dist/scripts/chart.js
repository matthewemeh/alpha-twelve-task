let barChart;

function initChart(containerID) {
  const ctx = document.getElementById(containerID);
  const theme = localStorage.getItem('theme') ?? 'light';

  barChart?.destroy();

  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [
        {
          backgroundColor: '#8576FF',
          data: {
            Jan: 650,
            Feb: 900,
            Mar: 760,
            Apr: 430,
            May: 1000,
            Jun: 550,
            Jul: 860,
            Aug: 350,
            Sep: 840,
            Oct: 660,
            Nov: 950,
            Dec: 600,
          },
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: { tickLength: 0, color: '#E2E8F0' },
          border: { color: '#E2E8F0', dash: [3, 3] },
          ticks: {
            padding: 16,
            font: { size: 10 },
            color: theme === 'light' ? '#64748B' : '#FCF7FF',
          },
        },
        y: {
          beginAtZero: true,
          grid: { tickLength: 0, color: '#E2E8F0' },
          border: { color: theme === 'light' ? '#FFFFFF' : '#484554', dash: [3, 3] },
          ticks: {
            padding: 16,
            stepSize: 200,
            font: { size: 10 },
            color: theme === 'light' ? '#64748B' : '#FCF7FF',
          },
        },
      },
      plugins: {
        legend: { display: false },
      },
    },
  });
}

window.addEventListener('load', () => {
  initChart('summary-chart');
});
