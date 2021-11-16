/*
  Serialisiert ein Wertepaar in eine HTTP-Cookie-Header-Zeichenfolge.
*/

export const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

/*
  Beispiele:
  serializeCookie('car', 'opel'); // 'car=opel'
*/
