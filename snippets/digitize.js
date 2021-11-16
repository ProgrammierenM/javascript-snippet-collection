/*
  Dieses Snippet erhält eine Zahl als Eingabe und gibt ein Array seiner Ziffern zurück.
*/

export const digitize = (n) => [...`${n}`].map((i) => parseInt(i));

/*
  Beispiele:
  digitize(151); // [1, 5, 1]
*/
