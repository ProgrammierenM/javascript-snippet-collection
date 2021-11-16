/*
  Dieses Snippet kann verwendet werden, um eine Zufallszahl aus einem Array zu erhalten.
*/

export const randomNumberFromArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

/*
  Beispiele:
  randomNumberFromArray([3, 7, 9, 11]); // 9
*/
