/*
  Überprüft, ob eine Zeichenfolge nur alphanumerische Zeichen enthält.
*/

export const isAlphaNumeric = (str) => /^[a-z0-9]+$/gi.test(str);

/*
  Beispiele:
  isAlphaNumeric('Hallo123'); // true
  isAlphaNumeric('123'); // true
  isAlphaNumeric('Hello 123'); // false (Leerzeichen sind sind Alphanumerisch)
  isAlphaNumeric('#%$hallo'); // false
*/
