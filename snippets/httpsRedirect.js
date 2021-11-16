/*
  Dieses Snippet kann verwendet werden, um in einer bestimmten Domain von HTTP auf HTTPS umzuleiten.
*/

export const httpsRedirect = () => {
  if (location.protocol !== "https:")
    location.replace("https://" + location.href.split("//")[1]);
};

/*
  Beispiele:
  httpsRedirect(); // Wenn die URL z.B. http://meinedomain.de ist, dann wird auf https://meinedomain.de weitergeleitet
*/
