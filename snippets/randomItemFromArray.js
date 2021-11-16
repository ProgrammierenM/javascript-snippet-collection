/*
  Dieses Snippet kann verwendet werden, um ein zufälliges Item aus einem Array zurückzugeben.
*/

export const randomItemFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)];

/*
  Beispiele:
  randomItemFromArray([10, "Max", "15", 3, "Hallo Welt"]) // "Max"
*/
