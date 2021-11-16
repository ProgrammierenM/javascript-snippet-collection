/*
  Findet alle eindeutigen Werte in einem Array.
*/

export const uniqueElements = (array) => [...new Set(array)];

/*
  Beispiele:
  uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
*/
