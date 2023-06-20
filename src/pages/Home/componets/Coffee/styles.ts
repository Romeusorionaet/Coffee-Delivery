import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['white-300']};

  width: 25.6rem;

  padding: 0 2rem 2rem;

  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  text-align: center;

  margin-top: -2rem;

  .imagem {
    width: 12rem;
    height: 12rem;

    margin-bottom: 1.2rem;

    img {
      width: 100%;
    }
  }

  .category {
    background-color: ${(props) => props.theme['yellow-100']};
    border-radius: 6px;
    padding: 0.4rem;

    display: flex;
    gap: 1rem;

    span {
      color: ${(props) => props.theme['yellow-300']};

      font-size: 1rem;
      font-style: bold;
      font-weight: 700;

      text-transform: uppercase;
    }
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;

    margin: 0.8rem 0;
    color: ${(props) => props.theme['gray-400']};
  }

  p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-style: regular;

    margin-bottom: 3.3rem;
    height: 3.6rem;
    color: ${(props) => props.theme['gray-200']};
  }
`

export const Controll = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > p {
    color: ${(props) => props.theme['gray-300']};

    font-family: 'Baloo 2', cursive;
    font-size: 2.4rem;

    margin-right: 1.6rem;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      font-style: regular;
    }
  }

  div {
    color: ${(props) => props.theme['gray-400']};
    background-color: ${(props) => props.theme['white-500']};

    font-size: 1.6rem;
    font-weight: 400;

    padding: 1.1rem;
    border-radius: 6px;

    height: 3.8rem;
    width: 8.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
      border: none;
      background: none;
    }
  }

  > button {
    border: none;
    border-radius: 6px;

    padding: 0.8rem;

    background-color: ${(props) => props.theme['purple-200']};
    color: ${(props) => props.theme['white-100']};
  }

  > button:hover {
    background-color: ${(props) => props.theme['purple-300']};
  }
`
