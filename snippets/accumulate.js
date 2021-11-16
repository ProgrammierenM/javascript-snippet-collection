/*
  Erstellt ein Array von Teilsummen.
*/

export const accumulate = (...nums) =>
  nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], []);

/*
  Beispiele:
  accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
  accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]
*/
