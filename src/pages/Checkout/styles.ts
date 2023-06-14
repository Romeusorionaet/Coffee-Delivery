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
    width: 64rem;
    background-color: ${(props) => props.theme['white-300']};

    h1 {
      background-color: ${(props) => props.theme['white-200']};
      color: ${(props) => props.theme['gray-400']};

      font-size: 1.8rem;
      font-weight: bold;

      padding-bottom: 1.5rem;
    }
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

    border: none;
    border-radius: 4px;

    background-color: ${(props) => props.theme['white-400']};
    color: ${(props) => props.theme['gray-300']};

    line-height: 1.8rem;
    font-size: 1.4rem;
    font-style: regular;
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
    width: 20rem;
  }

  > input:nth-child(2) {
    width: 56rem;
  }

  div {
    display: grid;
    gap: 1.2rem;
    grid-template-areas:
      'A B B'
      'C D E';

    input:nth-child(1) {
      grid-area: A;
      width: 20rem;
    }

    input:nth-child(2) {
      width: 34.8rem;
      grid-area: B;
    }

    input:nth-child(3) {
      grid-area: C;
      width: 20rem;
    }

    input:nth-child(4) {
      width: 27.6rem;
      grid-area: D;
    }

    input:nth-child(5) {
      width: 6rem;
      grid-area: E;
    }
  }
`
