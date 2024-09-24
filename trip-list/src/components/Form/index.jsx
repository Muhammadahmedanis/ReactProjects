import React, { useState } from 'react'

function Form({itemList, setItemList}) {
const[inp, setInp] = useState('');  
const[itemNum, setItemNum] = useState(1);
const addHandler = () => {
  let oldItem = [...itemList];
  oldItem.push({
    inp,
    itemNum,
  })
  setItemList(oldItem);
  setInp('');
  setItemNum(1);
}

const clrHandler = () => {
  setItemList([]);
}
  return (
    <div className='flex bg-orange-600 justify-evenly py-4'>
        <h1 className='font-bold text-3xl text-green-700'>Form</h1>
        <div className='flex gap-3 justify-center'>
            <p className='font-semibold text-xl'>what do you need for your trip</p>
            <select value={itemNum} onChange={(e) => setItemNum(e.target.value)} className='border-2 border-black px-3 rounded-md'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele, id) => 
                <option key={id}>{ele}</option>
              )}
            </select>
            <input value={inp} onChange={(e) => setInp(e.target.value)} className='bg-orange-300 border-2 border-black px-2 rounded-md text-black' placeholder='item...' type='text'></input>
            <button onClick={addHandler} className='border-2 border-black px-4 rounded-md'>Add</button>
            <button onClick={clrHandler} className='border-2 border-black px-4 rounded-md'>Clear All</button>
        </div>
    </div>
  )
}

export default Form;