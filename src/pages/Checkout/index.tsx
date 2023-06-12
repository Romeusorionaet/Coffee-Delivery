import { useContext, useEffect, useState } from 'react'
import {
  CoffeeOfContext,
  CoffeeProps,
} from '../../contexts/CoffeeDeliveryContext'

export function Checkout() {
  const {
    orderCoffee,
    removeCoffeeFromCart,
    handleLessCoffee,
    handleMoreCoffee,
  } = useContext(CoffeeOfContext)
  const freight = '3.50'

  const [totalValue, setTotalValue] = useState<number>(0)
  const [listOfCoffeeSaved, setListOfCoffeeSaved] = useState<CoffeeProps[]>([])

  useEffect(() => {
    const transformListSaved = localStorage.getItem('@coffeeDeliveryCart-1.0')
    if (transformListSaved) {
      setListOfCoffeeSaved(JSON.parse(transformListSaved))
    }

    let sum = 0
    if (orderCoffee) {
      orderCoffee.forEach((item) => {
        sum += item.price * item.coffeeQuantity
      })
    }
    setTotalValue(sum)
  }, [orderCoffee])

  console.log(listOfCoffeeSaved)

  return (
    <div>
      <h1>Checkout</h1>

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
    </div>
  )
}
