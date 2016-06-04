'use strict';

$(document).ready(function() {
	var $minutes = $('#minutes'),
		$seconds = $('seconds'),
		$timer = $('#timer'),
		intervalId,
		timer,
		count = function(timer, direction) {
		return function() {
			if (timer.expired()) {
				$('reset').trigger('click');
				window.alert('timer expired');
			} else {
				$timer.text(timer[direction]);
			}
		};
	},
	
		setTimer = function(direction) {
		$('reset').trigger('click');
		var minutes = $minutes.val() || 0,
			seconds = $seconds.val() || 0;
		timer = time(parseInt(minutes, 10) * 60 + parseInt(seconds, 10));
		intervalId = setInterval(count(timer, direction),1000);
	};
	
	$('#count-up').click(function() {
		setTimer('up');
	});
	
	$('#count-down').click(function() {
		setTimer('down');
	});
	
	$('#reset').click(function() {
		clearInterval(intervalId);
		$timer.text('00:00');
	});
	

	var time = function(secondsTo) {
		var printable = function(seconds) {
			return [parseInt((seconds / 60) / 10, 10),
			        parseInt((seconds / 60) % 10, 10),
			        ':',
			        parseInt((seconds % 60) / 10, 10),
			        parseInt(seconds % 10, 10)].join('');
		},
		
		secondsFrom = 0;
		secondsTo = secondsTo || 0;
		
		return {
			up : function() {
				secondsFrom += 1;
				return printable(secondsFrom);
			},
			
			down : function() {
				secondsTo -= 1;
				return printable(secondsTo);
			},
			
			expired : function() {
				return secondsFrom === secondsTo;
			}
		};
	};	
	
	
	
})