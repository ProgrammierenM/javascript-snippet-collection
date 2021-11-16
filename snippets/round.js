/*
  Dieses Snippet kann verwendet werden, um eine Zahl auf eine bestimmte Anzahl von Stellen zu runden.
*/

export const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

/*
  Beispiele:
  round(1.005, 2); // 1.01
  round(1.255, 1); // 1.3
*/
