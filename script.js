var clockLabel = document.getElementById('clockLabel');
var millisecondsPerGameMinute = 1437;
var timer = new Date(1987, 11, 13, 0, 0, 0);
updateLabel();
var intervalHandle = setInterval(function() { incrementMinute(); updateLabel(); stopIf6AM(); }, millisecondsPerGameMinute);

function incrementMinute() {
	timer.setMinutes(timer.getMinutes() + 1);
	return true;
}

function updateLabel() {
	clockLabel.innerHTML = twelveHourClock( timer.getHours() ) + ':' + padZeros( timer.getMinutes() ) + ' AM';
	return true;
}

function twelveHourClock(hour) {
	hour += (hour == 0 ? 12 : hour > 12 ? -12 : 0); 
	return hour;
}

function padZeros(number) {
	return (number < 10 ? '0' : '') + number;
}

function stopIf6AM() {
	if (timer.getHours() == 6) clearInterval(intervalHandle);
	return true;
}
