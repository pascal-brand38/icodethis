// setInterval(func, delay)
let daysElement = document.getElementById('days').getElementsByTagName('div');
let hoursElement = document.getElementById('hours').getElementsByTagName('div');
let minutesElement = document.getElementById('minutes').getElementsByTagName('div');
let secondsElement = document.getElementById('seconds').getElementsByTagName('div');

// restart animations on a given dom element
// from https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
const restartAnimations = (el, c) => {
  el.classList.remove(c);
  el.offsetHeight;
  el.classList.add(c)
};

function setDigits(el, number, prevnumber) {
  let d = Math.floor(number / 10)
  let dprev = Math.floor(prevnumber / 10)
  if (d !== dprev) {
    el[1].textContent = d
    el[2].textContent = dprev
    restartAnimations(el[1], 'date-digit-animation-new')
    restartAnimations(el[2], 'date-digit-animation-old')
  }

  d = number % 10
  dprev = prevnumber % 10
  if (d !== dprev % 10) {
    el[4].textContent = d
    el[5].textContent = dprev
    restartAnimations(el[4], 'date-digit-animation-new')
    restartAnimations(el[5], 'date-digit-animation-old')
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
