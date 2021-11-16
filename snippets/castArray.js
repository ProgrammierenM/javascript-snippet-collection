/*
  Dieses Snippet wandelt einen Nicht-Array-Wert in ein Array um.
*/

export const castArray = (value) => (Array.isArray(value) ? value : [value]);

/*
  Beispiele:
  castArray('foo'); // ['foo']
  castArray([1]); // [1]
*/
