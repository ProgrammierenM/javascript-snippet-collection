/*
  Entfernt falsche Werte aus einem Array.
*/

export const compact = (array) => array.filter(Boolean);

/*
  Beispiele:
  compact([0, 1, false, 2, '', 3, 'Max', NaN, 34]); // [ 1, 2, 3, 'Max', 34 ]
*/
