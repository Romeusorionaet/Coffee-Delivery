import localMap from '../../assets/tags/localMap.svg'
import watch from '../../assets/tags/watch.svg'
import sifrao from '../../assets/tags/sifrao.svg'
import motoBoy from '../../assets/motoBoy.svg'

import { SucessContainer, SectionDescription } from './styles'
import { useContext } from 'react'
import { AddressContext } from '../../contexts/AddressFormContext'

export function Success() {
  const { dataForm } = useContext(AddressContext)

  return (
    <SucessContainer>
      <div className="text">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <SectionDescription>
        {dataForm &&
          dataForm.map((data) => {
            return (
              <div key={data.number}>
                <div className="background">
                  <div className="wrapper">
                    <div>
                      <img
                        src={localMap}
                        alt="Símbolo do mapa, representa o local"
                      />
                      <p>
                        Entrega em{' '}
                        <strong>
                          {data.street}, {data.number}{' '}
                        </strong>
                        {data.complement} - {data.city}, {data.uf}
                      </p>
                    </div>
                    <div>
                      <img src={watch} alt="Desenho de um relógio de bolso" />
                      <p>
                        Previsão de entrega <strong>20 min - 30 min</strong>
                      </p>
                    </div>
                    <div>
                      <img
                        src={sifrao}
                        alt="Símbolo do sifrão, representa dinheiro"
                      />
                      <p>
                        Pagamento na entrega <strong>{data.payment}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={motoBoy}
                  alt="Representação de um jovem trabalhador indo fazer a entrega do produto em uma moto roxa, com sua maleta no bagageiro"
                />
              </div>
            )
          })}
      </SectionDescription>
    </SucessContainer>
  )
}
