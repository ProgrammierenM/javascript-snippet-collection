/*
  Dieses Snippet kann verwendet werden, um den Wert einer CSS-Regel für ein bestimmtes Element abzurufen.
*/

export const getStyle = (element, ruleName) =>
  getComputedStyle(element)[ruleName];

/*
  getStyle(document.querySelector('p'), 'font-size'); // '1rem'
*/
