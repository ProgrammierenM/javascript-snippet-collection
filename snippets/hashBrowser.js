/*
  Erstellt einen Hash für einen Wert mit dem SHA-256-Algorithmus. Gibt ein Promise zurück.
*/

export const hashBrowser = (val) =>
  crypto.subtle
    .digest("SHA-256", new TextEncoder("utf-8").encode(val))
    .then((h) => {
      let hexes = [],
        view = new DataView(h);
      for (let i = 0; i < view.byteLength; i += 4)
        hexes.push(("00000000" + view.getUint32(i).toString(16)).slice(-8));
      return hexes.join("");
    });

/*
  Beispiele:
    hashBrowser(
      JSON.stringify({ name: 'max', alter: 27, hobbies: ['Eis essen', 'Bücher lesen'] })
    ).then(console.log);
    // c8328ed985182fc9a1b342154aa9c97089a2a93513d4dd250c3596f8cdd8c2b9
*/
