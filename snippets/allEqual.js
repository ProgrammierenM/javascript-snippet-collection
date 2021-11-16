/*
  Dieses Snippet prüft, ob alle Elemente des Arrays gleich sind.
*/

export const allEqual = (array) => array.every((value) => value === array[0]);

/*
  Beispiele:
  allEqual([1, 2, 3, 4, 5, 6]); // false
  allEqual([1, 1, 1, 1]); // true
*/
