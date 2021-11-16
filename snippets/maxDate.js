/*
  Dieses Snippet kann verwendet werden, um das neueste Datum zu erhalten.
*/

export const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

/*
  Beispiele:
  const array = [
    new Date("2017-04-13"),
    new Date("2018-02-12"),
    new Date("2016-01-10"),
    new Date("2016-01-09")
  ];
  maxDate(array); // 2018-02-12T00:00:00.000Z
*/
