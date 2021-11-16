/*
  Prüft, ob ein numerisches Array sortiert ist.
*/

export const isSorted = (array) => {
  if (array.length <= 1) return 0;
  const direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if ((array[i] - array[i - 1]) * direction < 0) return 0;
  }
  return Math.sign(direction);
};

/*
  Beispiele:
  isSorted([0, 1, 2, 3]); // 1
  isSorted([4, 3, 2]); // -1
  isSorted([4, 3, 5]); // 0
  isSorted([4]); // 0
*/
