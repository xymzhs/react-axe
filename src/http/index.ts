import { RequestParams, ResponseData } from './types'
export async function post<T extends ResponseData, S extends RequestParams>(
  url: RequestInfo,
  body?: S,
): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return await res.json()
}
export async function get(url: RequestInfo) {
  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await res.json()
}
