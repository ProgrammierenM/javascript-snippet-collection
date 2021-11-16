/*
  Dieses Snippet kann verwendet werden, um ein Array mit n zufälligen ganzen Zahlen in einem angegebenen Bereich zu generieren.
*/

export const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

/*
  Beispiele:
  randomIntArrayInRange(10, 45, 10); // [ 28, 15, 12, 44, 29, 32, 40, 23, 22, 11 ]
*/
