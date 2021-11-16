/*
  Dieses Snippet gibt die aktuelle innere Höhe des Browsers zurück.
*/

export const innerHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

/*
  Beispiele:
  innerHeight(); // 671
*/
