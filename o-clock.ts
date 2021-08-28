const hourHand = document.querySelector('.hour') as HTMLInputElement;
const minuteHand = document.querySelector('.minute') as HTMLInputElement;
const secondHand = document.querySelector('.second') as HTMLInputElement;

const setClock = () => {
    const currentDate: Date = new Date();
    const secondsRatio: number = currentDate.getSeconds() / 60;
    const minutesRatio: number = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio: number = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

const setRotation = (element: HTMLInputElement, rotationRatio: number) => {
    const ratio: number = rotationRatio * 360;
    element.style.setProperty('--rotation', ratio.toString());
}

setClock();

setInterval(setClock, 1000);