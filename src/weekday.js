var a = document.getElementById("src_img");
var i = 10;

a.addEventListener("load", function() {
var svgDoc = a.contentDocument;
var hand = svgDoc.getElementById("rect2987");
hand.setAttribute('transform', 'rotate(10 100 100)');
}, false);

setInterval(function() {
var svgDoc = a.contentDocument;
var hand = svgDoc.getElementById("rect2987");
hand.setAttribute('transform', 'rotate('+ i +' 100 100)');
i = i +10;
}, 1000)

