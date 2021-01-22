import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from '../pages/App'
import Test from '../pages/Test'
import { RecoilRoot } from 'recoil'
import theme from '../styles/theme'
import { ThemeProvider } from 'react-jss'
const Router: React.FC = () => {
  return (
    <HashRouter>
      <QueryClientProvider client={new QueryClient()}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <Route exact path={`/`} component={App} />
            <Route exact path={`/test`} component={Test} />
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </HashRouter>
  )
}
export default Router
