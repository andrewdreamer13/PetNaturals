

const now = new Date();
const date = new Intl.DateTimeFormat('ua');
const currentDate = document.querySelector('#date');
currentDate.innerHTML = date.format(now);

