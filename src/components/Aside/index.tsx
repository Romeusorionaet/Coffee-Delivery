/* eslint-disable prettier/prettier */
import { useContext, useEffect, useState } from 'react'
import { CoffeeOfContext } from '../../contexts/CoffeeDeliveryContext'
import { AsideContainer, ResultOfValues } from './styles'
import { SelectedCoffee } from '../SelectedCoffee'
import { AddressContext } from '../../contexts/AddressFormContext'

export function Aside() {
  const { orderCoffee } = useContext(CoffeeOfContext)
  const { handleDataForm } = useContext(AddressContext)
  const [totalCoffee, setTotalCoffee] = useState<number>(0)

  const freight = 3.50
  const total = totalCoffee + freight

  useEffect(() => {
    let sum = 0
    if (orderCoffee) {
      orderCoffee.forEach((item) => {
        sum += item.price * item.coffeeQuantity
      })
    }
    setTotalCoffee(sum)
  }, [orderCoffee])

  return (
    <AsideContainer>
      <h1>Cafés selecionados</h1>

      <SelectedCoffee />

      <ResultOfValues>
        <p>
          Total de itens <span>R$ {totalCoffee.toFixed(2)}</span>
        </p>
        <p>
          Entrega <span>R$ {freight.toFixed(2)}</span>
        </p>
        <p>
          Total <span>R$ {total.toFixed(2)}</span>
        </p>

        <button onClick={handleDataForm}>CONFIRMAR PEDIDO</button>
      </ResultOfValues>
    </AsideContainer>
  )
}
