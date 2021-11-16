/*
  Mit diesem Snippet kann überprüft werden, ob eine Zeichenfolge ein gültiges JSON ist.
*/

export const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

/*
  Beispiele:
  isValidJSON('{"name":"Max","age":20}'); // true
  isValidJSON('{"name":"Max",age:"20"}'); // false
*/
