/*
  Dieses Snippet kann verwendet werden, um den Typ eines Werts zu ermittlen.
*/

export const getType = (v) =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();

/*
  Beispiele:
  getType([1, 2, 3]); // 'array'
*/
