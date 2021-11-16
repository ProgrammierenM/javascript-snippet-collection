/*
  Erstellt ein Objekt aus einem Array, verwendet den angegebenen Schlüssel und schließt ihn aus jedem Wert aus.
*/

export const indexOn = (array, key) =>
  array.reduce((obj, v) => {
    const { [key]: id, ...data } = v;
    obj[id] = data;
    return obj;
  }, {});

/*
  Beispiele:
  indexOn([
    { id: 1, name: 'Max' },
    { id: 2, name: 'Bob' }
  ], 'id');
  // { '1': { name: 'Max' }, '2': { name: 'Bob' } }
*/
