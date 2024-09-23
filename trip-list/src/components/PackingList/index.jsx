import React, { useState } from 'react'

function PackingList({itemList, setItemList}) {
  return (
    <div className='bg-amber-700 h-60'>
      {
        itemList.map((item, ind) => (<ItemLists key={ind} item={item} ind={ind} itemList={itemList} setItemList={setItemList} />))
      }  
    </div>
  )
}

const delItem = (id, itemList, setItemList) => {
  const oldList  = itemList.filter((_, ind) => ind != id);
  setItemList(oldList);
}


const ItemLists = ({item, ind, setItemList, itemList}) => {
  const[check, setCheck] = useState(false);
  return(    
    <>
    <ul className='flex justify-center py-2'>
      <div className='flex gap-3 items-center'>
      <hr style={{marginRight: "-85px"}} className='border-t-2 border-white w-12' />
        <input onClick={(e) => setCheck(e.target.checked)} className='h-5 w-9' type="checkbox"/>
        <li key={ind} className={`text-xl text-white font-semibold${check ? 'line-through': ''}`}>{item.itemNum} {item.inpText}</li>
        <button onClick={() => delItem(ind, itemList, setItemList)} className='border-2 border-black px-3 h-auto rounded-md'>X</button>
      </div> 
    </ul>
</>
  )
}

export default PackingList;