$(document).ready(function(){

	var isOdd = function(number){
		if (number%2 == 0){
			return false;
		}else{
			return true;
		}
	}

	var checkWinner = function(){


	}
	var i = 1;
	var selection = function() {
		if ($(this).html() === "") {
			if (isOdd(i)) {
				$(this).html("O");
				i++;
			}else{
				$(this).html("x");
				i++;
			}
		}
	}

	$('td').click(selection);


})