/*Find the Index (Part 1)
Create a function that finds the index of a given item.

Examples
search([1, 5, 3], 5) ➞ 1

search([9, 8, 3], 3) ➞ 2

search([1, 2, 3], 4) ➞ -1
Notes
If the item is not present, return -1.*/

function search(arr, item) {
	for (let i=0; i<arr.length; i++) {
		if(arr[i] === item) return i;
	}
	return -1;
}

/*Stworzyłam funkcję o nazwie search, która przyjmuje argumenty arr, item.
Pętla zaczyna się od początku i=0, warunek pętli sprawdza, czy
i jest mniejsze niz liczba elementów, w kazdym obiegu pętli zmienna i jest
większa o jeden, w ciele pętli sprawdzamy czy indeks znajdzie dany element
w tablicy , funkcja zwraca przy którym dany element moze znajdować się w tablicy
lub -1 jeśli jest  nieobecna.*/
