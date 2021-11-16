/*
  Mit diesem Snippet können alle angegebenen Elemente ausgeblendet werden.
*/

export const hide = (...el) =>
  [...el].forEach((e) => (e.style.display = "none"));

/*
  Beispiele:
  hide(document.querySelectorAll('img'));
*/
