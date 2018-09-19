// jQuery Ovning

// uppgift 2
$(function() {
	
	
	//uppgift 3
	$('p').addClass('uppg3class');
	
	//uppgift 4
	var uppg4height = $('#uppg4-box').height();
	var uppg4width = $('#uppg4-box').width();
	$('#uppg4-box').html('H: ' + uppg4height + 'px, ' + 'W: ' + uppg4width + 'px');
	
	//uppgift 5
	$('#uppg5-btn').click(function() {
		$('#uppg5-box').show('slow');
	});
	
	//uppgift 6
	$('#uppg6-btn').click(function() {
		$('#uppg6-box').addClass('uppg6-class');
	});
	
	//uppgift 7
	$('#uppg7-btn').click(function() {
		$('#uppg7-box').animate({
			width: '+=100px',
			height: '+=100px',
			opacity: 0.5	//gör #uppg7-box 50% genomskinlig
		}, 2000);	//animationstid i ms
	});


});
