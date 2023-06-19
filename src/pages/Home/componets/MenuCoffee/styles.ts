import styled from 'styled-components'

export const MenuCoffeeContainer = styled.main`
  padding: 2rem 16rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.2rem;

  h2 {
    font-size: 3.2rem;
    font-family: 'Baloo 2', cursive;

    margin-bottom: 3.6rem;
    display: block;
    width: 100%;

    color: ${(props) => props.theme['gray-400']};
  }

  > div {
  }

  @media (max-width: 1200px) {
    padding: 2rem 6rem;
  }
`
