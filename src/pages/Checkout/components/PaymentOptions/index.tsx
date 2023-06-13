import { PaymentOptionsContainer, Options } from './styles'

export function PaymentOptions() {
  return (
    <PaymentOptionsContainer>
      <div>
        <span>$ Pagamento</span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </div>

      <Options>
        <div>CARTÃO DE CRÉDITO</div>
        <div>CARTÃO DE DE DÉBITO</div>
        <div>CARTÃO DE DINHEIRO</div>
      </Options>
    </PaymentOptionsContainer>
  )
}
