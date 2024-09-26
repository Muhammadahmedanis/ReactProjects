import React, { useState } from 'react'

function Form({itemList, setItemList, setSortList}) {
const[inp, setInp] = useState('');  
const[itemNum, setItemNum] = useState(1);
// const[sortList, setSortList] = useState('');
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
  alert("Are you sure you want to delete all items");
  setItemList([]);
}
  return (
    <div className='flex flex-wrap bg-orange-600 justify-evenly py-4'>
        <h1 className='font-bold text-3xl text-green-700'>Form</h1>
        <div className='flex flex-wrap gap-3 justify-center items-center'>
            <p className='font-semibold text-xl'>what do you need for your trip</p>
            <select value={itemNum} onChange={(e) => setItemNum(e.target.value)} className='bg-orange-300 border-2 border-black px-3 rounded-md'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele, id) => 
                <option key={id}>{ele}</option>
              )}
            </select>
            <input value={inp} onChange={(e) => setInp(e.target.value)} className='bg-orange-300 border-2 border-black px-2 rounded-md text-black' placeholder='item...' type='text'></input>
            <button onClick={addHandler} className='border-2 border-black px-4 rounded-md'>Add</button>
            <button onClick={clrHandler} className='border-2 border-black px-4 rounded-md'>Clear All</button>
            <select onChange={(e) => setSortList(e.target.value)} className='border-2 border-black px-3 rounded-md bg-orange-300'>
              <option>Select</option>
              <option value="alphabaticalOrder">Sort by alphabatical order</option>
              <option value="quantity">Sort by quantity</option>
            </select>
        </div>
    </div>
  )
}

export default Form;