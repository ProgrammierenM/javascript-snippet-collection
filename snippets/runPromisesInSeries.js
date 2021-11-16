/*
  Dieses Snippet kann verwendet werden, um eine Reihe von Promises in Serie auszuführen.
*/

export const runPromisesInSeries = (ps) =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());

/*
  Beispiele:
  const delay = d => new Promise(r => setTimeout(r, d));
  runPromisesInSeries([() => delay(1000), () => delay(2000)]);  
  // Führt jedes Promise nacheinander aus und dauert insgesamt 3 Sekunden.
*/
