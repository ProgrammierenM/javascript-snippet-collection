/*
  Sortiert ein Array von Zahlen mit dem Quicksort-Algorithmus.
*/

export const quickSort = (array) => {
  const a = [...array];
  if (a.length < 2) return a;
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = a[pivotIndex];
  const [lo, hi] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val);
      } else if (val > pivot) {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
  );
  return [...quickSort(lo), pivot, ...quickSort(hi)];
};

/*
  Beispiele:
  quickSort([1, 6, 1, 5, 3, 2, 1, 4]); // [1, 1, 1, 2, 3, 4, 5, 6]
*/
