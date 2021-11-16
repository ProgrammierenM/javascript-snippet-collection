/*
  Dieses Snippet kann verwendet werden, um einen HTML-String vor einem bestimmten Element einzufügen.
*/

export const insertBefore = (element, htmlString) =>
  element.insertAdjacentHTML("beforebegin", htmlString);

/*
  Beispiele:
  insertBefore(document.getElementById('myId'), '<p>lorem ipsum</p>'); 
  // <p>lorem ipsum</p> <div id="myId"></div>
*/
