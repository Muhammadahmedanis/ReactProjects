import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import AmountBox from './components/AmountBox'
import History from './components/History'

function App() {
  const[amount, setAmount] = useState('');
  const[expenseCateg, setExpenseCateg] = useState('');
  const[type, setType] = useState('income');
  const[transaction, setTransaction] = useState([]);
  const[changeBtn, setChangeBtn] = useState(false);
  const[ids, setIds] = useState(-1);

  return (
    <>
    <h1 className='text-3xl font-extrabold text-center my-2'>EXPENSE TRACKER</h1>

    <AmountBox transaction={transaction} setAmount={setAmount} setType={setType} />

    <Form amount={amount} setAmount={setAmount} type={type} setType={setType} transaction={transaction} setTransaction={setTransaction} expenseCateg={expenseCateg} setExpenseCateg={setExpenseCateg} changeBtn={changeBtn} ids={ids} setChangeBtn={setChangeBtn} />

    { ids >= 0 && <p className="text-2xl font-extrabold rounded my-2">History</p>}
    <History transaction={transaction} setAmount={setAmount} setType={setType} setExpenseCateg={setExpenseCateg} setChangeBtn={setChangeBtn} setTransaction={setTransaction} changeBtn={changeBtn} setIds={setIds} />
    </>
  )
}

export default App
