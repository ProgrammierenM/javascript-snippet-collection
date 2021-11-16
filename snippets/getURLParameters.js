/*
  Dieses Snippet kann verwendet werden, um alle GET Parameter einer URL als Objekt zurückzugeben. 
*/

export const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

/*
  Beispiele:
  getURLParameters('google.de'); // {}
  getURLParameters('http://url.de/page?name=Max&alter=24'); // {name: 'Max', alter: 24}
*/
