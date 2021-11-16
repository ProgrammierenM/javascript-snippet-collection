/* 
  Dieses Snippet gibt true zurück, wenn die Funktion für alle Elemente in einem Array true zurückgibt, andernfalls false. Du kannst das zweite Argument fn weglassen, wenn du Boolean als Standardwert verwenden möchtest.
*/

export const all = (array, fn = Boolean) => array.every(fn);

/*  
  Beispiele:
  all([4, 2, 3], (x) => x > 1); // true
  all([1, 2, 3]); // true
*/
