/*
  Dieses Snippet prüft, ob das Ende einer Seite sichtbar ist.
*/

export const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);

/*
  Beispiele:
  bottomVisible(); // true
*/
