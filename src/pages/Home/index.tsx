import { MenuCoffee } from './componets/MenuCoffee'
import { Description } from './componets/Description'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Description />
      <MenuCoffee />
    </HomeContainer>
  )
}
