import { listOfAllCoffee } from '../../../../Menu/listOfAllCoffee'
import { Coffee } from '../Coffee'

import { MenuCoffeeContainer } from './styles'

export function MenuCoffee() {
  return (
    <MenuCoffeeContainer>
      <h2>Nossos cafés</h2>

      {listOfAllCoffee.map((item) => {
        return (
          <Coffee
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            description={item.description}
            price={item.price}
            category={item.category}
            coffeeQuantity={1}
          />
        )
      })}
    </MenuCoffeeContainer>
  )
}
