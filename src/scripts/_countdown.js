const countDown = document.querySelector('#countdown');

let time = 3600;

setInterval(() => {
  let hours;
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes == 60 ? minutes = '00' : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  hours = time == 3600 ? Math.floor(time / time *2) :  Math.floor(time / time)
  countDown.innerHTML = `${hours}:${minutes}:${seconds}`; 
  time--;
},1000);


