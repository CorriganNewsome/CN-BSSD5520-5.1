'use strict';

document.addEventListener('DOMContentLoaded', () => {
	//in the future this data comes from a website or database
	const possibleAnimals = ['dog', 'lion', 'bear'];

	const animalSelector = document.getElementById('animals');
	for (let i = 0; i < possibleAnimals.length; i++) {
		const animalOption = document.createElement('option');
		animalOption.innerHTML = possibleAnimals[i];
		animalSelector.appendChild(animalOption);
	}

	const animalImg = document.createElement('img');
	const messageDiv = document.getElementById('message');
	messageDiv.appendChild(animalImg);
	const optionsDiv = document.getElementById('options');
	optionsDiv.innerHTML += possibleAnimals.join(', ');

	const surveyButton = document.getElementById('submit');
	surveyButton.addEventListener('click', () => {
		//valid animals to type in input

		const selectionIndex = animalSelector.selectedIndex;
		const inputVal = possibleAnimals[selectionIndex];
		console.log(selectionIndex, inputVal);

		//show inputVal image in img tag
		animalImg.src = `./images\\${inputVal}.jpg`;
		animalImg.alt = inputVal;
	});
});
