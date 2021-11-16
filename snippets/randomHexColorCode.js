/*
  Dieses Snippet kann verwendet werden, um einen zufälligen hexadezimalen Farbcode zu generieren.
*/

export const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

/*
  Beispiele:
  randomHexColorCode(); // "#ed549e"
*/
