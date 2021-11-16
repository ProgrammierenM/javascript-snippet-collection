/*
  Dieses Snippet gibt die Länge eines Strings in Bytes zurück.
*/

export const byteSize = (str) => new Blob([str]).size;

/*
  Beispiele:
  byteSize('😀'); // 4
  byteSize('Hallo Welt'); // 10
*/
