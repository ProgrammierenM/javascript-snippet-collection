/*
  Dieses Snippet gibt die aktuelle innere Breite des Browsers zurück.
*/

export const innerWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

/*
  Beispiele:
  innerWidth(); // 1280
*/
