/*

*/

export const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

/*
  Beispiele:
  const array = [
    new Date("2017-04-13"),
    new Date("2018-02-12"),
    new Date("2016-01-10"),
    new Date("2016-01-09")
  ];
  minDate(array); // 2016-01-09T00:00:00.000Z
*/
