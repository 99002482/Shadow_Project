<<<<<<< HEAD
export function LoginService() {
=======
export const LoginService = () => {
>>>>>>> 79b9d9ccf91bf718bba3448f11159aabcff3b6cc
  return fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Username: this.state.Username,
      Password: this.state.Password,
    }),
  }).then((Response) => Response.json());
<<<<<<< HEAD
  
}
=======
};
>>>>>>> 79b9d9ccf91bf718bba3448f11159aabcff3b6cc
