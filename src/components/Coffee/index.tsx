import { useContext } from 'react'
import {
  CoffeeOfContext,
  CoffeeProps,
} from '../../contexts/CoffeeDeliveryContext'

export function Coffee({ id, img, title, description, price }: CoffeeProps) {
  const {
    addCoffeeToCart,
    coffeeQuantity,
    handleLessCoffee,
    handleMoreCoffee,
  } = useContext(CoffeeOfContext)

  // const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1)

  // function handleMoreCoffee() {
  //   setCoffeeQuantity((state) => state + 1)
  // }

  // function handleLessCoffee() {
  //   if (coffeeQuantity > 1) {
  //     setCoffeeQuantity((state: number) => state - 1)
  //   }
  // }

  function handleAddToCart() {
    addCoffeeToCart({ id, img, title, description, coffeeQuantity, price })
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
