const httpHandler = {
  get: function (target: { [x: string]: any }, name: string) {
    return name in target ? target[name] : new Error()
  },
}
const HTTP: ProxyConstructor = new Proxy(
  Object.create({
    post: function (
      url: RequestInfo,
      body: BodyInit,
      callback: (arg0: any) => any,
    ) {
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((res) => callback(res))
    },
    get: function (url: RequestInfo, callback: (arg0: any) => any) {
      fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => callback(res))
    },
  }),
  httpHandler,
)

export default HTTP
