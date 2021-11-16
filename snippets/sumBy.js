/*
  Berechnet die Summe eines Arrays, nachdem jedes Element mithilfe der bereitgestellten Funktion einem Wert zugeordnet wurde.
*/

export const sumBy = (array, fn) =>
  array
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0);

/*
  Beispiele:
  sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n); // 20
  sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20
*/
