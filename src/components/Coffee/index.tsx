import { useContext, useState } from 'react'
import {
  CoffeeOfContext,
  CoffeeProps,
} from '../../contexts/CoffeeDeliveryContext'

export function Coffee({ id, img, title, description, price }: CoffeeProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1)
  const { gettingOrdersCoffee } = useContext(CoffeeOfContext)

  const handleMoreCoffee = () => {
    setCoffeeQuantity((state) => state + 1)
  }

  const handleLessCoffee = () => {
    if (coffeeQuantity > 1) {
      setCoffeeQuantity((state: number) => state - 1)
    }
  }

  const handleAddToCart = () => {
    gettingOrdersCoffee({ id, img, title, description, coffeeQuantity, price })
    setCoffeeQuantity(1)
  }

  return (
    <div>
      <div>
        <div>
          <img src={img} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>

          <div>
            <button onClick={handleLessCoffee}>Menos</button>
            <span>{coffeeQuantity}</span>
            <button onClick={handleMoreCoffee}>Mais</button>
          </div>

          <button onClick={handleAddToCart}>Adicionar no carrinho</button>
        </div>
      </div>
    </div>
  )
}
