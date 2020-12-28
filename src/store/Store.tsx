import React, { useReducer, FC, Children } from 'react'
import initState, { init } from './state'
import reducer from './reducer'
import { StoreContext } from './context'
const Store: FC = (props) => {
  const [store, dispatch] = useReducer(reducer, initState, init)
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children &&
        Children.map(props.children, (child, index) => {
          const childCompoent = child as React.FunctionComponentElement<any>
          return typeof child === 'string'
            ? child
            : React.cloneElement(childCompoent, {
                index: index,
                className: childCompoent.props.className,
              })
        })}
    </StoreContext.Provider>
  )
}

export default Store
