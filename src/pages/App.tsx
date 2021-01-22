import React, { useCallback, useEffect } from 'react'
import classnames from 'classnames'
import { Theme } from '../styles/types'
import { useRecoilState } from 'recoil'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { reactQuery } from '../server'
import { AppProps } from './types'
import { textState } from '../store'
import { createUseStyles, useTheme } from 'react-jss'
import { getList } from '../server'
const useStyles = createUseStyles<Theme>((theme) => ({
  app: {
    margin: {
      top: 16,
    },
    backgroundColor: theme.colorPrimary,
    color: theme.textPrimary,
    padding: 10,
    border: 'none',
    cursor: 'pointer',
  },
}))

const App: React.FC<AppProps> = (props) => {
  const { data, error, isLoading } = useQuery<any, Error>(
    'repoData',
    reactQuery,
  )
  const [text, setText] = useRecoilState(textState)

  const onChange = (event: {
    target: { value: string | ((currVal: string) => string) }
  }) => {
    setText(event.target.value)
  }
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  useEffect(() => {
    getList().then((res) => {})
  })
  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{'An error has occurred: ' + error.message}</div>

  if (data)
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{' '}
        <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong>
      </div>
    )
  return (
    <div className={classnames(classes.app)}>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}
export default App
