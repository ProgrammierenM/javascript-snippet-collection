/*
  Prüft ob die angegebene Zeichenkette eine Email ist. 
*/

export const isEmailValid = (email) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

/*
  Beispiele:
  isEmailValid(test@email.de) // true
*/
