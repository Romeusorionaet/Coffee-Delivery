import { useContext } from 'react'
import { CoffeeOfContext } from '../../contexts/CoffeeDeliveryContext'
import { ButtonController, SelectedCoffeecontainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

export function SelectedCoffee() {
  const {
    orderCoffee,
    removeCoffeeFromCart,
    handleLessCoffee,
    handleMoreCoffee,
  } = useContext(CoffeeOfContext)

  return (
    <SelectedCoffeecontainer className="scrollbar">
      {orderCoffee &&
        orderCoffee.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} alt="" />

              <ButtonController>
                <h3>{item.title}</h3>

                <div className="wrapper">
                  <div>
                    <button onClick={() => handleLessCoffee(item.id)}>
                      <Minus size={14} />
                    </button>
                    <span>{item.coffeeQuantity}</span>
                    <button onClick={() => handleMoreCoffee(item.id)}>
                      <Plus size={14} />
                    </button>
                  </div>

                  <button onClick={() => removeCoffeeFromCart(item.id)}>
                    <Trash size={14} /> Remover
                  </button>
                </div>
              </ButtonController>

              <span>R$ {item.price * item.coffeeQuantity}</span>
            </div>
          )
        })}
    </SelectedCoffeecontainer>
  )
}
