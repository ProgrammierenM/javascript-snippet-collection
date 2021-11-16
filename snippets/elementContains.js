/*
  Dieses Snippet prüft, ob das übergeordnete Element das untergeordnete Element enthält.
*/

export const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

/*
  Beispiele:
  elementContains(
    document.querySelector("body"),
    document.querySelector("#sidebar")
  ); // true
*/
