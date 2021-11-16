/*
  Überprüft, ob aus den angegebenen Werten ein gültiges Datumsobjekt erstellt werden kann.
*/

export const isDateValid = (...val) =>
  !Number.isNaN(new Date(...val).valueOf());

/*
  Beispiele:
  isDateValid('October 21, 2015 09:24:00'); // true
  isDateValid('2015-10-21T09:24:00'); // true
  isDateValid('2015-10-21 T09:24:00'); // false
  isDateValid('Quark'); // false
  isDateValid(2015, 10, 21); // true
  isDateValid(2015, 10, 21, 'Quark'); // false
  isDateValid({}); // false
*/
