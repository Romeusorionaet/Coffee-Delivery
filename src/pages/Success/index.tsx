import localMap from '../../assets/tags/localMap.svg'
import watch from '../../assets/tags/watch.svg'
import sifrao from '../../assets/tags/sifrao.svg'
import motoBoy from '../../assets/motoBoy.svg'

import { SucessContainer, SectionDescription } from './styles'

export function Success() {
  return (
    <SucessContainer>
      <div className="text">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <SectionDescription>
        <div className="background">
          <div className="wrapper">
            <div>
              <img src={localMap} alt="" />
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                Farrapos - Porto Alegre, RS
              </p>
            </div>
            <div>
              <img src={watch} alt="" />
              <p>
                Previsão de entrega <strong>20 min - 30 min</strong>
              </p>
            </div>
            <div>
              <img src={sifrao} alt="" />
              <p>
                Pagamento na entrega <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </div>
        </div>
        <img src={motoBoy} alt="" />
      </SectionDescription>
    </SucessContainer>
  )
}
