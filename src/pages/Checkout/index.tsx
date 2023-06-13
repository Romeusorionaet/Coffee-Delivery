import { MapPinLine } from 'phosphor-react'
import { SelectedCoffees } from '../../components/SelectedCoffees'
import { PaymentOptions } from './components/PaymentOptions'
import { CheckoutContainer, HeaderForm, InputsContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <h1>Complete seu pedido</h1>
      <form>
        <HeaderForm>
          <MapPinLine size={22} />
          <div>
            <h2>Endereço de Entrega</h2>
            <p>informe o endereço onde deseja receber seu pedido</p>
          </div>
        </HeaderForm>

        <InputsContainer>
          <input type="number" placeholder="CEP" />
          <input type="name" placeholder="Rua" />

          <div>
            <input type="number" placeholder="Número" />
            <input type="name" placeholder="Complemento Opcioanl" />
            <input type="name" placeholder="Bairro" />
            <input type="name" placeholder="Cidade" />
            <input type="name" placeholder="UF" />
          </div>
        </InputsContainer>
      </form>
      <PaymentOptions />

      <SelectedCoffees />
    </CheckoutContainer>
  )
}
