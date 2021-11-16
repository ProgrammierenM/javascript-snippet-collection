/*
  Sortiert ein Array von Zahlen mit dem Mergesort-Algorithmus.
*/

export const mergeSort = (array) => {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const l = mergeSort(array.slice(0, mid));
  const r = mergeSort(array.slice(mid, array.length));
  return Array.from({ length: l.length + r.length }, () => {
    if (!l.length) return r.shift();
    else if (!r.length) return l.shift();
    else return l[0] > r[0] ? r.shift() : l.shift();
  });
};

/*
  Beispiele:
  mergeSort([5, 1, 4, 2, 3]); // [1, 2, 3, 4, 5]
*/
