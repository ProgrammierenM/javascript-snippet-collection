/*
  Dieses Snippet gibt die Differenz zwischen zwei Arrays zurück, nachdem eine bestimmte Funktion auf jedes Element beider Listen angewendet wurde.
*/

export const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter((x) => !s.has(fn(x)));
};

/*
  Beispiele:
  differenceBy([{ x: 1 }, { x: 2 }], [{ x: 1 }, { x: 3 }, { x: 4 }], (v) => v.x); // [ { x: 2 } ]
*/
