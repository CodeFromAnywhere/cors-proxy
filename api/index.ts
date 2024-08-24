const makeHandler = () => async (request: Request) => {
  const url = new URL(request.url);

  const api = url.searchParams.get("api");
  console.log("url", request.url, api);

  const headers: any = {};
  request.headers.forEach((value, key) => (headers[key] = value));
  console.log(headers);
  const json = await request.json();
  const fullOriginalUrl = "https://google.nl";

  console.log({ json, method: request.method });
  // const// result = await fetch(fullOriginalUrl, {
  //   method: request.method,
  //   body: request.body,
  //   //@ts-ignore
  //   // SEE: https://github.com/nodejs/node/issues/46221
  //   duplex: "half",
  //   headers: request.headers,
  // });
  console.log("GOkkTTT");
  return new Response("World");
};

export const GET = makeHandler();
export const POST = makeHandler();
export const PUT = makeHandler();
export const PATCH = makeHandler();
export const DELETE = makeHandler();
