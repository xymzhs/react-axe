import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Store from '../store'
import App from '../pages/App'
import Index from '../pages/Index'
import theme from '../styles/theme'
import { ThemeProvider } from 'react-jss'
const Router: React.FC = () => {
  return (
    <HashRouter>
      <Store>
        <ThemeProvider theme={theme}>
          <Route exact path={`/`} component={App} />
          <Route path={`/index`} component={Index} />
        </ThemeProvider>
      </Store>
    </HashRouter>
  )
}
export default Router
