/*
  Dieses Snippet kann verwendet werden, um die Uhrzeit von einem Dateobject als String zu erhalten.
*/

export const getTimeFromDate = (date) => date.toTimeString().slice(0, 8);

/*
  Beispiele:
  getTimeFromDate(new Date()); // "10:34:00"
*/
