import React from 'react'

function AddFriend() {
  return (
    <div className=''>
        <div className='flex gap-3 justify-between'>
            <label className='font-bold' htmlFor=""> &#x1F46B; Friends Name</label>
            <input className='rounded px-1' type="text" />
        </div>
        <div className='flex gap-3 my-2 justify-between'>
            <label className='font-bold' htmlFor="">Image URL</label>
            <input className='rounded px-1' type="text" />
        </div>
        <div className='float-end'>
            <button type="button" className="inline-flex items-center px-20 py-2 my-1 text-sm font-medium text-center text-black bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-orange-600"> Add </button>
        </div>
        
    </div>
  )
}

export default AddFriend;