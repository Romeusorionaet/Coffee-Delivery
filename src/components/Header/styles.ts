import styled from 'styled-components'

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 4rem 16rem;

  z-index: 2;
  border-bottom: solid 1px ${(props) => props.theme['white-500']};

  background-color: ${(props) => props.theme['white-200']};
  position: fixed;
  top: 0;
  width: 100%;

  a {
    text-decoration: none;
  }

  nav {
    display: flex;
    gap: 1.2rem;
    align-items: center;

    button {
      border: none;
      border-radius: 6px;
      padding: 0.8rem;

      background-color: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-300']};

      font-size: 1.4rem;
      font-style: regular;
      font-weight: 400;

      height: 100%;

      display: flex;
      align-items: center;
      gap: 4px;

      p span {
        text-transform: uppercase;
      }
    }

    .wrapper {
      background-color: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-300']};

      position: relative;
      padding: 0.7rem 0.9rem;

      border-radius: 6px;

      .quantity {
        background-color: ${(props) => props.theme['yellow-300']};

        border-radius: 100%;
        width: 1.6rem;
        height: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -6px;
        right: -7px;

        span {
          color: ${(props) => props.theme['white-100']};
          font-size: 1.2rem;
          font-style: bold;
          font-weight: 700;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 3.2rem 6rem;
  }

  @media (max-width: 700px) {
    padding: 3.2rem 4rem;
  }

  @media (max-width: 500px) {
    border-bottom: double 8px ${(props) => props.theme['gray-100']};

    nav {
      > button {
        position: absolute;
        top: 8rem;
        left: 3.2rem;

        background: none;

        max-width: 50%;
        height: auto;
      }
    }
  }
`
