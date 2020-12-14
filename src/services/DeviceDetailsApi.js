export function DeviceDetailsApi() {
    return fetch("https://localhost:44308/Api/DeviceDetail/desc", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Token: localStorage.getItem("tok"),
          id: localStorage.getItem("device_id"),
        }),
      })
        .then((res) => res.json())
    }