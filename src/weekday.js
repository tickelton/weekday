function updateClock() {
	var hand = document.getElementById("src_img").contentDocument.getElementById("g4261");
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var day = d.getDay();
	
	hand.setAttribute('transform', 'translate(-500,0) rotate('+
				(((day*24*60)+(hours*60)+minutes)/(10080/360)-25.7)+
				' 800 300)');
}

function setClockTimer() {
	updateClock()
	setInterval(updateClock, 60000) 
}
