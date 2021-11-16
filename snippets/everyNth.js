/*
  Gibt jedes n-te Element in einem Array zurück.
*/

export const everyNth = (array, nth) =>
  array.filter((e, i) => i % nth === nth - 1);

/*
  Beispiele:
  everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
*/
