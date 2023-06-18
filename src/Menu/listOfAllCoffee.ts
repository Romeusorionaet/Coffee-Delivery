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

import { v4 as uuidv4 } from 'uuid'

export const listOfAllCoffee = [

{
  id: 1,
  img: ExpressoTradicional,
  category: [{tag: 'tradicional', id: uuidv4()}],
  title: 'Expresso Tradicional',
  description: 'O tradicional café feito com água quente e grãos moídos',
  price: 8.50,
},

{
  id: 2,
  img: ExpressoAmericano,
  title: 'Expresso Americano',
  category: [{tag: 'tradicional', id: uuidv4()}],
  description: 'Expresso diluído, menos intenso que o tradicional',
  price: 6.50,
},

{
  id: 3,
  img: Árabe,
  title: 'Árabe',
  category: [{tag: 'especial', id: uuidv4()}],
  description: 'Bebida preparada com grãos de café árabe e especiarias',
  price: 10.50,
},

{
  id: 4,
  img: CaféComLeite,
  title: 'Café com Leite',
  category: [{tag: 'tradicional', id: uuidv4()}, {tag: 'com leite', id: uuidv4()}],
  description: 'Meio a meio de expresso tradicional com leite vaporizado',
  price: 5.50,
},

{
  id: 5,
  img: Capuccino,
  title: 'Capuccino',
  category:  [{tag: 'tradicional', id: uuidv4()}, {tag: 'com leite', id: uuidv4()}],
  description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
  price: 7.50,
},

{
  id: 6,
  img: ChocolateQuente,
  title: 'Chocolate Quente',
  category:  [{tag: 'tradicional', id: uuidv4()}, {tag: 'com leite', id: uuidv4()}],
  description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  price: 9.50,
},

{
  id: 7,
  img: Cubano,
  title: 'Cubano',
  category: [{tag: 'especial', id: uuidv4()}, {tag: 'alcoólico', id: uuidv4()}, {tag: 'gelado', id: uuidv4()}],
  description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
  price: 12.50,
},

{
  id: 8,
  img: ExpressoCremoso,
  title: 'Expresso Cremoso',
  category: [{tag: 'tradicional', id: uuidv4()}],
  description: 'Café expresso tradicional com espuma cremosa',
  price: 9.50,
},

{
  id: 9,
  img: ExpressoGelado,
  title: 'Expresso Gelado',
  category: [{tag: 'tradicional', id: uuidv4()}, {tag: 'gelado', id: uuidv4()}],
  description: 'Bebida preparada com café expresso e cubos de gelo',
  price: 7.50,
},

{
  id: 10,
  img: Havaiano,
  title: 'Havaiano',
  category: [{tag: 'especial', id: uuidv4()}],
  description: 'Bebida adocicada preparada com café e leite de coco',
  price: 10.50,
},

{
  id: 11,
  img: Irlandês,
  title: 'Irlandês',
  category: [{tag: 'especial', id: uuidv4()}, {tag: 'alcoólico', id: uuidv4()}],
  description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  price: 12.50,
},

{
  id: 12,
  img: Latte,
  title: 'Latte',
  category: [{tag: 'tradicional', id: uuidv4()}, {tag: 'com leite', id: uuidv4()}],
  description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  price: 6.50,
},

{
  id: 13,
  img: Macchiato,
  title: 'Macchiato',
  category:  [{tag: 'tradicional', id: uuidv4()}, {tag: 'com leite', id: uuidv4()}],
  description: 'Café expresso misturado com um pouco de leite quente e espuma',
  price: 5.50,
},

{
  id: 14,
  img: Mocaccino,
  title: 'mocaccino',
  category: [{tag: 'tradicional', id: uuidv4()}, {tag: 'com leite', id: uuidv4()}],
  description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  price: 9.50,
},
]


