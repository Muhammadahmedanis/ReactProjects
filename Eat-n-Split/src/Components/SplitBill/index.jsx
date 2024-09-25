import React from 'react'

function SplitBill({friends, selectFriend}) {
  // friends.map((frName) => frName.name === selectFriend.name)
  
  
  return (
    <>
    {selectFriend &&
      <div className='w-96 h-auto bg-orange-200 rounded'> 
      <div className='py-2 px-4'>
        <h1 className='text-xl text-center my-2 font-extrabold'>SPLIT A BILL WITH {selectFriend.name}</h1>
        <div className='flex justify-between my-3'>
          <p className='font-semibold'>&#128176; Bill value</p>
          <input className='rounded p-1 w-36' type="text" />
        </div>
        <div className='flex justify-between my-3'>
          <p className='font-semibold'>&#129485; Your expense</p>
          <input className='rounded p-1 w-36' type="text" />
        </div>
        <div className='flex justify-between my-3'>
          <p className='font-semibold'>&#x1F46B; Josef's expense</p>
          <input className='rounded p-1 w-36' type="text" />
        </div>
        <div className='flex justify-between my-3'>
          <p className='font-semibold'> &#128578; Who is paying the bill?</p>
          <select className='rounded p-1 w-36' name="" id="">
            <option value="">You</option>
            <option value="">Josef</option>
          </select>
        </div>
        <div>
            <button type="button" className="float-right inline-flex items-center px-9 py-2 my-3 text-sm font-medium text-center text-black bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-orange-600"> Split bill </button>
        </div>
      </div>
      </div>
    }
    </>
  )
}

export default SplitBill;