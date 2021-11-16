/*
  Dieses Snippet kann verwendet werden, um eine Zufallszahl in einem bestimmten Bereich zurückzugeben.
*/

export const randomNumberInRange = (min, max) =>
  Math.random() * (max - min) + min;

/*
  randomNumberInRange(1, 10); // 2.756429634902913
*/
