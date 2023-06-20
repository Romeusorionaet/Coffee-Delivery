import { CoffeeProps } from '../../contexts/CoffeeDeliveryContext'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  CLEAN_CART = 'CLEAN_CART',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export function addNewCoffeeAction({
  id,
  title,
  img,
  description,
  price,
  category,
  coffeeQuantity,
}: CoffeeProps) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      data: { id, img, title, description, price, category, coffeeQuantity },
    },
  }
}

export function removeCoffeeFromCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      data: { id },
    },
  }
}

export function cleanCartAction() {
  return {
    type: ActionTypes.CLEAN_CART,
    payload: {
      data: [],
    },
  }
}

export function incrementCoffeeAction(id: number) {
  return {
    type: ActionTypes.INCREMENT,
    payload: {
      data: { id },
    },
  }
}

export function decrementCoffeeAction(id: number) {
  return {
    type: ActionTypes.DECREMENT,
    payload: {
      data: { id },
    },
  }
}
