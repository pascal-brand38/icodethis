// setInterval(func, delay)
let daysElement = document.getElementById('days').getElementsByTagName('span');
let hoursElement = document.getElementById('hours').getElementsByTagName('span');
let minutesElement = document.getElementById('minutes').getElementsByTagName('span');
let secondsElement = document.getElementById('seconds').getElementsByTagName('span');

// restart animations on a given dom element
// from https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
const restartAnimations = (el) => {
  el.classList.remove('date-digit');
  el.offsetHeight;
  el.classList.add('date-digit')};

function setDigits(el, number, prevnumber) {
  let d = Math.floor(number / 10)
  if (d !== Math.floor(prevnumber / 10)) {
    el[0].textContent = d
    restartAnimations(el[0])
  }

  d = number % 10
  if (d !== prevnumber % 10) {
    el[1].textContent = d
    restartAnimations(el[1])
  }
}

let prevnow = new Date("2000-01-30")
function setTime() {
  let now = new Date()
  //secondsElement.innerHTML = now.getSeconds()
  setDigits(daysElement, 25 - 1 - now.getDate(), 25 - 1 - prevnow.getDate())
  setDigits(hoursElement, 24 - 1 -now.getHours(), 24 - 1 -prevnow.getHours())
  setDigits(minutesElement, 60 - 1 - now.getMinutes(), 60 - 1 - prevnow.getMinutes())
  setDigits(secondsElement, 60 - 1 - now.getSeconds(), 60 - 1 - prevnow.getSeconds())

  prevnow = now
  setTimeout(setTime, 1000)
}

setTime()
