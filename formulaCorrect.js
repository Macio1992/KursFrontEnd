/* jshint esversion: 6 */

const allowedCharacters = ['+', '-', '*', '/', '=', '(', ')', 'a', ' '];

function checkIfCharactersAllowed(str) {
    let regex = /^((([0-9]+)|a)[\+\-\*\/\=\(\)])$/;
    return regex.test(str);
}

function formula(str) {
    if (str === '') {
        return undefined;
    }

    const equation = str.split(' ');
    console.log('checkIfCharactersAllowed', checkIfCharactersAllowed(str));
}

console.log(checkIfCharactersAllowed('a'));