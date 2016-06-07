
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	$('.new').click(function(){
 	 	newGame();
 	 });

  	var newGame = function(){
  		//resetting the page for a new game
  		genNumber = randNumber();
  		$('#feedback').text('Pick a number between 1 and 100!')
  		$('#guessList').empty();
  		numberofGuesses = 0;
		$('#count').text(numberofGuesses);
  	}

  	var randNumber = function(){
  		var number = Math.floor(Math.random() * 100);
  		return number; 
  	}

  	var genNumber = randNumber()


  	var setFeedback = function(guessNumber) {

  		var feedback;
  		var distance = Math.abs(genNumber - guessNumber)

  		//50 or more away = Ice Cold
  		if (distance >= 50){
  			feedback = "Ice cold"; 
  		}
  		//30-50 = cold
  		else if (distance >= 30){
  			feedback = "Cold";
  		}
  		//20-30 = warm
  		else if (distance >= 20){
  			feedback = "Warm";
  		}
  		//10-20 = hot
  		else if (distance >= 10){
  			feedback = "Hot";
  		}
  		//1-10 = very hot
  		else if (distance >=1){
  			feedback= "Very Hot";
  		}
  		else if (guessNumber = genNumber){
  			feedback = "You Won! Click new game to play again."
  		}

  		$('#feedback').text(feedback);

  		$('#guessList').append('<li>' + guessNumber + '</li>');

  	}

  	$('form').submit(function(e){
  		e.preventDefault();
  		var guessNumber = $('#userGuess').val();
  		setFeedback(guessNumber);
  		$('#userGuess').val('').focus();
  		numberofGuesses ++;
  		$('#count').text(numberofGuesses)
  	});

  	var numberofGuesses = 0;

  	


});


