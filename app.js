/*$(document).ready(function(){

	$('#count-down').click(function(){		
		var minutes = parseInt($('#minutes').val(), 10);
		var	seconds = parseInt($('#seconds').val(), 10);
		var timer = minutes * 60 + seconds;
		var intervalId;
		
		intervalId = setInterval(function(){
		 minutes = parseInt(timer / 60, 10);
	     seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		$('#timer').text(minutes + ':' + seconds);

		if (--timer < 0) {
			clearInterval(interval);
		}
	}, 1000);

	});

	$('#count-up').click(function(){
		var toMinutes = parseInt($('#minutes').val(), 10);
		var	toSeconds = parseInt($('#seconds').val(), 10);
		var timer = toMinutes * 60 + toSeconds;
		var minutes,
			seconds;
		
		
			intervalId = setInterval(function(){
			minutes = parseInt(toMinutes - (timer - toSeconds) / 60, 10);
			
			if (toMinutes == 0) {
				seconds = toSeconds - timer;
			}
			else {
				seconds = parseInt(60  - (timer - toSeconds) % 60 == 60 ? 0 : 60 - (timer - toSeconds) % 60, 10);
			}			
			
			if (minutes == toMinutes && seconds == toSeconds) {
				clearInterval(interval);
			}
		
			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;
			
			$('#timer').text(minutes + ':' + seconds);
			
			--timer;
			
			
			
			
		}, 1000);		
		
	});
	
	$('#reset').click(function(){
		clearInterval(intervalId);
	});

});*/