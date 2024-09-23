import React from 'react'

function Stats() {
  return (
    <div className='flex items-center gap-6 ps-9 py-4 bg-green-400'>
        <h1 className='text-pink-700 text-3xl font-bold'>Stats</h1>
        <p className='font-semibold mt-2 text-amber-700'>You have 6 items on your list, and you already packed 0 (0%)</p>
    </div>
  )
}

export default Stats;