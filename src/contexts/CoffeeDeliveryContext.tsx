import { ReactNode, createContext, useReducer, useState } from 'react'

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface CoffeeProps {
  id: string
  img: string
  title: string
  description: string
  price: string
  coffeeQuantity: number
}

interface CoffeContextType {
  addCoffeeToCart: (coffee: CoffeeProps) => void
  orderCoffee: CoffeeProps[]
  handleMoreCoffee: () => void
  handleLessCoffee: () => void
  coffeeQuantity: number
}

export const CoffeeOfContext = createContext({} as CoffeContextType)

export function CoffeeDeliveryContext({
  children,
}: CoffeeContextProviderProps) {
  const [orderCoffee, dispatch] = useReducer(
    (state: CoffeeProps[], action: any) => {
      if (action.type === 'ADD_NEW_COFFEE') {
        const { id, coffeeQuantity } = action.payload.data

        const existingCoffee = state.findIndex((coffee) => coffee.id === id)

        if (existingCoffee !== -1) {
          const updatedCoffee = {
            ...state[existingCoffee],
            coffeeQuantity:
              state[existingCoffee].coffeeQuantity + coffeeQuantity,
          }

          const updatedOrderCoffee = [...state]
          updatedOrderCoffee[existingCoffee] = updatedCoffee

          return updatedOrderCoffee
        } else {
          return [...state, action.payload.data]
        }
      }
      return state
    },
    [],
  )

  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1)

  function handleMoreCoffee() {
    setCoffeeQuantity((state) => state + 1)
  }

  function handleLessCoffee() {
    if (coffeeQuantity > 1) {
      setCoffeeQuantity((state: number) => state - 1)
    }
  }

  // if (orderCoffee.length !== 0) {
  //   localStorage.setItem('@coffeeDeliveryCart-1.0', JSON.stringify(orderCoffee))
  // }

  function addCoffeeToCart({
    id,
    title,
    img,
    description,
    price,
    coffeeQuantity,
  }: CoffeeProps) {
    dispatch({
      type: 'ADD_NEW_COFFEE',
      payload: {
        data: { id, img, title, description, price, coffeeQuantity },
      },
    })
  }

  return (
    <CoffeeOfContext.Provider
      value={{
        addCoffeeToCart,
        orderCoffee,
        handleMoreCoffee,
        handleLessCoffee,
        coffeeQuantity,
      }}
    >
      {children}
    </CoffeeOfContext.Provider>
  )
}
