// setInterval(func, delay)
let daysElement = document.getElementById('days');
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');


function setTime() {
  let now = new Date()
  //secondsElement.innerHTML = now.getSeconds()
  daysElement.innerHTML = 25 - 1 - now.getDate()
  hoursElement.innerHTML = 24 - 1 -now.getHours()
  minutesElement.innerHTML = 60 - 1 - now.getMinutes()
  secondsElement.innerHTML = 60 - 1 - now.getSeconds()
  setTimeout(setTime, 1000)
}

setTime()
