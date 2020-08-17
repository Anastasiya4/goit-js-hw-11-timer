'use strict'

const refs = {
daysBlock: document.querySelector('[data-value="days"]'),
hoursBlock: document.querySelector('[data-value="hours"]'),
minsBlock: document.querySelector('[data-value="mins"]'),
secsBlock: document.querySelector('[data-value="secs"]'),
startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
}

const timer = {
  intervalId: null,
  isActive: false,
start() {
if(this.isActive){
  return;
}

this.isActive = true;
const targetDate = new Date('Jul 17, 2019');

//updateClockface(0);

this.intervalId = setInterval(() => {
    const currentTime = Date.now();
    const time = targetDate - currentTime;

    updateClockface(time);
}, 1000);
},
stop(){
  clearInterval(this.intervalId);
  this.intervalId = null;
  this.isActive = false;
  //updateClockface(0);
}
};
function updateClockface(time) {
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));    
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

refs.daysBlock.textContent = `${days}`;
refs.hoursBlock.textContent = `${hours}`;
refs.minsBlock.textContent = `${mins}`;
refs.secsBlock.textContent = `${secs}`;
//refs.clockfasce.textContent = `${days}:${hours}:${mins}:${secs}`
//подставить правильно
}


function pad(value){
    return String(value).padStart(2, '0');
}
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
//const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
//const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
//const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
//const secs = Math.floor((time % (1000 * 60)) / 1000);

//плагин
/*new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  }); */

  refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));