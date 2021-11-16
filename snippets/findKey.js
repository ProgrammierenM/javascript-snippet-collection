/*
  Dieses Snippet gibt den ersten Schlüssel zurück, welcher die übergebene Funktion erfüllt.
*/

export const findKey = (obj, fn) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));

/*
  findKey(
    {
      max: { age: 25, active: true },
      tina: { age: 28, active: false },
      oliver: { age: 5, active: true }
    },
    o => o['active']
  ); // 'max'
*/
