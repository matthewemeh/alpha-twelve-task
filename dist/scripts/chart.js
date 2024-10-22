let barChart;

function initChart(containerID) {
  const ctx = document.getElementById(containerID);
  const theme = localStorage.getItem('theme') ?? 'light';

  barChart?.destroy();

  const barPosition = {
    id: 'barPosition',
    beforeDraw: function (chart, args, plugins) {
      const {
        data,
        chartArea: { left, width },
      } = chart;

      const barWidth = width / data.labels.length;

      chart.getDatasetMeta(0).data.forEach((datapoint, index) => {
        datapoint.x = left + barWidth * (index + 0.36);
      });
    },
  };

  const { availWidth } = window.screen;
  const isMobileView = availWidth <= 600;
  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [
        {
          maxBarThickness: isMobileView ? 16 : 25.6,
          data: [
            { x: isMobileView ? 'Ja' : 'Jan', y: 650 },
            { x: isMobileView ? 'Fb' : 'Feb', y: 900 },
            { x: isMobileView ? 'Mr' : 'Mar', y: 760 },
            { x: isMobileView ? 'Ap' : 'Apr', y: 430 },
            { x: isMobileView ? 'Ma' : 'May', y: 1000 },
            { x: isMobileView ? 'Jn' : 'Jun', y: 550 },
            { x: isMobileView ? 'Jl' : 'Jul', y: 860 },
            { x: isMobileView ? 'Ag' : 'Aug', y: 350 },
            { x: isMobileView ? 'Se' : 'Sep', y: 840 },
            { x: isMobileView ? 'Oc' : 'Oct', y: 660 },
            { x: isMobileView ? 'No' : 'Nov', y: 950 },
            { x: isMobileView ? 'De' : 'Dec', y: 600 },
          ],
        },
      ],
    },
    options: {
      plugins: { legend: false },
      maintainAspectRatio: !isMobileView,
      elements: {
        bar: { backgroundColor: '#8576FF', borderRadius: 1 },
      },
      defaults: {
        font: { size: 10, lineHeight: 12, weight: 'normal', family: 'Inter' },
      },
      scales: {
        x: {
          border: { display: false, dash: [3, 3] },
          grid: {
            drawTicks: false,
            color: ctx => {
              const isFirstVerticalLine = ctx?.tick?.value === 0;
              const isLastVerticalLine = ctx.index === undefined;
              if (isFirstVerticalLine || isLastVerticalLine) {
                return 'transparent';
              } else {
                return '#E2E8F0';
              }
            },
          },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            autoSkip: false,
            padding: isMobileView ? 14 : 16,
            color: theme === 'light' ? '#64748B' : '#FCF7FF',
            font: { size: 10, weight: 'normal', family: 'Inter' },
          },
        },
        y: {
          beginAtZero: true,
          border: { display: false, dash: [3, 3] },
          grid: {
            drawTicks: false,
            color: ctx => {
              const isFirstHorizontalLine = ctx?.tick?.value === 0;
              const isLastHorizontalLine = ctx.chart.scales.y.ticks.length - 1 === ctx.index;
              if (isFirstHorizontalLine || isLastHorizontalLine) {
                return 'transparent';
              } else {
                return '#E2E8F0';
              }
            },
          },
          ticks: {
            stepSize: 200,
            autoSkip: false,
            padding: isMobileView ? 14 : 16,
            color: theme === 'light' ? '#64748B' : '#FCF7FF',
            font: { size: 10, weight: 'normal', family: 'Inter' },
          },
        },
      },
    },
    plugins: [barPosition],
  });
}

window.addEventListener('load', () => {
  initChart('summary-chart');
});

window.addEventListener('resize', () => {
  initChart('summary-chart');
});
