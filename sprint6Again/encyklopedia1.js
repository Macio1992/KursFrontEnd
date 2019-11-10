/* Encyklopedia: Opisz podstawowe metody string: push, pop, unshift, shift, indexOf, splice */

1. push() - metoda dodaje elementy na końcu tablicy i zwraca jej nową długość.

Mozemy przekazać jeden lub więcej elemntów:
arr.push(el1);
arr.push(el1, el2);

2. pop() - metoda usuwa ostatni element z tablicy i zwraca go. Równiez zmienia długość tablicy.

3. unshift() - metoda dodaje elementy na początku tablicy i zwraca nową długość tablicy.

4. shift() - metoda usuwa pierwszy element tablicy i zwraca go.

5. indexOf() - metoda znajduje indeks elementu w tablicy.

6. splice() - metoda usuwa i wstawia nowe elementy do tablicy.

arr.splice( index, howmuchToRemove, newItems);
Parametr index określa miejsce w tablicy, od którego rozpocznie się usuwanie tablicy.
Parametr howmuchToRemove mówi ile elementów powinno być usuniętych z tablicy.
Parametr newItems dodaje nowe elementy podczas usuwania starych elementów.
