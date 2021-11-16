/*
  Erzeugt eine zufällige Zeichenfolge mit der angegebenen Länge.
*/

export const randomAlphaNumeric = (length) => {
  let s = "";
  Array.from({ length }).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= length;
  });
  return s.slice(0, length);
};

/*
  Beispiele:
  randomAlphaNumeric(5); // '5ukep'
*/
