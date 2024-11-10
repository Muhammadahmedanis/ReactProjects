import React from 'react'

function MovieCard({data}) {
  return (
    <div className='w-[300px] carditem bg-[#6785a4] cursor-pointer'>
        <div className='top h-[300px] w-[300px]'>
          <img className='h-full w-full' src={data.Poster} alt="" />
        </div>
        <div className='cardbottom p-3 text-center'>
          <div className='info text-[#ffffff]'>
            <h4 className='text-xl font-semibold mb-2'>{data.Title}</h4>
            <p>{data.Years}</p>
          </div>
        </div>
    </div>
  )
}

export default MovieCard