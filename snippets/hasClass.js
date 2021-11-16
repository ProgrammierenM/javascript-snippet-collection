/*
  Dieses Snippet prüft, ob ein Element eine bestimmte Klasse hat.
*/

export const hasClass = (element, className) =>
  element.classList.contains(className);

/*
  Beispiele:
  hasClass(document.querySelector('p'), 'highlight'); // true
*/
