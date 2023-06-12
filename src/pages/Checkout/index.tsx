import { useContext, useState } from 'react'
import { CoffeeOfContext } from '../../contexts/CoffeeDeliveryContext'

export function Checkout() {
  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1)
  const { orderCoffee } = useContext(CoffeeOfContext)

  function handleMoreCoffee() {
    setCoffeeQuantity((state) => state + 1)
  }

  function handleLessCoffee() {
    if (coffeeQuantity > 1) {
      setCoffeeQuantity((state: number) => state - 1)
    }
  }

  return (
    <div>
      <h1>Checkout</h1>
      {orderCoffee &&
        orderCoffee.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div>
                <button onClick={handleLessCoffee}>Menos</button>
                <span>{item.coffeeQuantity}</span>
                <button onClick={handleMoreCoffee}>Mais</button>
              </div>
            </div>
          )
        })}
    </div>
  )
}
