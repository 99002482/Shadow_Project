export function TokenApi(Username, Password) {
  return fetch("https://localhost:44308/api/log/token", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: Username,
      password: Password,
      applicationId: "53b0eeff-3aa4-4bff-93bb-94e819965e8c",
    }),
  }).then((Response) => Response.json());
}
