let datePicker;

window.addEventListener('load', () => {
  datePicker = datepicker('.date-picker', { id: 1, maxDate: new Date() });
});
