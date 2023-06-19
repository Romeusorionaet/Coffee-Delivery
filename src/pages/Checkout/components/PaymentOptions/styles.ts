import styled from 'styled-components'

export const PaymentOptionsContainer = styled.div`
  grid-area: PAYMENT;

  max-width: 64rem;

  padding: 4rem;
  border-radius: 40px;

  color: ${(props) => props.theme['gray-500']};
  background-color: ${(props) => props.theme['white-300']};

  .wrapper-title {
    display: flex;

    svg {
      color: ${(props) => props.theme['purple-200']};
    }

    > div {
      margin-left: 1.2rem;

      h2 {
        color: ${(props) => props.theme['gray-400']};

        font-size: 1.6rem;
        font-style: regular;
        font-weight: 400;
        line-height: 2rem;
      }

      p {
        color: ${(props) => props.theme['gray-300']};

        font-size: 1.4rem;
        font-style: regular;
        font-weight: 400;
        line-height: 2rem;
      }
    }
  }
`

export const Options = styled.div`
  display: flex;
  gap: 1.2rem;

  margin-top: 3.2rem;

  button {
    background-color: ${(props) => props.theme['white-500']};

    padding: 1.6rem 1rem;

    max-width: 18rem;
    height: 5rem;

    border: none;
    border-radius: 6px;
    border: 2px solid transparent;

    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      color: ${(props) => props.theme['gray-300']};

      font-size: 1.2rem;
      font-weight: 400;
      font-style: regular;
      white-space: nowrap;
    }

    svg {
      flex-shrink: 0;
    }
  }

  button:hover {
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-400']};
  }

  button:focus {
    border: solid 2px ${(props) => props.theme['purple-200']};
    background-color: ${(props) => props.theme['purple-100']};
  }

  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;

    button {
      width: 100%;
    }
  }
`
