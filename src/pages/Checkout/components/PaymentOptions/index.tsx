import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { PaymentOptionsContainer, Options } from './styles'
import { useContext } from 'react'
import { AddressContext } from '../../../../contexts/AddressFormContext'

export function PaymentOptions() {
  const { setPayment } = useContext(AddressContext)

  return (
    <PaymentOptionsContainer>
      <div className="wrapper-title">
        <CurrencyDollarSimple size={20} />
        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <Options>
        <button onClick={() => setPayment('CARTÃO DE CRÉDITO')}>
          <CreditCard size={18} />
          <p>CARTÃO DE CRÉDITO</p>
        </button>
        <button onClick={() => setPayment('CARTÃO DE DÉBITO')}>
          <Bank size={18} />
          <p>CARTÃO DE DÉBITO</p>
        </button>
        <button onClick={() => setPayment('DINHEIRO')}>
          <Money size={18} />
          <p>DINHEIRO</p>
        </button>
      </Options>
    </PaymentOptionsContainer>
  )
}
