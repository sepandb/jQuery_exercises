$(document).ready(function(){
	var i = 1;

	var isOdd = function(number){
		if (number%2 == 0){
			return false;
		}else{
			return true;
		}
	}

	var checkThree = function(one, two, three){
		if (one === two && two === three && one !== "") {
			alert("winner!");
			i = 1;
			$('td').empty();
		}
	}


	var checkWinner = function(){
		checkThree($('#11').html(), $('#12').html(), $('#13').html());
		checkThree($('#21').html(), $('#22').html(), $('#23').html());
		checkThree($('#31').html(), $('#32').html(), $('#33').html());
		checkThree($('#11').html(), $('#21').html(), $('#31').html());
		checkThree($('#12').html(), $('#22').html(), $('#32').html());
		checkThree($('#13').html(), $('#23').html(), $('#33').html());
		checkThree($('#11').html(), $('#22').html(), $('#33').html());
		checkThree($('#31').html(), $('#22').html(), $('#13').html());
	}

	var selection = function() {
		if ($(this).html() === "") {
			if (isOdd(i)) {
				$(this).html("X");
				i++;
				checkWinner();
			}else{
				$(this).html("O");
				i++;
				checkWinner();
			}

		}
		console.log(i);
		if (i === 10){
			i = 1;
			$('td').empty();
			alert("NEW GAME FROM DOWN BELOW")
		}

	}
	$('td').click(selection)
	//$('td').bind('click ', selection);



})