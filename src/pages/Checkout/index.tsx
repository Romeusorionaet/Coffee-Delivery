import { MapPinLine } from 'phosphor-react'
import { Aside } from '../../components/Aside'
import { PaymentOptions } from './components/PaymentOptions'
import { CheckoutContainer, HeaderForm, InputsContainer } from './styles'
import React, { useContext } from 'react'
import { AddressContext } from '../../contexts/AddressFormContext'

export function Checkout() {
  const {
    setCep,
    setCity,
    setComplement,
    setNeighborhood,
    setNumber,
    setStreet,
    setUf,
    city,
  } = useContext(AddressContext)

  function preencherCidadePorCEP(cep: string): void {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if ('erro' in data) {
          console.log('CEP inválido')
        } else {
          setCity(data.localidade)
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
          <input
            type="number"
            onBlur={handleBlur}
            placeholder="CEP"
            onChange={(e) => setCep(Number(e.target.value))}
          />
          <input
            type="name"
            placeholder="Rua"
            onChange={(e) => setStreet(e.target.value)}
          />

          <div>
            <input
              type="number"
              placeholder="Número"
              onChange={(e) => setNumber(Number(e.target.value))}
            />
            <input
              type="name"
              placeholder="Complemento: opcional"
              onChange={(e) => setComplement(e.target.value)}
            />
            <input
              type="name"
              placeholder="Bairro"
              onChange={(e) => setNeighborhood(e.target.value)}
            />
            <input
              type="name"
              value={city}
              placeholder="Cidade"
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="name"
              placeholder="UF"
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
        </InputsContainer>
      </form>

      <PaymentOptions />
      <Aside />
    </CheckoutContainer>
  )
}
