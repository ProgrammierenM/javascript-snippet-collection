/*
  Mit diesem Snippet kann überprüft werden, ob ein Datum nach einem anderen Datum liegt.
*/

export const isAfterDate = (dateA, dateB) => dateA > dateB;

/*
  Beispiele:
  isAfterDate(new Date(2015, 10, 21), new Date(2010, 10, 23)); // true
*/
