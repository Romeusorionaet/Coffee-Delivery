import { useContext, useEffect, useState } from 'react'
import { CoffeeOfContext } from '../../contexts/CoffeeDeliveryContext'
import { AsideContainer, ResultOfValues } from './styles'
import { SelectedCoffee } from '../SelectedCoffee'
import { NavLink } from 'react-router-dom'

export function Aside() {
  const { orderCoffee } = useContext(CoffeeOfContext)
  const freight = '3.50'

  const [totalValue, setTotalValue] = useState<number>(0)

  useEffect(() => {
    let sum = 0
    if (orderCoffee) {
      orderCoffee.forEach((item) => {
        sum += item.price * item.coffeeQuantity
      })
    }
    setTotalValue(sum)
  }, [orderCoffee])

  return (
    <AsideContainer>
      <h1>Cafés selecionados</h1>

      <SelectedCoffee />

      <ResultOfValues>
        <p>
          Total de itens <span>R$ {totalValue}</span>
        </p>
        <p>
          Entrega <span>R$ {freight}</span>
        </p>
        <p>
          Total <span>R$ {totalValue + Number(freight)}</span>
        </p>

        <NavLink to={'/success'}>
          <button>CONFIRMAR PEDIDO</button>
        </NavLink>
      </ResultOfValues>
    </AsideContainer>
  )
}