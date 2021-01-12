const httpHandler = {
  get: function (target: { [x: string]: any }, name: string) {
    return name in target ? target[name] : new Error()
  },
}
const HTTP: ProxyConstructor = new Proxy(
  Object.create({
    post: async function (url: RequestInfo, body: BodyInit) {
      const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      return await res.json()
    },
    get: async function (url: RequestInfo) {
      const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return await res.json()
    },
  }),
  httpHandler,
)

export default HTTP
