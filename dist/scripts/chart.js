function initChart(containerID) {
  const ctx = document.getElementById(containerID);

  const barChart = new Chart(ctx, {
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
          ticks: { padding: 16, color: '#64748B', font: { size: 10 } },
        },
        y: {
          beginAtZero: true,
          grid: { tickLength: 0, color: '#E2E8F0' },
          border: { color: '#ffffff', dash: [3, 3] },
          ticks: { padding: 16, color: '#64748B', font: { size: 10 }, stepSize: 200 },
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
