/*
  Dieses Snippet führt für jedes Element eines Arrays eine Funktion aus, beginnend mit dem letzten Element des Arrays.
*/

export const forEachRight = (array, callback) =>
  array.slice(0).reverse().forEach(callback);

/*
  Beispiele:
  forEachRight([1, 2, 3, 4], value => console.log(value)); // '4', '3', '2', '1'
*/
