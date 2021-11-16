/*
  Überprüft, ob in einem flachen Array doppelte Werte vorhanden sind.
*/

export const hasDuplicates = (array) => new Set(array).size !== array.length;

/*
  Beispiele:
  hasDuplicates([0, 1, 1, 2]); // true
  hasDuplicates([0, 1, 2, 3]); // false
*/
