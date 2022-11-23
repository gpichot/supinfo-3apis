export function isValidUser(authorizedValue) {
  return (request, response, next) => {
    const authorization = request.headers.authorization;

    if (authorization === authorizedValue) {
      next();
    } else {
      response.status(401).send("Unauthorized");
    }
  };
}

export const isAdmin = isValidUser("admin");
export const isUser = isValidUser("user");
