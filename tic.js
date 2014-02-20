
	$(document).ready(function() {
		var td = $('td')
		// td.text("x")


		var current_turn = 'x' ; // or 'o'

		var switchTurn = function() {
			if (current_turn == 'x') {
				current_turn = 'o';
			} else {
				current_turn = 'x';
			}
		}

		var reply_click = function(){
			 var position = this.id;
			 $(this).html(current_turn);
			 switchTurn();


		}

		$('td').click(reply_click);




	})

