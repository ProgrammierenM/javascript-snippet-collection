/*
  Dieses Snippet kann verwendet werden, um eine zufällige ganze Zahl in einem bestimmten Bereich zu generieren.
*/

export const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/*
  Beispiele:
  randomIntegerInRange(1, 10); // 7
*/
