var audio;

// Hide the pause button
$('#pause').hide();

// Initialize Audio
initAudio($('#playlist li:first-child'));

// Initlializer function
function initAudio(element){
	var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');

	// Create Audio Object
	audio = new Audio('media/' + song);
	
	// Checks to make sure no audio is playing when the page loads.
	if(!audio.currentTime){
		$('#duration').html('0.00');
	}

	// Display current songs info
	$('#audio-player .title').text(title);
	$('#audio-player .artist').text(artist);

	// Insert cover image
	$('img.cover').attr('src', 'media/' + cover);
	$('#playlist li').removeClass('active');
	element.addClass('active');
}

// Play Button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});