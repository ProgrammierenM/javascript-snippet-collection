/*
  Sortiert ein Array von Zahlen mit dem Bubblesort-Algorithmus.
*/

export const bubbleSort = (array) => {
  let swapped = false;
  const a = [...array];
  for (let i = 1; i < a.length; i++) {
    swapped = false;
    for (let j = 0; j < a.length - i; j++) {
      if (a[j + 1] < a[j]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) return a;
  }
  return a;
};

/*
  Beispiele:
  bubbleSort([2, 1, 4, 3]); // [1, 2, 3, 4]
*/
