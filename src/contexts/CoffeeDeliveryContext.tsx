import { ReactNode, createContext, useReducer } from 'react'
import { orderCoffeeReducer } from '../reducers/orderCoffe/reducer'
import {
  addNewCoffeeAction,
  cleanCartAction,
  decrementCoffeeAction,
  incrementCoffeeAction,
  removeCoffeeFromCartAction,
} from '../reducers/orderCoffe/actions'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CategpryProps {
  tag: string
  id: string
}

export interface CoffeeProps {
  id: number
  img: string
  title: string
  description: string
  price: number
  category: CategpryProps[]
  coffeeQuantity: number
}

interface CoffeContextType {
  addCoffeeToCart: (coffee: CoffeeProps) => void
  handleRemoveCoffeeFromCart: (id: number) => void
  orderCoffee: CoffeeProps[]
  autoCleanCart: () => void

  handleMoreCoffee: (id: number) => void
  handleLessCoffee: (id: number) => void
}

export const CoffeeOfContext = createContext({} as CoffeContextType)

export function CoffeeDeliveryContext({
  children,
}: CoffeeContextProviderProps) {
  const [orderCoffee, dispatch] = useReducer(
    orderCoffeeReducer,

    localStorage.getItem('@coffeeDeliveryCart-1.0')
      ? JSON.parse(localStorage.getItem('@coffeeDeliveryCart-1.0')!)
      : [],
  )

  function addCoffeeToCart({
    id,
    title,
    img,
    description,
    price,
    category,
    coffeeQuantity,
  }: CoffeeProps) {
    dispatch(
      addNewCoffeeAction({
        id,
        title,
        img,
        description,
        price,
        category,
        coffeeQuantity,
      }),
    )
  }

  function handleRemoveCoffeeFromCart(id: number) {
    dispatch(removeCoffeeFromCartAction(id))
  }

  function handleMoreCoffee(id: number) {
    dispatch(incrementCoffeeAction(id))
  }

  function handleLessCoffee(id: number) {
    dispatch(decrementCoffeeAction(id))
  }

  function autoCleanCart() {
    dispatch(cleanCartAction())
  }

  return (
    <CoffeeOfContext.Provider
      value={{
        addCoffeeToCart,
        orderCoffee,
        handleRemoveCoffeeFromCart,
        handleMoreCoffee,
        handleLessCoffee,
        autoCleanCart,
      }}
    >
      {children}
    </CoffeeOfContext.Provider>
  )
}
