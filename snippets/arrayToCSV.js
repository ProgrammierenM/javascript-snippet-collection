/*
  Dieses Snippet wandelt die Elemente ohne Kommas oder doppelte Anführungszeichen in Zeichenfolgen mit durch Kommas getrennten Werten um.
*/

export const arrayToCSV = (array, delimiter = ",") =>
  array.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join("\n");

/*
  Beispiele:
  arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
  arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
*/
