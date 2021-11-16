/*
  Analysiert eine HTTP-Cookie-Header-Zeichenfolge und gibt ein Objekt mit allen Key-Value-Pairs zurück.
*/

export const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

/*
  Beispiele:
  parseCookie('car=opel; speed=220%20km%2Fh');// { car: 'opel', speed: '220 km/h' }
*/
