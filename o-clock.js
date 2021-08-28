"use strict";
var hourHand = document.querySelector('.hour');
var minuteHand = document.querySelector('.minute');
var secondHand = document.querySelector('.second');
var setClock = function () {
    var currentDate = new Date();
    var secondsRatio = currentDate.getSeconds() / 60;
    var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    var hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
};
var setRotation = function (element, rotationRatio) {
    var ratio = rotationRatio * 360;
    element.style.setProperty('--rotation', ratio.toString());
};
setClock();
setInterval(setClock, 1000);
