function updateClock() {
	var hand = document.getElementById("src_img").contentDocument.getElementById("g3007");
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var day = d.getDay();
	
	hand.setAttribute('transform', 'rotate('+
				(((day*24*60)+(hours*60)+minutes)/(10080/360)-25.7) +
				' 300 300)');
}

function setClockTimer() {
	updateClock()
	setInterval(updateClock, 60000) 
}
