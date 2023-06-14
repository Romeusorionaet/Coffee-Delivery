import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { PaymentOptionsContainer, Options } from './styles'

export function PaymentOptions() {
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
        <button>
          <CreditCard size={18} />
          <p>CARTÃO DE CRÉDITO</p>
        </button>
        <button>
          <Bank size={18} />
          <p>CARTÃO DE DÉBITO</p>
        </button>
        <button>
          <Money size={18} />
          <p>DINHEIRO</p>
        </button>
      </Options>
    </PaymentOptionsContainer>
  )
}
