/*
  Dieses Snippet verflacht ein Array rekursiv.
*/

export const deepFlatten = (array) =>
  [].concat(...array.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));

/*
  Beispiele:
  deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
*/
