import styled from 'styled-components'

export const SelectedCoffeecontainer = styled.div`
  padding: 4.8rem 4.4rem;

  height: 30rem;
  overflow: auto;

  > div {
    display: flex;
    gap: 2rem;
    justify-content: center;

    padding-bottom: 2.4rem;
    margin-bottom: 2.4rem;

    border-bottom: ${(props) => props.theme['white-500']} solid 1px;

    img {
      width: 6.4rem;
    }

    > span {
      font-size: 1.4rem;
      font-weight: 700;
      font-style: bold;

      color: ${(props) => props.theme['gray-300']};
    }
  }

  @media (max-width: 700px) {
    padding: 2.8rem 1rem;
  }

  @media (max-width: 500px) {
    > div {
      img {
        width: 6rem;
      }
    }
  }
`

export const ButtonController = styled.div`
  h3 {
    font-size: 1.6rem;
    font-style: regular;
    font-weight: 400;
    line-height: 2.1rem;

    color: ${(props) => props.theme['gray-300']};

    margin-bottom: 0.8rem;
  }

  .wrapper {
    display: flex;
    gap: 0.8rem;

    > div {
      color: ${(props) => props.theme['gray-400']};
      background-color: ${(props) => props.theme['white-500']};

      font-size: 1.6rem;
      font-weight: 400;

      padding: 1.1rem;
      border-radius: 6px;

      height: 3.2rem;

      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        border: none;
        background: none;
      }
    }

    > button {
      background-color: ${(props) => props.theme['white-500']};
      color: ${(props) => props.theme['gray-300']};

      border-radius: 6px;
      border: none;

      font-size: 1.2rem;
      font-weight: 400;

      width: 9.1rem;
      height: 3.2rem;

      padding: 6px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }

    > button:hover {
      background-color: ${(props) => props.theme['gray-100']};
    }
  }

  @media (max-width: 500px) {
    h3 {
      font-size: 1.4rem;
    }

    .wrapper > button {
      width: 4.5rem;
      span {
        display: none;
      }
    }
  }
`
