/*
  Dieses Snippet kann verwendet werden, um mehrere Zufallszahlen aus einem Array zu erhalten.
*/

export const randomNumberFromArrayN = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

/*
  Beispiele:
  randomNumberFromArrayN([1, 2, 3], 2); // [3,1]
  randomNumberFromArrayN([1, 2, 3], 4); // [2,3,1]
*/
