/*
  Verbindet alle Elemente eines Arrays zu einem String und gibt diesen String zurück. Verwendet ein Trennzeichen und ein Endtrennzeichen.
*/

export const join = (array, separator = ", ", end = separator) =>
  array.reduce(
    (acc, val, i) =>
      i === array.length - 2
        ? acc + val + end
        : i === array.length - 1
        ? acc + val
        : acc + val + separator,
    ""
  );

/*
  Beispiele:
  join(['Apfel', 'Birne', 'Banane', 'Erdbeere'],', ',' & '); // 'Apfel, Birne, Banane & Erdbeere'
  join(['Apfel', 'Birne', 'Banane', 'Erdbeere'], ', '); // 'Apfel, Birne, Banane, Erdbeere'
  join(['Apfel', 'Birne', 'Banane', 'Erdbeere']); // 'Apfel, Birne, Banane, Erdbeere'
*/
