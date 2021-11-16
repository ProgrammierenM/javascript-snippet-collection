/*
  Dieses Snippet gibt den Durchschnitt eines Arrays zurück, nachdem zunächst die Zuordnung jedes Elements zu einem Wert mithilfe einer bestimmten Funktion vorgenommen wurde. Somit können Werte verwendet werden welche Bestandteil eines Objektes sind und sich in einem Array befinden.
*/

export const averageBy = (array, fn) =>
  array
    .map(typeof fn === "function" ? fn : (value) => value[fn])
    .reduce((acc, value) => acc + value, 0) / array.length;

/*
  Beispiele: 
  averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n); // 5
  averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"); // 5
*/
