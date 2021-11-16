/*
  Filtert die Elemente eines Arrays heraus, die einen der angegebenen Werte aufweisen.
*/

export const without = (array, ...args) =>
  array.filter((v) => !args.includes(v));

/*
  Beispiele:
  without([2, 1, 2, 3], 1, 2); // [3]
*/
