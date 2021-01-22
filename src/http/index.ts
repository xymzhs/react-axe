const HTTP = {
  post: async function <T, S>(url: RequestInfo, body?: S): Promise<T> {
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
}

export default HTTP
