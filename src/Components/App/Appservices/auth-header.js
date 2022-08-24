export default function authHeader(users) {
  const currentToken = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "";

  if (currentToken && currentToken) {
    return {
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${currentToken.access_token}`,
    };
  } else {
    return {};
  }
}
