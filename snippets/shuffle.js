/*
  Verändert die Reihenfolge der Werte eines Arrays in zufälliger Reihenfolge und gibt ein neues Array zurück.
*/

export const shuffle = ([...array]) => {
  let m = array.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
};

/*
  Beispiele:
  shuffle([1, 2, 3]); // [2, 3, 1]
*/
