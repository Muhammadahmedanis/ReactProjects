import { useState } from 'react'
import { InputBox } from './components'
import { useCurrencyInfo } from './hooks/useCurrencyInfo'
// import './App.css'

function App() {
  const[amount, setAmount] = useState(0)
  const[from, setFrom] = useState("ued")
  const[to, setTo] = useState("inr")
  const[convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const option = Object.keys(currencyInfo);

  const swap = () => {
    setConvertedAmount(amount)
      setAmount(convertedAmount)
  }

  const convrt = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
    <InputBox />
    </>
  )
}

export default App
