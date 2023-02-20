let date = new Date();
let currentDate = document.getElementById('current-date');
let currentTime = document.getElementById('current-time');
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'];
let currentMonth = date.getMonth();
let currentDay = date.getDay();	
let currentYear = date.getFullYear();

currentDate.innerHTML = `${months[currentMonth]} - ${currentDay}/${currentYear}`

setInterval(() => {

	let date = new Date();		

	if (date.getHours <= 12) {		
		currentTime.innerHTML = `${date.getHours()}/${date.getMinutes()}/${date.getSeconds()} am`
	}else {
		currentTime.innerHTML = `${date.getHours() - 12}/${date.getMinutes()}/${date.getSeconds()} pm`
	};

}, 1000);

