function hours(date) {
	let currentHours = date.getHours();
	if (currentHours > 12) {
		currentHours -= 12;
		return currentHours;
	}
	else if (currentHours == 0) {
		currentHours += 12;
		return currentHours;
	}
	else {
		return currentHours;
	}
}

function minutes(date) {
	let currentMinutes = date.getMinutes();
	if (currentMinutes < 10) {
		singleDigitMinutes = "0" + currentMinutes; 
		return singleDigitMinutes;
	}
	else {
		return currentMinutes;
	}
}

function seconds(date) {
	let currentseconds = date.getSeconds();
	if (currentseconds < 10) {
		singleDigitseconds = "0" + currentseconds; 
		return singleDigitseconds;
	}
	else {
		return currentseconds;
	}
}

function clock() {
	let time = new Date();
	let currentTime = {
		hours: hours(time),
		minutes: minutes(time),
		seconds: seconds(time),
	}
	return currentTime;
}

function changeDisplay() {
	let currentTime = clock();
	let hoursDisplay = document.getElementById("hours");
	hoursDisplay.textContent = currentTime["hours"] + ":";
	let minutesDisplay = document.getElementById("minutes");
	minutesDisplay.textContent = currentTime["minutes"] + ":";
	let secondsDisplay = document.getElementById("seconds");
	secondsDisplay.textContent = currentTime["seconds"];
}

setInterval(changeDisplay, 1)