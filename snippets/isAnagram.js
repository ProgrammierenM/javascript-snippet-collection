/*
  Mit diesem Snippet kann überprüft werden, ob ein bestimmter String ein Anagramm von einem anderen String ist.
*/

export const isAnagram = (str1, str2) => {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "")
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
};

/*
  Beispiele:
  isAnagram('Ampel', 'Palme'); // true
*/
