/*
  Dieses Snippet wandelt den ersten Buchstaben einer Zeichenfolge in einen Kleinbuchstaben um.
*/

export const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join("");

/*
  Beispiele:
  decapitalize("Hallo"); // 'hallo'
  decapitalize("EisDiele"); // 'eisDiele'
*/
