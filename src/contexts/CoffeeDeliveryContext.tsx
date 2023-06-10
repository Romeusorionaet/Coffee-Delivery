import { ReactNode, createContext, useState } from 'react'

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
  gettingOrdersCoffee: (coffee: CoffeeProps) => void
  orderCoffee: CoffeeProps[]
}

export const CoffeeOfContext = createContext({} as CoffeContextType)

export function CoffeeDeliveryContext({
  children,
}: CoffeeContextProviderProps) {
  const [orderCoffee, setOrderCoffee] = useState<CoffeeProps[]>([])

  const gettingOrdersCoffee = ({
    id,
    title,
    img,
    description,
    price,
    coffeeQuantity,
  }: CoffeeProps) => {
    setOrderCoffee((state) => [
      ...state,
      { id, img, title, description, price, coffeeQuantity },
    ])
  }

  return (
    <CoffeeOfContext.Provider
      value={{
        gettingOrdersCoffee,
        orderCoffee,
      }}
    >
      {children}
    </CoffeeOfContext.Provider>
  )
}
