/*
  Mit diesem Snippet kann überprüft werden, ob ein Datum vor einem anderen Datum liegt.
*/

export const isBeforeDate = (dateA, dateB) => dateA < dateB;

/*
  Beispiele:
  isBeforeDate(new Date(2010, 10, 21), new Date(2015, 11, 10)); // true
*/
