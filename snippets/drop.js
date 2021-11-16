/*
  Dieses Snippet gibt ein neues Array zurück, bei dem n Elemente von der linken Seite entfernt wurden.
*/

export const drop = (array, n = 1) => array.slice(n);

/*
  Beispiele:
  drop([1, 2, 3, 4]); // [2,3,4]
  drop([1, 2, 3, 4], 2); // [3,4]
  drop([1, 2, 3, 4], 35); // []
*/
