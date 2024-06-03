

const now = new Date();
const date = new Intl.DateTimeFormat();
const currentDate = document.querySelector('#date');
currentDate.innerHTML = date.format(now);