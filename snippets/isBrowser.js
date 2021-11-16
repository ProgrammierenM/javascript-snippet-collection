/*
  Anhand dieses Snippets kann festgestellt werden, ob es sich bei der aktuellen Laufzeitumgebung um einen Browser handelt. Dies ist hilfreich, um Fehler beim ausführen von Frontend-Modulen auf dem Server (Node.js) zu vermeiden.
*/

export const isBrowser = () =>
  ![typeof window, typeof document].includes("undefined");

/*
  Beispiele:
  isBrowser(); // true (browser)
  isBrowser(); // false (Node)
*/
