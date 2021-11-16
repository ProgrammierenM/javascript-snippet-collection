/*
  Dieses Snippet wandelt die Elemente eines Arrays in <li>-Tags um und hängt sie an eine HTML-Liste welche die angegebene ID besitzt.
*/

export const arrayToHtmlList = (array, listID) =>
  ((element) => (
    (element = document.querySelector("#" + listID)),
    (element.innerHTML += array.map((item) => `<li>${item}</li>`).join(""))
  ))();

/*
  Beispiele:
  arrayToHtmlList(["Eis", "Senf", "Quark"], "myListID");
*/
