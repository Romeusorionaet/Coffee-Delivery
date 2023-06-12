import { ReactNode, createContext, useReducer } from 'react'

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface CoffeeProps {
  id: string
  img: string
  title: string
  description: string
  price: string
  coffeeQuantity?: number
}

interface CoffeContextType {
  addCoffeeToCart: (coffee: CoffeeProps) => void
  removeCoffeeFromCart: (id: string) => void
  orderCoffee: CoffeeProps[]
}

export const CoffeeOfContext = createContext({} as CoffeContextType)

export function CoffeeDeliveryContext({
  children,
}: CoffeeContextProviderProps) {
  const [orderCoffee, dispatch] = useReducer(
    (state: CoffeeProps[], action: any) => {
      if (action.type === 'ADD_NEW_COFFEE') {
        const { id, coffeeQuantity } = action.payload.data

        const existingCoffee = state.findIndex((item) => item.id === id)

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

      if (action.type === 'REMOVE_COFFEE_FROM_CART') {
        const { id } = action.payload.data

        const listOfCoffeeWithoutDeleteOne = state.filter((item) => {
          return item.id !== id
        })

        return listOfCoffeeWithoutDeleteOne
      }
      return state
    },
    [],
  )

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

  function removeCoffeeFromCart(id: string) {
    dispatch({
      type: 'REMOVE_COFFEE_FROM_CART',
      payload: {
        data: { id },
      },
    })
  }

  return (
    <CoffeeOfContext.Provider
      value={{
        addCoffeeToCart,
        orderCoffee,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CoffeeOfContext.Provider>
  )
}
