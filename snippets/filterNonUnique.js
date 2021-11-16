/*
  Dieses Snippet entfernt doppelte Werte in einem Array.
*/

export const filterNonUnique = (array) => [...new Set(array)];

/*
  filterNonUnique([1, 2, 2, 3, 4, 4, 5, 6]); // [1, 2, 3, 4, 5, 6]
*/
