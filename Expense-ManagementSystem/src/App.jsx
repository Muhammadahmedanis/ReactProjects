import { } from 'react'
import Form from './components/Form'
import './App.css'
import AmountBox from './components/AmountBox'
import History from './components/History'

function App() {

  return (
    <>
    <h1 className='text-3xl font-extrabold text-center my-2'>EXPENSE TRACKER</h1>

    <AmountBox />

    <Form />

    <History />
    </>
  )
}

export default App
