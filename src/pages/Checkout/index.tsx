import { MapPinLine } from 'phosphor-react'
import { Aside } from '../../components/Aside'
import { PaymentOptions } from './components/PaymentOptions'

import React, { useContext } from 'react'
import { AddressContext } from '../../contexts/AddressFormContext'

import { CheckoutContainer, HeaderForm, InputsContainer } from './styles'

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

  function fillCityByZipCode(cep: string): void {
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
      fillCityByZipCode(cep)
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
            name="CEP"
            onBlur={handleBlur}
            placeholder="CEP"
            onChange={(e) => setCep(Number(e.target.value))}
          />
          <input
            type="text"
            name="street"
            placeholder="Rua"
            onChange={(e) => setStreet(e.target.value)}
          />

          <div>
            <input
              type="number"
              name="number"
              maxLength={10}
              placeholder="Número"
              onChange={(e) => setNumber(Number(e.target.value))}
            />
            <input
              type="text"
              name="complement"
              maxLength={30}
              placeholder="Complemento: opcional"
              onChange={(e) => setComplement(e.target.value)}
            />
            <input
              type="text"
              name="neighborhood"
              maxLength={30}
              placeholder="Bairro"
              onChange={(e) => setNeighborhood(e.target.value)}
            />
            <input
              type="text"
              name="city"
              value={city}
              maxLength={30}
              placeholder="Cidade"
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              name="UF"
              maxLength={2}
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
