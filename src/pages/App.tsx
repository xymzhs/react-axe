import React, { useContext } from 'react'
import classnames from 'classnames'
import { useStoreContext } from '../store/context'
import { Theme } from '../styles/types'
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

export interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  const { store, dispatch } = useStoreContext()

  return (
    <div
      className={classnames(classes.app)}
      onClick={() => {
        dispatch({ type: 'increment' })
      }}
    >
      {store.count}
    </div>
  )
}
export default App
