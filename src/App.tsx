import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CoffeeDeliveryContext } from './contexts/CoffeeDeliveryContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeDeliveryContext>
          <Router />
        </CoffeeDeliveryContext>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
