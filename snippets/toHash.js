/*
  Reduziert ein gegebenes Array in einen Wert-Hash (Keyed Data Store).
*/

export const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );

/*
  Beispiel:
  toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 3: 1 }

  Komplexes Beispiel:
  let users = [
    { id: 1, name: 'Max' },
    { id: 2, name: 'Tina' },
    { id: 3, name: 'Bob' },
  ];
  let managers = [
    { id: 1, name: 'Mario', employees: [2, 3] }
  ];

  // Wir verwenden hier toHash, weil wir eine bindbare Referenz erzeugen wollen
  managers.forEach(
    manager =>
      (manager.employees = manager.employees.map(function(id) {
        return this[id];
      }, toHash(users, 'id')))
  );

  managers; // [{ id: 1, name: 'Mario', employees: [{id: 2, name: 'Tina'}, {id: 3, name: 'Bob'} ]}]
*/
