/* jshint esversion: 6 */
/* Create a function validating initial and a word */

function isInitialValid(initial) {
	const initialRegex = /^[A-Z].$/;
	return initialRegex.test(initial);
}

function isWordValid(word) {
	const wordRegex = /^[A-Z][a-z]*$/;
	return wordRegex.test(word);
}

console.log(isWordValid('Maciej'));