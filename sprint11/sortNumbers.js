/* Stwórz funkcję, która przyjmuje tablicę liczb, i zwraca
posortowaną tablice rosnąco. */

function sortNumbersArray(elements) {

	//1. Stwórz pomocniczą tablicę o nazwie "sortedElements"
	let sortedElements = [];

		// 2. Dopóki tablica nie jest pusta
		// 	2a. Znajdź indeks najmniejszego elementu z tablicy "elements"
		let min = elements[0];
		let minIndex = 0;
		for (let i = 0; i < elements.length; i++) {
			if (elements[i] < min) {
				min = elements[i];
				minIndex = i;
			}
		}

		// 	2b. Dodaj element o najmniejszym indeksie do tablicy "sortedElements"
		sortedElements.push(elements[i]);
		return minIndex;

		// 	2c. Usuń element o najmniejszym indeksie z tablicy "elements"
		elements.splice(1,1);

		// 3. Zwróć tablicę "sortedElements"
		return sortedElements;

}
console.log(sortNumbersArray([2,1,5,8,6]));
























	function sortNumbersArray(elements) {
	let sortedElements = [];
	let min = elements[0];
	let minIndex = 0;

	for (let i = 0; i < elements.length; i++) {
		if (elements[i] < min) {
			min = elements[i];
			minIndex = i;
		}
	}
	for (let i =0; i < elements.length; i++) {
		let removeSmallest = elements.indexOf(min);
		if ( elements[i] != removeSmallest) {
			sortedElements.push(elements[i]);
		}
	}
	// 3. Dopoki tablica nie jest pusta
	  // 4. usun najmniejszy element z tablicy elements
		// 5. dodaj znaleziony, najmniejszy element do tablicy sortedElements
		return sortedElements;
}
console.log(sortNumbersArray([2,1,5,8,6]));

function sortNumbersArray(elements) {
	let sortedElements = [];
	let min = elements[0];
	let minIndex = 0;

	for (let i = 0; i < elements.length; i++) {
		if (elements[i] < min) {
			min = elements[i];
			minIndex = i;
		}
	}
	for (let i = 0; i < elements.length; i++) {
		let pos = elements.indexOf(1);
		let remove = elements.splice(pos,1);
		
		if ( elements[i] != remove) {
			sortedElements.push(elements[i]);

		}

	}
	return sortedElements;
	}
	// 3. Dopoki tablica nie jest pusta
	  // 4. usun najmniejszy element z tablicy elements
		// 5. dodaj znaleziony, najmniejszy element do tablicy sortedElements

// console.log(sortNumbersArray([2,1,5,8,6]));

 let find = [2,1,4,5,6];
 console.log(find.indexOf(1));