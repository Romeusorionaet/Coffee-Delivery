import { useContext } from 'react'
import { CoffeeOfContext } from '../../contexts/CoffeeDeliveryContext'

export function Checkout() {
  const { orderCoffee } = useContext(CoffeeOfContext)

  console.log(orderCoffee)
  // parando aqui

  return <h1>Checkout</h1>
}
