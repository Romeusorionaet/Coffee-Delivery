import { useContext } from 'react'
import { CoffeeOfContext } from '../../contexts/CoffeeDeliveryContext'
import { ButtonController, SelectedCoffeecontainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

export function SelectedCoffee() {
  const {
    orderCoffee,
    handleRemoveCoffeeFromCart,
    handleLessCoffee,
    handleMoreCoffee,
  } = useContext(CoffeeOfContext)

  return (
    <SelectedCoffeecontainer className="scrollbar">
      {orderCoffee &&
        orderCoffee.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={item.img}
                alt={`Uma Xicara de café em cima de um pires, representando o café ${item.title}`}
              />

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

                  <button onClick={() => handleRemoveCoffeeFromCart(item.id)}>
                    <Trash size={14} /> <span>Remover</span>
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
