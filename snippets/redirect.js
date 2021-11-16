/*
  Dieses Snippet kann verwendet werden, um eine Weiterleitung zu einer angegebenen URL durchzuführen.
*/

export const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

/*
  Beispiele:
  redirect('https://google.com');
*/
