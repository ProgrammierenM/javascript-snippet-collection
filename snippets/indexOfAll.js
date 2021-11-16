/*
  Dieses Snippet kann verwendet werden, um alle Indexes eines Werts in einem Array zu erhalten, und ein leeres Array zurückgibt, falls dieser Wert nicht darin enthalten ist.
*/

export const indexOfAll = (array, value) =>
  array.reduce((acc, el, i) => (el === value ? [...acc, i] : acc), []);

/*
  Beispiele:
  indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
  indexOfAll([1, 2, 3], 4); // []
*/
