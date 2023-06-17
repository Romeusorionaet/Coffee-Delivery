import styled from 'styled-components'

export const SucessContainer = styled.div`
  margin: 8rem 16rem;

  .text {
    h1 {
      color: ${(props) => props.theme['yellow-300']};

      font-family: 'Baloo 2', cursive;
      font-size: 3.2rem;
      line-height: 4.2rem;

      margin-bottom: 0.4rem;
    }

    p {
      color: ${(props) => props.theme['gray-400']};

      font-size: 2rem;
      font-style: regular;
    }
  }
`

export const SectionDescription = styled.section`
  margin-top: 4rem;

  > div {
    display: flex;
    justify-content: space-between;
  }

  .background {
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme['yellow-300']},
      ${(props) => props.theme['purple-300']}
    );
    border-radius: 10px 40px 10px 40px;

    width: 52.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    background: ${(props) => props.theme['white-100']};

    border: 4px solid transparent;
    border-radius: 10px 40px 10px 40px;

    height: 98%;
    width: 98%;

    padding: 4.5rem 4rem;

    display: flex;
    flex-direction: column;
    gap: 3.7rem;

    div {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      width: 38rem;

      p {
        font-size: 1.6rem;
        line-height: 2rem;
        color: ${(props) => props.theme['gray-300']};
      }
    }
  }
`
