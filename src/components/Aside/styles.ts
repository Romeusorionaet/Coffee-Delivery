import styled from 'styled-components'

export const AsideContainer = styled.aside`
  grid-area: ASIDE;

  border-radius: 40px;
  width: 44.8rem;

  color: ${(props) => props.theme['white-500']};
  background-color: ${(props) => props.theme['white-300']};

  h1 {
    background-color: ${(props) => props.theme['white-200']};
    color: ${(props) => props.theme['gray-400']};

    font-size: 1.8rem;
    font-weight: bold;

    padding-bottom: 1.5rem;
  }
`
export const ResultOfValues = styled.div`
  padding: 4.8rem 4.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  p {
    color: ${(props) => props.theme['gray-300']};
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-style: regular;
    font-weight: 400;

    display: flex;
    justify-content: space-between;
  }

  p:nth-child(3) {
    color: ${(props) => props.theme['gray-400']};
    font-style: bold;
    font-size: 2rem;
  }

  button {
    background-color: ${(props) => props.theme['yellow-200']};
    color: ${(props) => props.theme['white-100']};

    border: none;
    border-radius: 6px;

    margin-top: 1.2rem;
    padding: 1.2rem;

    width: 100%;

    font-size: 1.4rem;
    font-style: bold;
  }

  button:hover {
    background-color: ${(props) => props.theme['yellow-300']};
  }
`
