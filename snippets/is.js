/*
  Dieses Snippet kann verwendet werden, um zu überprüfen, ob ein Wert von einem bestimmten Typ ist.
*/

export const is = (type, val) =>
  ![, null].includes(val) && val.constructor === type;

/*
  Beispiele:
  is(Array, [1]); // true
  is(RegExp, /./g); // true
  is(String, ''); // true
  is(String, 12); // false
  is(Number, 1); // true
  is(Boolean, true); // true
*/
