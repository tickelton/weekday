function updateClock() {
	var hand = document.getElementById("src_img").contentDocument.getElementById("rect2987");
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	
	hand.setAttribute('transform', 'rotate('+ ((hours*60)+minutes)/4 +' 100 100)');
}

function setClockTimer() {
	updateClock()
	setInterval(updateClock, 60000) 
}
