/*
  Codiert alle Werte eines Formulars zu eine URL-codierte Zeichenkette, welche als GET Parameter dienen können.
*/

export const serializeForm = (form) =>
  Array.from(new FormData(form), (field) =>
    field.map(encodeURIComponent).join("=")
  ).join("&");

/*
  Beispiele:
  serializeForm(document.querySelector('#form')); // email=test%40email.de&name=Max%20Mustermann
*/
