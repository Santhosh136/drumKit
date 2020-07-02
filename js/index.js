// plays sound with presses or clicked key accordingly
function playSound(letter) {
	let audio;

		switch(letter) {
			case 'w': audio = new Audio('sounds/tom-1.mp3'); break;
			case 'a': audio = new Audio('sounds/tom-2.mp3'); break;
			case 's': audio = new Audio('sounds/tom-3.mp3'); break;
			case 'd': audio = new Audio('sounds/tom-4.mp3'); break;
			case 'j': audio = new Audio('sounds/snare.mp3'); break;
			case 'k': audio = new Audio('sounds/crash.mp3'); break;
			case 'l': audio = new Audio('sounds/kick-bass.mp3'); break;
			default: console.log("Invalid");
		}

	if(audio) audio.play();
}

// adds pressed animation to buttons
function buttonPressed(letter) {
	$("."+letter).addClass("pressed");

	setTimeout( function() {
		$("."+letter).removeClass("pressed");
	}, 100 );
}

// selects drum buttons and adds event listeners
$(".drum").on("click", function(){
	let letter = this.innerHTML;
	playSound(letter);
	buttonPressed(letter);
});

// get keys pressed by users
$(document).on("keydown", function(event) {
	let letter = event.key;
	playSound(letter);
	buttonPressed(letter);
});