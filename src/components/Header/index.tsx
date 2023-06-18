import { NavLink } from 'react-router-dom'
import { ContainerHeader } from './styles'
import { useContext } from 'react'
import { CoffeeOfContext } from '../../contexts/CoffeeDeliveryContext'

import logoCoffee from '../../assets/logoCoffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { AddressContext } from '../../contexts/AddressFormContext'

export function Header() {
  const { orderCoffee } = useContext(CoffeeOfContext)
  const { city, uf, street } = useContext(AddressContext)

  const handleButtonMap = () => {
    if (city && street) {
      const address = encodeURIComponent(`${city}, ${street}`)
      const url = `https://www.google.com/maps/search/?api=1&query=${address}`

      window.open(url, '_blank')
    } else {
      alert('Parece que você ainda não informou o local de entrega')
    }
  }

  function teste() {
    if (orderCoffee.length === 0) {
      return alert('Carrinho vazio!')
    }
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
        <button onClick={handleButtonMap}>
          <MapPin size={26} weight="fill" />
          {(city || uf) && (
            <p>
              {city}, <span>{uf}</span>
            </p>
          )}
        </button>

        <NavLink to={orderCoffee.length === 0 ? '#' : '/checkout'}>
          <div onClick={teste} className="wrapper">
            <ShoppingCart size={32} weight="fill" />
            {orderCoffee.length === 0 ? (
              <></>
            ) : (
              <div className="quantity">
                <span>{orderCoffee.length}</span>
              </div>
            )}
          </div>
        </NavLink>
      </nav>
    </ContainerHeader>
  )
}
