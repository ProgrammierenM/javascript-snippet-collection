/*
  Dieses Snippet kann verwendet werden, um zu überprüfen, ob ein String in Großbuchstaben geschrieben ist.
*/

export const isUpperCase = (str) => str === str.toUpperCase();

/*
  Beispiele:
  isUpperCase('ABC'); // true
  isLowerCase('A3@$'); // true
  isLowerCase('mAx'); // false
*/
