import { ReactNode, createContext, useReducer } from 'react'

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface CoffeeProps {
  id: number
  img: string
  title: string
  description: string
  price: number
  coffeeQuantity: number
}

interface CoffeContextType {
  addCoffeeToCart: (coffee: CoffeeProps) => void
  removeCoffeeFromCart: (id: number) => void
  orderCoffee: CoffeeProps[]

  handleMoreCoffee: (id: number) => void
  handleLessCoffee: (id: number) => void
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

          localStorage.setItem(
            '@coffeeDeliveryCart-1.0',
            JSON.stringify(updatedOrderCoffee),
          )

          return updatedOrderCoffee
        } else {
          localStorage.setItem(
            '@coffeeDeliveryCart-1.0',
            JSON.stringify([...state, action.payload.data]),
          )
          return [...state, action.payload.data]
        }
      }

      if (action.type === 'REMOVE_COFFEE_FROM_CART') {
        const { id } = action.payload.data

        const listOfCoffeeWithoutDeleteOne = state.filter((item) => {
          return item.id !== id
        })

        localStorage.setItem(
          '@coffeeDeliveryCart-1.0',
          JSON.stringify(listOfCoffeeWithoutDeleteOne),
        )

        return listOfCoffeeWithoutDeleteOne
      }

      if (action.type === 'INCREMENT') {
        const { id } = action.payload.data

        const coffeeFound = state.findIndex((item) => item.id === id)

        if (coffeeFound !== -1) {
          const updatedCoffeeQuantity = {
            ...state[coffeeFound],
            coffeeQuantity: state[coffeeFound].coffeeQuantity + 1,
          }

          const newQuantityOfCoffee = [...state]
          newQuantityOfCoffee[coffeeFound] = updatedCoffeeQuantity

          localStorage.setItem(
            '@coffeeDeliveryCart-1.0',
            JSON.stringify(newQuantityOfCoffee),
          )

          return newQuantityOfCoffee
        } else {
          return [...state, action.payload.data]
        }
      }

      if (action.type === 'DECREMENT') {
        const { id } = action.payload.data

        const coffeeFound = state.findIndex((item) => item.id === id)

        if (coffeeFound !== -1) {
          const updatedCoffeeQuantity = {
            ...state[coffeeFound],
            coffeeQuantity:
              state[coffeeFound].coffeeQuantity > 1
                ? state[coffeeFound].coffeeQuantity - 1
                : state[coffeeFound].coffeeQuantity,
          }

          const newQuantityOfCoffee = [...state]
          newQuantityOfCoffee[coffeeFound] = updatedCoffeeQuantity

          localStorage.setItem(
            '@coffeeDeliveryCart-1.0',
            JSON.stringify(newQuantityOfCoffee),
          )

          return newQuantityOfCoffee
        } else {
          return [...state, action.payload.data]
        }
      }

      return state
    },
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
    coffeeQuantity,
  }: CoffeeProps) {
    dispatch({
      type: 'ADD_NEW_COFFEE',
      payload: {
        data: { id, img, title, description, price, coffeeQuantity },
      },
    })
  }

  function removeCoffeeFromCart(id: number) {
    dispatch({
      type: 'REMOVE_COFFEE_FROM_CART',
      payload: {
        data: { id },
      },
    })
  }

  function handleMoreCoffee(id: number) {
    dispatch({
      type: 'INCREMENT',
      payload: {
        data: { id },
      },
    })
  }

  function handleLessCoffee(id: number) {
    dispatch({
      type: 'DECREMENT',
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
        handleMoreCoffee,
        handleLessCoffee,
      }}
    >
      {children}
    </CoffeeOfContext.Provider>
  )
}
