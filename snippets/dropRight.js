/*
  Dieses Snippet gibt ein neues Array zurück, bei dem n Elemente von der rechten Seite entfernt wurden.
*/

export const dropRight = (array, n = 1) => array.slice(0, -n);

/*
  Beispiele:
  drop([1, 2, 3, 4]); // [1,2,3]
  drop([1, 2, 3, 4], 2); // [1,2]
  drop([1, 2, 3, 4], 35); // []
*/
