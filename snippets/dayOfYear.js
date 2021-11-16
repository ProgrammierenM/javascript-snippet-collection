/*
  Dieses Snippet ruft den Tag des Jahres von einem Date-Objekt ab.
*/

export const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

/*
  Beispiele:
  dayOfYear(new Date()); // 283
*/
