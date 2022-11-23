const hits = {};

export default function hitsCountMiddleware(request, response, next) {
  if (request.method === "GET") {
    const { url } = request;
    hits[url] ??= 0;
    hits[url] += 1;
    console.log(hits);
  }

  next();
}
