/*
  Legt den Wert einer CSS-Eigenschaft für das angegebene HTML-Element fest.
*/

export const setStyle = (element, rule, value) => (element.style[rule] = value);

/*
  Beispiele:
  setStyle(document.querySelector('p'), 'font-size', '16px');
*/
