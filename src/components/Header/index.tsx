import { NavLink } from 'react-router-dom'
import { ContainerHeader } from './styles'
import { useContext } from 'react'
import { CoffeeOfContext } from '../../contexts/CoffeeDeliveryContext'

import logoCoffee from '../../assets/logoCoffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  const { orderCoffee } = useContext(CoffeeOfContext)

  const handleButtonClick = () => {
    const cidade = 'Sua Cidade'
    const endereco = encodeURIComponent(cidade)
    const url = `https://www.google.com/maps/search/?api=1&query=${endereco}`

    window.open(url, '_blank')
  }

  return (
    <ContainerHeader>
      <NavLink to={'/'}>
        <img
          src={logoCoffee}
          alt="logotipo da página. Um copo de cor roxo ao lado do nome Coffee Delivery"
        />
      </NavLink>

      <nav>
        <button onClick={handleButtonClick}>
          <MapPin size={26} weight="fill" />
          <p>Canguaretama, RN</p>
        </button>

        <NavLink to={'/checkout'}>
          <div className="wrapper">
            <ShoppingCart size={32} weight="fill" />
            <div className="quantity">
              <span>{orderCoffee.length}</span>
            </div>
          </div>
        </NavLink>
      </nav>
    </ContainerHeader>
  )
}
