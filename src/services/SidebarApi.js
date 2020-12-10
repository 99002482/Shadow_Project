const API='https://jsonplaceholder.typicode.com/users/1';
export function Organisation(){
    let url=API;
    return fetch(url)
    .then((res) => res.json())
}
