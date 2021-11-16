/*
  Sortiert ein Array von Zahlen mit dem Bucketsort-Algorithmus.
*/

export const bucketSort = (array, size = 5) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const buckets = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => []
  );
  array.forEach((val) => {
    buckets[Math.floor((val - min) / size)].push(val);
  });
  return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};

/*
  Beispiele:
  bucketSort([6, 3, 4, 1]); // [1, 3, 4, 6]
*/
