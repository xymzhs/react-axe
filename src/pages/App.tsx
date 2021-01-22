import React, { useContext } from 'react'
import classnames from 'classnames'
import { Theme } from '../styles/types'
import { useRecoilState } from 'recoil'
import { AppProps } from './types'
import { textState } from '../store'
import { createUseStyles, useTheme } from 'react-jss'

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
  const [text, setText] = useRecoilState(textState)

  const onChange = (event: {
    target: { value: string | ((currVal: string) => string) }
  }) => {
    setText(event.target.value)
  }
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

  return (
    <div className={classnames(classes.app)}>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}
export default App
