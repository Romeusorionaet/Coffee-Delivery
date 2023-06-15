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
`
