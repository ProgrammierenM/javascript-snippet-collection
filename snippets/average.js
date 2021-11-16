/*
  Dieses Snippet gibt den Durchschnitt von zwei oder mehreren numerischen Werten zurück.
*/

export const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;

/*
  Beispiele:
  average(...[1, 2, 3, 4]); // 2.5
  average(1, 2, 3); // 2
*/
