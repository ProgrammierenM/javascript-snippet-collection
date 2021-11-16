/*
  Dieses Snippet durchläuft jede Eigenschaft eines Objektes und führt die übergebene Funktion aus.
*/

export const forOwn = (obj, fn) =>
  Object.keys(obj).forEach((key) => fn(obj[key], key, obj));

/*
  Beispiele:
  forOwn({ name: 'Max', alter: 19 }, value => console.log(value)); // 'Max', 19
*/
