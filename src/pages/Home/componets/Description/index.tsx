import cart from '../../../../assets/tags/cart.svg'
import cub from '../../../../assets/tags/cub.svg'
import watch from '../../../../assets/tags/watch.svg'
import coffee from '../../../../assets/tags/coffee.svg'

import logoCoffeeDescription from '../../../../assets/logoCoffeeDescription.svg'
import { PageDescriptionContainer } from './styles'

export function Description() {
  return (
    <PageDescriptionContainer>
      <div className="wrapper">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div className="tags">
          <div>
            <img src={cart} alt="cart shopping" />
            <p>Compra simples e segura</p>
          </div>
          <div>
            <img src={cub} alt="cubo" />
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <img src={watch} alt="relógio" />
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <img src={coffee} alt="xicara de café" />
            <p>O café chega fresquinho até você</p>
          </div>
        </div>
      </div>

      <div className="wrapper_img">
        <img
          src={logoCoffeeDescription}
          alt="Um cartoon representando com mais detalhes o logotipo, com um copo de cores preto e branco com sua tampa preta e por volta tem as sementes do café em um background amarelado"
        />
      </div>
    </PageDescriptionContainer>
  )
}
