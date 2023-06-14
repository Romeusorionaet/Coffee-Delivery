import { MapPinLine } from 'phosphor-react'
import { Aside } from '../../components/Aside'
import { PaymentOptions } from './components/PaymentOptions'
import { CheckoutContainer, HeaderForm, InputsContainer } from './styles'
import React, { useState } from 'react'

export function Checkout() {
  const [cidade, setCidade] = useState('')

  function preencherCidadePorCEP(cep: string): void {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if ('erro' in data) {
          console.log('CEP inválido')
        } else {
          setCidade(data.localidade)
        }
      })
      .catch((error) => {
        console.log('Erro ao buscar o CEP:', error)
      })
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>): void {
    const cep = event.target.value.replace(/\D/g, '')
    if (cep.length === 8) {
      preencherCidadePorCEP(cep)
    }
  }

  return (
    <CheckoutContainer>
      <form>
        <h1>Complete seu pedido</h1>
        <HeaderForm>
          <MapPinLine size={22} />
          <div>
            <h2>Endereço de Entrega</h2>
            <p>informe o endereço onde deseja receber seu pedido</p>
          </div>
        </HeaderForm>

        <InputsContainer>
          <input type="number" onBlur={handleBlur} placeholder="CEP" />
          <input type="name" placeholder="Rua" />

          <div>
            <input type="number" placeholder="Número" />
            <input type="name" placeholder="Complemento: opcional" />
            <input type="name" placeholder="Bairro" />
            <input type="name" value={cidade} placeholder="Cidade" />
            <input type="name" placeholder="UF" />
          </div>
        </InputsContainer>
      </form>
      <PaymentOptions />

      <Aside />
    </CheckoutContainer>
  )
}
