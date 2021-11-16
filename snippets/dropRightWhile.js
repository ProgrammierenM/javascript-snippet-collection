/*
  Dieses Snippet entfernt Elemente von der rechten Seite eines Arrays, bis die übergebene Funktion true zurückgibt.
*/

export const dropRightWhile = (array, func) => {
  while (array.length > 0 && !func(array[array.length - 1]))
    array = array.slice(0, -1);
  return array;
};

/*
  Beispiele:
  dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
*/
