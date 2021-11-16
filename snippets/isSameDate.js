/*
  Mit diesem Snippet kann überprüft werden, ob zwei Datumsangaben gleich sind.
*/

export const isSameDate = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString();

/*
  Beispiele:
  isSameDate(new Date(2015, 10, 20), new Date(2015, 10, 20)); // true
*/
