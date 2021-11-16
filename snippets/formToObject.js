/*
  Erstellt aus allen Werten eines Formulars ein Objekt mit key value pairs
*/

export const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );

/*
  Beispiele:
  formToObject(document.querySelector('#form')); // { email: 'test@email.de', name: 'Max Mustermann' }
*/
