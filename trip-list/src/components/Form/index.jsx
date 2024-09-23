import React, { useState } from 'react'

function Form({itemList, setItemList}) {
  const[inpText, setInpText] = useState("");
  const[itemNum, setItemNum] = useState(1);

  const addHandler = () => {
    const oldItem = [...itemList];
    oldItem.push({
      inpText, 
      itemNum,
    })
    setItemList(oldItem);
    setInpText('');
    setItemNum(1);
  }


  return (
    <div className='flex bg-orange-600 justify-evenly py-4'>
        <h1 className='font-bold text-3xl text-green-700'>Form</h1>
        <div className='flex gap-3 justify-center'>
            <p className='font-semibold text-xl'>what do you need for your trip</p>
            <select onChange={(e) => setItemNum(e.target.value)} className='border-2 border-black px-3 rounded-md'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele, id) => (
                <option key={id}>{ele}</option>
                ))}
            </select>
            <input onChange={(e) => setInpText(e.target.value)} value={inpText} className='bg-orange-300 border-2 border-black px-2 rounded-md text-black' placeholder='item...' type='text'></input>
            <button onClick={addHandler} className='border-2 border-black px-4 rounded-md'>Add</button>
            <button className='border-2 border-black px-4 rounded-md'>Clear All</button>
        </div>
    </div>
  )
}

export default Form;