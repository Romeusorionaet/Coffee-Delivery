/* eslint-disable prettier/prettier */
import ExpressoTradicional from '../assets/coffee/ExpressoTradicional.svg'
import ExpressoAmericano from '../assets/coffee/ExpressoAmericano.svg'
import Árabe from '../assets/coffee/Árabe.svg'
import CaféComLeite from '../assets/coffee/CaféComLeite.svg'
import Capuccino from '../assets/coffee/Capuccino.svg'
import ChocolateQuente from '../assets/coffee/ChocolateQuente.svg'
import Cubano from '../assets/coffee/Cubano.svg'
import ExpressoCremoso from '../assets/coffee/ExpressoCremoso.svg'
import ExpressoGelado from '../assets/coffee/ExpressoGelado.svg'
import Havaiano from '../assets/coffee/Havaiano.svg'
import Irlandês from '../assets/coffee/Irlandês.svg'
import Latte from '../assets/coffee/Latte.svg'
import Macchiato from '../assets/coffee/Macchiato.svg'
import Mocaccino from '../assets/coffee/Mocaccino.svg'

export const listOfAllCoffee = [
  {
    id: 1,
    img: ExpressoTradicional,
    category: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 8.50,
  },

  {
    id: 2,
    img: ExpressoAmericano,
    title: 'Expresso Americano',
    category: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.50,
  },

  {
    id: 3,
    img: Árabe,
    title: 'Árabe',
    category: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 10.50,
  },

  {
    id: 4,
    img: CaféComLeite,
    title: 'Café com Leite',
    category: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 5.50,
  },

  {
    id: 5,
    img: Capuccino,
    title: 'Capuccino',
    category: ['tradicional', 'com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 7.50,
  },

  {
    id: 6,
    img: ChocolateQuente,
    title: 'Chocolate Quente',
    category: ['tradicional', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.50,
  },

  {
    id: 7,
    img: Cubano,
    title: 'Cubano',
    category: ['especial', 'alcoólico', 'gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 12.50,
  },

  {
    id: 8,
    img: ExpressoCremoso,
    title: 'Expresso Cremoso',
    category: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.50,
  },

  {
    id: 9,
    img: ExpressoGelado,
    title: 'Expresso Gelado',
    category: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 7.50,
  },

  {
    id: 10,
    img: Havaiano,
    title: 'Havaiano',
    category: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 10.50,
  },

  {
    id: 11,
    img: Irlandês,
    title: 'Irlandês',
    category: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 12.50,
  },

  {
    id: 12,
    img: Latte,
    title: 'Latte',
    category: ['tradicional', 'com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 6.50,
  },

  {
    id: 12,
    img: Macchiato,
    title: 'Macchiato',
    category: ['tradicional', 'com leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 5.50,
  },

  {
    id: 12,
    img: Mocaccino,
    title: 'mocaccino',
    category: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.50,
  },
]
