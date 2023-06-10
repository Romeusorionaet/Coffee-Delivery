import { NavLink } from 'react-router-dom'
import { ContainerHeader } from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <NavLink to={'/'}>
        <h1>logo Header</h1>
      </NavLink>

      <NavLink to={'/checkout'}>Carrinho 0</NavLink>
    </ContainerHeader>
  )
}
