import { listOfAllCoffee } from '../../Menu/listOfAllCoffee'
import { Coffee } from '../Coffee'

export function MenuCoffee() {
  return (
    <div>
      {listOfAllCoffee.map((item) => {
        return (
          <Coffee
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            description={item.description}
            price={item.price}
          />
        )
      })}
    </div>
  )
}
