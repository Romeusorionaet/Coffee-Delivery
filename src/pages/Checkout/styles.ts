import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 1.2rem;
  grid-template-areas:
    'FORM ASIDE'
    'PAYMENT ASIDE';

  padding: 7.2rem 16rem;

  form {
    grid-area: FORM;

    border-radius: 40px;

    color: ${(props) => props.theme['white-500']};
    max-width: 64rem;
    background-color: ${(props) => props.theme['white-300']};

    h1 {
      background-color: ${(props) => props.theme['white-200']};
      color: ${(props) => props.theme['gray-400']};

      font-size: 1.8rem;
      font-weight: bold;

      padding-bottom: 1.5rem;
    }
  }

  @media (max-width: 1400px) {
    padding: 7.2rem 6rem;
  }

  @media (max-width: 1200px) {
    justify-content: center;
    gap: 4rem;

    grid-template-areas:
      'FORM'
      'PAYMENT'
      'ASIDE';
  }

  @media (max-width: 700px) {
    grid-auto-columns: 90%;

    padding: 4.2rem 0.5rem;
  }
`

export const HeaderForm = styled.div`
  display: flex;
  gap: 1.1rem;

  margin: 4rem 4rem 3.2rem;

  svg {
    color: ${(props) => props.theme['yellow-300']};
  }

  div {
    h2,
    p {
      font-weight: 400;
      font-style: regular;
      line-height: 1.8rem;
    }

    h2 {
      font-size: 1.6rem;
      color: ${(props) => props.theme['gray-400']};
      margin-bottom: 4px;
    }

    p {
      font-size: 1.4rem;
      color: ${(props) => props.theme['gray-300']};
    }
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding: 0 4rem 4rem;

  input {
    height: 4.2rem;
    padding: 1.2rem;

    border: solid 1px transparent;
    border-radius: 4px;

    background-color: ${(props) => props.theme['white-400']};
    color: ${(props) => props.theme['gray-300']};

    line-height: 1.8rem;
    font-size: 1.4rem;
    font-style: regular;
  }

  input:focus {
    border: solid 1px ${(props) => props.theme['yellow-200']};
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${(props) => props.theme['gray-200']};
  }

  > input:first-child {
    max-width: 20rem;
  }

  > input:nth-child(2) {
    max-width: 56rem;
  }

  div {
    display: grid;
    gap: 1.2rem;
    grid-template-areas:
      'A B B'
      'C D E';

    input:nth-child(1) {
      grid-area: A;
      max-width: 20rem;
    }

    input:nth-child(2) {
      max-width: 34.8rem;
      grid-area: B;
    }

    input:nth-child(3) {
      grid-area: C;
      max-width: 20rem;
    }

    input:nth-child(4) {
      max-width: 27.6rem;
      grid-area: D;
    }

    input:nth-child(5) {
      max-width: 6rem;
      grid-area: E;
    }
  }

  @media (max-width: 700px) {
    input {
      width: 100%;
      font-size: 1.2rem;
    }
  }
`
