/*
  Berechnet die Summe von zwei oder mehr Zahlen, auch welche die sich in einem Array befinden.
*/

export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

/*
  Beispiele:
  sum(1, 2, 3, 4); // 10
  sum(...[1, 2, 3, 4]); // 10
*/
