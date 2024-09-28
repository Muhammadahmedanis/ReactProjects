import React from 'react'
function Box(){
    return (
        <div className='flex flex-wrap gap-2'>
        <div className='m-2 h-32 w-28 text-center rounded border-2 border-black'>
          <p className='font-bold'>Monday</p>
          <img className='w-16 m-auto' src="https://png.pngtree.com/png-vector/20190418/ourmid/pngtree-vector-sun-icon-png-image_949988.jpg" alt="" />
          <p className='font-extrabold text-xl'>33 <sup>o</sup></p>
        </div>
        <div className='m-2 h-32 w-28 text-center rounded border-2 border-black'>
          <p className='font-bold'>Monday</p>
          <img className='w-16 m-auto' src="https://png.pngtree.com/png-vector/20190418/ourmid/pngtree-vector-sun-icon-png-image_949988.jpg" alt="" />
          <p className='font-extrabold text-xl'>33 <sup>o</sup></p>
        </div>
      </div>   
    )
}
export default Box;