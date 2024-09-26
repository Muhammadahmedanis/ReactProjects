import React, { useState } from 'react'

function SplitBill({friends, setFriends, selectFriend}) {
  const[bill, setBill] = useState(0);
  const[myExpense, setMyExpense] = useState(0);
  const[friendExpense, setFriendExpense] = useState(0);
  const[billPay, setBillPay] = useState("You");

  const billSplitHandler = () => {
    const updFriends = friends.map(val =>{
      if(val.name === selectFriend.name){
        return {...val, payment: friendExpense, amountTake: billPay, myExpen: myExpense}
      }
      return val;
    })
    setFriends(updFriends);

    setBill('');
    setMyExpense('');
    setFriendExpense('');
    setBillPay("You");
  }
  const myExpenseHandler = (e) => {
    const myExpense = e.target.value;
    setMyExpense(myExpense);
    let friendAmount = bill - myExpense;
    setFriendExpense(friendAmount >= 0 ? friendAmount : 0);
  }
  
  return (
    <>
    {selectFriend &&
      <div className='w-96 h-auto mx-2 mb-2 bg-orange-200 rounded'> 
      <div className='py-2 px-4'>
        <h1 className='text-xl text-center my-2 font-extrabold'>SPLIT A BILL WITH {selectFriend.name.toUpperCase()}</h1>
        <div className='flex justify-between my-3'>
          <p className='font-semibold'>&#128176; Bill value</p>
          <input value={bill} onChange={(e) => setBill(e.target.value)} className='rounded p-1 w-36' type="number" />
        </div>
        <div className='flex justify-between my-3'>
          <p className='font-semibold'>&#129485; Your expense</p>
          <input value={myExpense} onChange={myExpenseHandler} className='rounded p-1 w-36' type="number" />
        </div>
        <div className='flex justify-between my-3'>
          <p className='font-semibold'>&#x1F46B; {selectFriend.name}'s expense</p>
          <input value={friendExpense} readOnly className='rounded p-1 w-36' type="number" />
        </div>
        <div className='flex justify-between my-3'>
          <p className='font-semibold'> &#128578; Who is paying the bill?</p>
          <select value={billPay} onChange={(e) => setBillPay(e.target.value)} className='rounded p-1 w-36'>
            <option value="You">You</option>
            <option value={selectFriend.name}>{selectFriend.name}</option>
          </select>
        </div>
        <div>
            <button onClick={billSplitHandler} type="button" className="float-right inline-flex items-center px-9 py-2 my-3 text-sm font-medium text-center text-black bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-orange-600"> Split bill </button>
        </div>
      </div>
      </div>
    }
    </>
  )
}

export default SplitBill;