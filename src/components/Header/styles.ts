import styled from 'styled-components'

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 16rem;

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

      display: flex;
      align-items: center;
      gap: 4px;
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
`
