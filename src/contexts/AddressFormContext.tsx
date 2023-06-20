import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { CoffeeOfContext, CoffeeProps } from './CoffeeDeliveryContext'
import { useNavigate } from 'react-router-dom'

interface AddressFormContextProviderProps {
  children: ReactNode
}

export interface AddressFormProps {
  cep: number
  street: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  uf: string
  payment: string
  orderCoffee: CoffeeProps[]
}

interface AddressFormContextType {
  handleDataForm: () => void
  setCep: React.Dispatch<React.SetStateAction<number>>
  setStreet: React.Dispatch<React.SetStateAction<string>>
  setNumber: React.Dispatch<React.SetStateAction<number>>
  setComplement: React.Dispatch<React.SetStateAction<string>>
  setNeighborhood: React.Dispatch<React.SetStateAction<string>>
  setCity: React.Dispatch<React.SetStateAction<string>>
  setUf: React.Dispatch<React.SetStateAction<string>>
  setPayment: React.Dispatch<React.SetStateAction<string>>
  city: string
  uf: string
  street: string
}

export const AddressContext = createContext({} as AddressFormContextType)

export function AddressFormContext({
  children,
}: AddressFormContextProviderProps) {
  const [cep, setCep] = useState(0)
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState(0)
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [payment, setPayment] = useState('')

  const [dataForm, setDataForm] = useState<AddressFormProps[]>([]) // dataForm returns an object that is the final result of the user's request

  const { orderCoffee, autoCleanCart } = useContext(CoffeeOfContext)

  const navigate = useNavigate()

  function handleDataForm() {
    if (
      !cep ||
      !street ||
      !number ||
      !neighborhood ||
      !city ||
      !uf ||
      !payment ||
      orderCoffee.length === 0
    ) {
      alert('Informe todos os dados necessário!')
    } else {
      setDataForm([
        {
          cep,
          street,
          number,
          complement,
          neighborhood,
          city,
          uf,
          payment,
          orderCoffee,
        },
      ])
      autoCleanCart()
      navigate('/Success')
    }
  }

  useEffect(() => {
    if (dataForm.length !== 0) {
      localStorage.setItem(
        '@coffeeDeliveryFormUser-1.0',
        JSON.stringify(dataForm),
      )
    }
  }, [dataForm])

  return (
    <AddressContext.Provider
      value={{
        handleDataForm,
        setCep,
        setStreet,
        setNumber,
        setComplement,
        setNeighborhood,
        setCity,
        setUf,
        setPayment,
        city,
        uf,
        street,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
