import styled from 'styled-components'

export const Aside = styled.aside`
  grid-area: ASIDE;

  color: ${(props) => props.theme['white-500']};
  background-color: ${(props) => props.theme['purple-200']};

  h1 {
    color: ${(props) => props.theme['gray-400']};
    background-color: ${(props) => props.theme['gray-100']};
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 2.34rem;
  }

  width: 44.8rem;
`
