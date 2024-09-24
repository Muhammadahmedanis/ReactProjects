import {useState} from 'react';

function PackingList({itemList, setItemList, CheckedItems, setCheckedItems}) {
  const handleCheck = (isCheck, ind) => {
    if(isCheck){
      setCheckedItems((prev) => [...prev, ind]);
    } else {
      setCheckedItems((prev) => prev.filter((ele) => ele != ind))
    }
  }

  return (
    <div className='bg-amber-700 min-h-60 flex gap-2 flex-wrap justify-center'>{ itemList.map((item, ind) => 
        <ItemLists 
          handleCheck={handleCheck} 
          key={ind} 
          item={item} 
          ind={ind} 
          itemList={itemList} 
          setItemList={setItemList} 
        />) }
    </div>
  );
}

const delHandler = (id, itemList, setItemList) =>{
  const oldList =  itemList.filter((_, ind) => ind != id);
  setItemList(oldList);
}

const ItemLists = ({item, ind, itemList, setItemList, handleCheck}) => {
  const[check, setCheck] = useState(false)
  const handleCheckBox = (e) => {
    const isCheck = e.target.checked;
    setCheck(isCheck);
    handleCheck(isCheck, ind);
  }

  return (
    <ul className='py-2'>
      <div className='flex gap-2 items-center'>
        <input 
          className='h-5 w-9' 
          type='checkbox' 
          onChange={handleCheckBox}
        />
        <li key={ind} className={`text-xl text-white font-semibold ${check ? 'line-through' : ''}`}>{item.itemNum} {item.inp}</li>
        <button onClick={() => delHandler(ind, itemList, setItemList)} className='border-2 border-black px-3 h-auto rounded-md'>
          X
        </button>
      </div>
    </ul>
  );
};

export default PackingList;
