/*
  Überprüft, ob die angegebene Zeichenfolge Leerzeichen enthält.
*/

export const containsWhitespace = (str) => /\s/.test(str);

/*
  Beispiele:
  containsWhitespace('lorem'); // false
  containsWhitespace('lorem ipsum'); // true
*/
