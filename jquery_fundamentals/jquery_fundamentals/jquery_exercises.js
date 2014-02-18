// SOLUTIONS GO BELOW EACH EXERCISE

// EXERCISE: Change Background

// Change the background color of '#target' by script.
// Hint: you can use .css

<script>
$(document).ready(function(){
	$("#target").css({
	'background-color': 'red'
	})
})
</script>


// EXERCISE: Change Parent

// Change the text in the span, a child of "#target"
// Hint: you can use .text

<script>
$(document).ready(function() {
	$('#target span').text('this is some different text')
});
</script>

// EXERCISE: Create Clone

// Create a clone of the span in "#target" and position it under the origin.
// Hint: you can use .clone and .insertAfter

<script>
$(document).ready(function(){
	var newTarget = $('#target span').clone()
	$(newTarget).insertAfter('#target')
})
</script>

// EXERCISE: Use Filter

// Change background color of the second ".target"
// Hint: you can use .eq and .css

<script>
	$(document).ready(function(){
		$('.target').eq(1).css({'background-color': 'green'})
	})
</script>

// EXERCISE: Disable Buttons

// Disable the button
// Hint: you will have to select the button and can use .attr

<script>
	$(document).ready(function(){
		var button = $('button')
		button.attr('disabled', 'disabled')
	})
</script>

// EXERCISE: Uncheck CheckBoxes

// Uncheck all checkboxes using jQuery
// Hint: you will have to select the input and can use .removeAttr

<script>
	$(document).ready(function(){
		var checkbox = $('[type=checkbox')
		checkbox.attr('checked', false)

	})
</script>

// EXERCISE: Change Parent

// Move "#child" from "#parent1" to "#parent2"
// Hint: you can use .appendTo

<script>
	$(document).ready(function(){
		var child = $('#child')
		child.detach().appendTo('#parent2')
	})
</script>



// EXERCISE: Select A Option in A Select Box

// Select the second option in the selectbox by script
// Hint: you will have to select the option and can use .eq and .attr

// EXERCISE: Change Size

// Make "#target" double size
// Hint: you can use .css, .width and .height

// EXERCISE: Empty Elements
// Hint: you can use .empty

// Remove all children and text of "#target"

// EXERCISE: Delay

// Show Alert with 1 second delay (Use "setTimeout")
// Hint: you can use .setTimeout and alert

// EXERCISE: Count

// Show the number of children in an alert
// Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5

// EXERCISE: Animate

// Make "#target" double size with animation
// Hint: you can use .animate, .width, and .height

// EXERCISE: Alternate Color

// Make the list-box alternating. (Make odd options a different color)
// Hint: you can select the option and use .filter and .css

// EXERCISE: All But One

// Remove all children of "#target" but h2
// Hint: you can use .children, .not and .remove

// EXERCISE: Without Children

// Remove all 'div' whitch has no child elements.
// Hint: you can use .not and .remove. Look closely at what options you can pass .not


