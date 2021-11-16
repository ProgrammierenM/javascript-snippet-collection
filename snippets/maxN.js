/*
  Gibt die n maximalen Elemente aus dem bereitgestellten Array zurück.
*/

export const maxN = (array, n = 1) =>
  [...array].sort((a, b) => b - a).slice(0, n);

/*
  Beispiele:
  maxN([1, 2, 3, 4]); // [4]
  maxN([1, 2, 3, 4], 2); // [4, 3]
*/
