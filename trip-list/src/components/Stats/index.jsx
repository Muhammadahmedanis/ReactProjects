import React from 'react';

function Stats({itemList, checkedItems}) {
  const totalCheckItem = checkedItems.length;
  const percentage = itemList.length ?  Math.round(( totalCheckItem / itemList.length ) * 100) : 0;
  return (
    <div className='flex justify-center items-center gap-6 ps-9 pe-2 py-4 bg-green-400'>
      <h1 className='text-pink-700 text-3xl font-bold'>Stats</h1>
      <p className='font-semibold mt-2 text-amber-700'>
        You have {itemList ? itemList.length : 0} items on your list, and you already packed {totalCheckItem} ({percentage}%);
      </p>
    </div>
  );
}

export default Stats;
