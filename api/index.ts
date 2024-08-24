const makeHandler = (method: string) => (request: Request) => {
  // const url = new URL(request.url);
  // console.log(url);
  console.log(request.url);
  request.headers.forEach((value, key) => console.log(key, value));

  const fullOriginalUrl = "https://google.nl";

  // const result = await fetch(fullOriginalUrl, {
  //   method: request.method,
  //   body: request.body,
  //   //@ts-ignore
  //   // SEE: https://github.com/nodejs/node/issues/46221
  //   duplex: "half",
  //   headers: request.headers,
  // });

  return new Response("World");
};

export const GET = makeHandler("GET");
export const POST = makeHandler("POST");
export const PUT = makeHandler("PUT");
export const PATCH = makeHandler("PATCH");
export const DELETE = makeHandler("DELETE");
