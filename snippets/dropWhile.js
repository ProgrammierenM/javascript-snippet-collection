/*
  Dieses Snippet entfernt Elemente aus einem Array, wenn die übergebene Funktion true zurückgibt.
*/

export const dropWhile = (array, func) => {
  while (array.length > 0 && !func(array[0])) array = array.slice(1);
  return array;
};

/*
  Beispiele:
  dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
*/
