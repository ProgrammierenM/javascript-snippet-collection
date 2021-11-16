/*
  Dieses Snippet kann verwendet werden, um eine Zeichenfolge auf beiden Seiten mit einem angegebenen Zeichen aufzufüllen, wenn sie kürzer als die angegebene Länge ist.
*/

export const pad = (str, length, char = " ") =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

/*
  Beispiele:
  pad('bob', 8); // '  bob   '
  pad(String(42), 6, '0'); // '004200'
  pad('oliver', 3); // 'oliver'
*/
