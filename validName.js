/* jshint esversion: 6 */
/* Create a function validating initial and a word */

function isInitialsValid(initial) {
	const initialsRegex = /^[A-Z].$/;
	return initialsRegex.test(initial);
}

function isWordValid(word) {
	const wordRegex = /^[A-Z][a-z]+$/;
	return wordRegex.test(word);
}

function checkThreePartName(phraseArray) {
	const checkIfFirstElmentInitial = isInitialsValid(phraseArray[0]);
	const checkIfSeconElementWord = isWordValid(phraseArray[1]);

	return (checkIfFirstElmentInitial && checkIfSeconElementWord) ? false : true;
}

function validName(phrase) {
	const checkIfPhraseString = typeof phrase === 'string';

	if (!checkIfPhraseString) {
		return false;
	}
	const phraseElements = phrase.split(' ');

	if (phraseElements.length <= 1 || phraseElements.length > 3) {
		return false;
	}

	const checkIfElementsValid = phraseElements.every(el => isInitialsValid(el) || isWordValid(el));
	const checkIfLastElementInitial = isInitialsValid(phraseElements[phraseElements.length-1]);
	const checkIfThreePartNameValid = phraseElements.length === 3 ? checkThreePartName(phraseElements) : true;

	return checkIfElementsValid && !checkIfLastElementInitial && checkIfThreePartNameValid;
}

const examplesWrong = ['Herbert', 'H Wells', 'H. G Wells', 'h. Wells', 'H. wells', 'h. g. Wells', 'H. George Wells', 'H. G. W.', 'Herb. G. Wells'];
const examplesRight = ['H. Wells', 'H. G. Wells', 'Herbert G. Wells', 'Herbert George Wells'];

console.log('INVALID');
examplesWrong.forEach((e, i) => console.log(i + ': ' +validName(e)));
// console.log(validName('Herbert G. Wells'));
console.log('VALID');
examplesRight.forEach((e, i) => console.log(i + ': ' +validName(e)));