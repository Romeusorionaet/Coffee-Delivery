import { useContext, useState } from 'react'
import {
  CoffeeOfContext,
  CoffeeProps,
} from '../../../../contexts/CoffeeDeliveryContext'

import { CoffeeContainer, Controll, WrapperText } from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

// import { v4 as uuidv4 } from 'uuid'

export function Coffee({
  id,
  img,
  title,
  description,
  category,
  price,
}: CoffeeProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1)
  const { addCoffeeToCart } = useContext(CoffeeOfContext)

  const handleMoreCoffee = () => {
    setCoffeeQuantity((state) => state + 1)
  }

  function handleLessCoffee() {
    if (coffeeQuantity > 1) {
      setCoffeeQuantity((state: number) => state - 1)
    }
  }

  function handleAddToCart() {
    addCoffeeToCart({
      id,
      img,
      title,
      description,
      coffeeQuantity,
      category,
      price,
    })
  }

  // category.forEach((cat) => {
  //   cat.id = uuidv4()
  // })

  // const listItems = category.map((cat) => <span key={cat.id}>{cat.tag}</span>)

  // category.map((item) => console.log(item))

  return (
    <CoffeeContainer>
      <WrapperText>
        <div className="imagem">
          <img src={img} alt="" />
        </div>
        {/* <div className="category">{listItems}</div> */}
        {category.map((item) => (
          <span key={item.id}>{item.tag}</span>
        ))}
        <h3>{title}</h3>
        <p>{description}</p>
      </WrapperText>

      <Controll>
        <p>
          <span>R$</span> {price}
        </p>

        <div>
          <button onClick={handleLessCoffee}>
            <Minus size={14} />
          </button>
          <span>{coffeeQuantity}</span>
          <button onClick={handleMoreCoffee}>
            <Plus size={14} />
          </button>
        </div>

        <button onClick={handleAddToCart}>
          <ShoppingCart size={18} weight="fill" />
        </button>
      </Controll>
    </CoffeeContainer>
  )
}
