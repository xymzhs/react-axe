import { post, get } from '../http'
const getList = () =>
  post<{}, {}>('https://www.chanson.sh.cn/api/member/get-list', {})

const reactQuery = () =>
  fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) =>
    res.json(),
  )

export { getList, reactQuery }
