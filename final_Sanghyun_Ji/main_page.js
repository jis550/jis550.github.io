$(document).ready(function() {
	$('.slide img:gt(0)').hide();
	setInterval(function(){
$('.slide :first-child').fadeOut(1500).next('img').fadeTo(500,1).end().appendTo('.slide');},2000);
	});

