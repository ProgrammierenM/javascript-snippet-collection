/*
  Gibt die n minimalen Elemente aus dem bereitgestellten Array zurück.
*/

export const minN = (array, n = 1) =>
  [...array].sort((a, b) => a - b).slice(0, n);

/*
  Beispiele:
  minN([1, 2, 3, 4]); // [1]
  minN([1, 2, 3, 4], 2); // [1, 2]
*/
