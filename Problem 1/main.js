/*
Task 1: Make the button in the html respond to a click and log to the console any message.

Task 2: Make the button in the html add your message to a div in the html instead of console.logging the message.

Task 3: When the button is clicked and the message shows up, change the text on the button to say Erase instead of Submit.

Task 4: If the Erase button is clicked, your message goes away and the button's text changes from Erase back to Submit. The Submit button should work as in tasks 2 and 3.

Task 5: When the Submit button is pressed, instead of printing a message to the div, it should print wahtever is typed in the Input field which is in the html.

Task 6: The Input field should be cleared out when Submit is pressed, but if nothing was typed in the Input field and Submit was pressed, then the Input field should receive focus and the Submit button should still say Submit until something has been entered in the Input field and Submit has been pressed again.
*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const surveyButton = document.getElementById('submit');
	surveyButton.addEventListener('click', () => {
		const nameInput = document.getElementById('name');
		console.log(nameInput.value);
		//console.log('Program has started.');
		const contentDiv = document.getElementById('message');
		contentDiv.innerHTML += 'Program has started';
		const surveyButton = document.getElementById('submit');
		surveyButton.innerHTML = 'Erase';

		if (surveyButton.innerHTML === 'Erase') {
			surveyButton.innerHTML === 'Submit';
		} else if (surveyButton.innerHTML === 'Submit') {
			surveyButton.innerHTML === 'Erase';
		}
	});
});
