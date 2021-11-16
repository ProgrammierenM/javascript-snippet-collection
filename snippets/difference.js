/*
  Dieses Snippet findet den Unterschied zwischen zwei Arrays. Es werden die Werte des ersten Arrays zurückgegeben welche im Vergleich zum zweiten Array unterschiedlich sind
*/

export const difference = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};

/*
  Beispiele:
  difference([1, 2, 3, 4], [1, 2, 3, 5]); // [4]
*/
