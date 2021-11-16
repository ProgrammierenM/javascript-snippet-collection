/*
  Überprüft, ob eine Zeichenfolge nur Buchstaben enthält.
*/

export const isAlpha = (str) => /^[a-zA-Z]*$/.test(str);

/*
  Beispiele:
  isAlpha('BeispielAugabe'); // true
  isAlpha('Das wird nix'); // false (Leerzeichen sind keine Buchstaben)
  isAlpha('123'); // false
*/
