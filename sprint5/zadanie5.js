/*Reverse an Array
Write a function to reverse an array.

Examples
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.*/

function reverse(arr) {
  let array = [];
	for (let i = arr.length -1; i >= 0; i--) {
		array.push(arr[i]);
  }
  return array;
}

/*Stworzyłam funkcję o nazwie reverse. Argument tej funkcji nazywa się "arr".
W funkcji stworzyłam nową zmienną lokalną, która jest tablicą.
W pętli, indeks ustawiam na końcu, warunek pętli sprawdza czy i jest większe bądź
równe od zera, w kazdym obiegu pętli zmienna i zmiejsza o jeden.
Funkcja zwraca odwróconą listę elementów.*/
