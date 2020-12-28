import React from 'react'
import classnames from 'classnames'
import { useStoreContext } from '../store/context'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  index: {
    margin: {
      top: 16,
    },
    backgroundColor: (props) => (props.color ? props.color : 'red'),
    padding: 10,
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
})

export interface IndexProps {}

const Index: React.FC<IndexProps> = (props) => {
  const classes = useStyles(props)
  const { store, dispatch } = useStoreContext()
  return (
    <div
      className={classes.index}
      onClick={() => {
        dispatch({ type: 'decrement' })
      }}
    >
      {store.count}
    </div>
  )
}
export default Index
