"use strict";
let date = new Date();
let currentDate = document.getElementById('current-date');
let currentTime = document.getElementById('current-time');
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'];
let currentMonth = date.getMonth();
let currentDay = date.getDate();
let currentYear = date.getFullYear();
currentDay < 10 ?
    currentDate.innerHTML = `${months[currentMonth]} - 0${currentDay}/${currentYear}` :
    currentDate.innerHTML = `${months[currentMonth]} - ${currentDay}/${currentYear}`;
setInterval(() => {
    let date = new Date();
    let currentHours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    let currentMinutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    let currentSeconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    if (date.getHours() < 12 && date.getHours() != 0) {
        currentTime.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds} am`;
    }
    else if (date.getHours() === 0) {
        currentTime.innerHTML = `12:${currentMinutes}:${currentSeconds} am`;
    }
    else if (date.getHours() === 12) {
        currentTime.innerHTML = `12:${currentMinutes}:${currentSeconds} pm`;
    }
    else if (date.getHours() >= 12 && date.getHours() - 12 < 10) {
        let convertedHours = parseInt(currentHours) - 12;
        currentTime.innerHTML = `0${convertedHours}:${currentMinutes}:${currentSeconds} pm`;
    }
    else if (date.getHours() >= 12 && date.getHours() - 12 >= 10) {
        let convertedHours = parseInt(currentHours) - 12;
        currentTime.innerHTML = `${convertedHours}:${currentMinutes}:${currentSeconds} pm`;
    }
}, 1000);
