/* Stwórz funkcję, która przyjmuje tablicę liczb, i zwraca
    posortowaną tablice rosnąco. */

function sortNumbersArray(elements) {
	// 1. Stworz tablice pomocnicza o nazwie sortedElements

	// 2. Znajdź indeks najmniejszego elementu w tablicy

	// 3. Dopoki tablica nie jest pusta
		// 4. usun najmniejszy element z tablicy elements
		// 5. dodaj znaleziony, najmniejszy element do tablicy sortedElements

	// 6. zwroc tablice sortedElements
}

function sortNumbersArray(elements) {
	let sortedElements = [];
	let min = elements[0];

	for (let i = 0; i < elements.length; i++) {
		if (min > elements[i]) {
			min = elements[i];
		}
	}
	return sortedElements;
}