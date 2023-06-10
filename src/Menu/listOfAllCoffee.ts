import ExpressoTradicional from '../assets/coffee/Expresso Tradicional.svg'
import ExpressoAmericano from '../assets/coffee/Expresso Americano.svg'
import { v4 as uuidv4 } from 'uuid'

export const listOfAllCoffee = [
  {
    id: uuidv4(),
    img: ExpressoTradicional,
    title: 'Expresso Tradicional',
    description: 'Descrição do café tradicional',
    price: '9,90',
  },

  {
    id: uuidv4(),
    img: ExpressoAmericano,
    title: 'Expresso Americano',
    description: 'Descrição do café americano',
    price: '5,90',
  },
]
