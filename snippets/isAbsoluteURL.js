/*
  Überprüft, ob die angegebene Zeichenfolge eine absolute URL ist.
*/

export const isAbsoluteURL = (str) => /^[a-z][a-z0-9+.-]*:/.test(str);

/*
  Beispiele:
  isAbsoluteURL('https://google.de'); // true
  isAbsoluteURL('http://www.meinedomain.de'); // true
  isAbsoluteURL('/hallo/welt'); // false
*/
