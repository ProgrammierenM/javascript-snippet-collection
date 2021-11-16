/*
  Dieses Snippet kann verwendet werden, um einen HTML-String nach dem Ende eines bestimmten Elements einzufügen.
*/

export const insertAfter = (element, htmlString) =>
  element.insertAdjacentHTML("afterend", htmlString);

/*
  Beispiele:
  insertAfter(document.getElementById("myId"), "<p>lorem ipsum</p>"); 
  // <div id="myId"></div> <p>lorem ipsum</p>
*/
