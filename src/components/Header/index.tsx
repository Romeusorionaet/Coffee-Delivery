import { NavLink } from 'react-router-dom'
import { ContainerHeader } from './styles'
import { useContext } from 'react'
import { CoffeeOfContext } from '../../contexts/CoffeeDeliveryContext'

export function Header() {
  const { orderCoffee } = useContext(CoffeeOfContext)

  return (
    <ContainerHeader>
      <NavLink to={'/'}>
        <h1>logo Header</h1>
      </NavLink>

      <NavLink to={'/checkout'}>Carrinho {orderCoffee.length}</NavLink>
    </ContainerHeader>
  )
}
