import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CoffeeDeliveryContext } from './contexts/CoffeeDeliveryContext'
import { AddressFormContext } from './contexts/AddressFormContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeDeliveryContext>
          <AddressFormContext>
            <Router />
          </AddressFormContext>
        </CoffeeDeliveryContext>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
