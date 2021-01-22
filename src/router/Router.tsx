import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import App from '../pages/App'
import { RecoilRoot } from 'recoil'
import theme from '../styles/theme'
import { ThemeProvider } from 'react-jss'
const Router: React.FC = () => {
  return (
    <HashRouter>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Route exact path={`/`} component={App} />
        </ThemeProvider>
      </RecoilRoot>
    </HashRouter>
  )
}
export default Router
