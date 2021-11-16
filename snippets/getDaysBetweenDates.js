/*
  Dieses Snippet kann verwendet werden, um die Differenz in Tagen zwischen zwei Datumsangaben zu ermitteln.
*/

export const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

/*
  Beispiele:
  getDaysDiffBetweenDates(new Date('2021-11-04'), new Date('2021-11-08')); // 4
*/
