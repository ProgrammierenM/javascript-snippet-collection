/*
  In diesem Snippet wird der erste Buchstabe jedes Wortes in einer bestimmten Zeichenfolge groß geschrieben.
*/

export const capitalizeEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

/*
  Beispiele:
  capitalizeEveryWord('hallo welt!'); // 'Hallo Welt!'
*/
