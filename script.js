//your JS code here. If required.
function updateTimer(){
	const now = new Date();

	const formattedDate = now.toLocalDateString();
	const formattedTime = now.toLocalTimeString();

	const timerElement = document.getElementById("timer");
	if(timerElement){
			timerElement.textContent = `${formattedDate}, ${formattedTime}`;
	}
}

updateTimer();
setInterval(updateTimer, 1000);