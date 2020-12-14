export function DeviceApi() {
    return fetch("https://localhost:44308/Api/Device/details", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Token: localStorage.getItem("tok"),
          id: localStorage.getItem("site_id"),
        }),
      })
        .then((res) => res.json())
    }