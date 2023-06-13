import { useContext, useEffect, useState } from 'react'
import { CoffeeOfContext } from '../../contexts/CoffeeDeliveryContext'
import { Aside } from './styles'

export function SelectedCoffees() {
  const {
    orderCoffee,
    removeCoffeeFromCart,
    handleLessCoffee,
    handleMoreCoffee,
  } = useContext(CoffeeOfContext)
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
    <Aside>
      <h1>Cafés selecionados</h1>

      <span>TOTAL DE ITEMS: {totalValue}</span>
      <br />
      <span>VALOR DA ENTREGA: {freight}</span>
      <br />
      <span>VALOR TOTAL: {totalValue + Number(freight)}</span>

      {orderCoffee &&
        orderCoffee.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div>
                <button onClick={() => handleLessCoffee(item.id)}>Menos</button>
                <span>{item.coffeeQuantity}</span>
                <button onClick={() => handleMoreCoffee(item.id)}>Mais</button>
              </div>

              <span>{item.price * item.coffeeQuantity}</span>

              <button onClick={() => removeCoffeeFromCart(item.id)}>
                Remover
              </button>
            </div>
          )
        })}
    </Aside>
  )
}
