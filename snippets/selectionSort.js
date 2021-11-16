/*
  Sortiert ein Array von Zahlen mithilfe des Selectionsort-Algorithmus.
*/

export const selectionSort = (array) => {
  const a = [...array];
  for (let i = 0; i < a.length; i++) {
    const min = a
      .slice(i + 1)
      .reduce((acc, val, j) => (val < a[acc] ? j + i + 1 : acc), i);
    if (min !== i) [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
};

/*
  Beispiele:
  selectionSort([5, 1, 4, 2, 3]); // [1, 2, 3, 4, 5]
*/
