/*
  Dieses Snippet kann verwendet werden, um die URL ohne GET Parameter zu ermitteln.
*/

export const getBaseURL = (url) => url.replace(/[?#].*$/, "");

/*
  Beispiele:
  getBaseURL('http://url.de/page?name=Max&alter=24'); // 'http://url.de/page'
*/
