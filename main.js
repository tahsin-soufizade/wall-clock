const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRatio(secondHand, secondsRatio);
    setRatio(minuteHand, minutesRatio);
    setRatio(hourHand, hoursRatio);
}


function setRatio(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}