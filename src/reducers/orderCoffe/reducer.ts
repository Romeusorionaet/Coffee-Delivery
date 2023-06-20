import { CoffeeProps } from '../../contexts/CoffeeDeliveryContext'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export function orderCoffeeReducer(state: CoffeeProps[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      return produce(state, (draftState) => {
        const { id, coffeeQuantity } = action.payload.data

        const existingCoffee = draftState.findIndex((item) => item.id === id)

        if (existingCoffee !== -1) {
          draftState[existingCoffee].coffeeQuantity += coffeeQuantity
        } else {
          draftState.push(action.payload.data)
        }

        localStorage.setItem(
          '@coffeeDeliveryCart-1.0',
          JSON.stringify(draftState),
        )
      })
    }

    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
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

    case ActionTypes.CLEAN_CART: {
      localStorage.setItem('@coffeeDeliveryCart-1.0', JSON.stringify([]))

      return []
    }

    case ActionTypes.INCREMENT: {
      return produce(state, (draftState) => {
        const { id } = action.payload.data

        const updatedCoffeeQuantity = draftState.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              coffeeQuantity: item.coffeeQuantity + 1,
            }
          }
          return item
        })

        localStorage.setItem(
          '@coffeeDeliveryCart-1.0',
          JSON.stringify(updatedCoffeeQuantity),
        )

        return updatedCoffeeQuantity
      })
    }

    case ActionTypes.DECREMENT: {
      return produce(state, (draftState) => {
        const { id } = action.payload.data

        const updatedCoffeeQuantity = draftState.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              coffeeQuantity:
                item.coffeeQuantity > 1
                  ? item.coffeeQuantity - 1
                  : item.coffeeQuantity,
            }
          }
          return item
        })

        localStorage.setItem(
          '@coffeeDeliveryCart-1.0',
          JSON.stringify(updatedCoffeeQuantity),
        )

        return updatedCoffeeQuantity
      })
    }

    default:
      return state
  }
}
