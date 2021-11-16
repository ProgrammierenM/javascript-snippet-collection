/*
  In diesem Snippet wird der erste Buchstabe einer Zeichenfolge groß geschrieben.
*/

export const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join("");

/*
  Beispiele:
  capitalize('fooBar'); // 'FooBar'
  capitalize('fooBar', true); // 'FooBar'
*/
