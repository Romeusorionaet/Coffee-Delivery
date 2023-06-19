import styled from 'styled-components'

export const PageDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5.6rem;

  margin: 10rem 16rem;

  .wrapper {
    width: 57rem;

    h1 {
      font-size: 4.8rem;
      line-height: 6.2rem;
      font-family: 'Baloo 2', cursive;

      color: ${(props) => props.theme['gray-500']};

      margin-bottom: 1.6rem;
    }

    p {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.6rem;
      font-style: regular;

      color: ${(props) => props.theme['gray-400']};
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4rem;

      margin-top: 7.1rem;

      p {
        font-size: 1.6rem;
        font-style: regular;
        font-weight: 400;

        white-space: nowrap;
      }

      > div {
        display: flex;
        gap: 1.2rem;
        align-items: center;
      }
    }
  }

  .wrapper_img {
    display: flex;
    align-items: center;
    justify-content: end;

    img {
      width: clamp(30rem, calc(47vw + 6rem), 50rem);
    }
  }

  @media (max-width: 1200px) {
    margin: 10rem 6rem;
  }

  @media (max-width: 1000px) {
    position: relative;
    justify-content: center;

    margin: 20rem 6rem 8rem;

    .wrapper {
      padding: 1rem;

      h1 {
        line-height: 4.2rem;
        font-size: clamp(1.8rem, calc(2vw + 1.8rem), 4.8rem);
      }

      p {
        font-size: clamp(1.6rem, calc(2vw - 1rem), 2rem);
      }

      background-image: linear-gradient(
        ${(props) => props.theme['white-200']} 0%,
        transparent
      );
      opacity: 0.9;
    }

    .wrapper_img {
      position: absolute;
      top: -20rem;

      z-index: -1;

      animation: moveUpDown 4s ease-in-out;
    }

    @keyframes moveUpDown {
      0%,
      100% {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(-8rem);
      }
    }
  }
`
