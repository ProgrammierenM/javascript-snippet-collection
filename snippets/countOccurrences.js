/*
  Dieses Snippet zählt die Vorkommen eines Werts in einem Array.
*/

export const countOccurrences = (array, value) =>
  array.reduce((a, v) => (v === value ? a + 1 : a), 0);

/*
  Beispiele:
  countOccurrences([1, 1, 2, 1, 2, 1, 3], 1); // 4
*/
