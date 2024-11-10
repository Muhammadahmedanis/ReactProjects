import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../features/movieSlice';
import MovieCard from '../components/MovieCard';

function MovieListing() {
  const movies = useSelector(getAllMovies);
  // console.log(movies);
  return (
    <div className='wrapper '>
      <div className='list m-5'>
        <h2 className='text-[#79b8f3] mb-2 font-semibold'>Movies</h2>
        <div className='container flex flex-wrap gap-1 justify-evenly'>
          {
            movies?.Search?.map((val, ind) => {
              return <MovieCard key={ind} data={val} />
            })
          }
      </div>
    </div>
    </div>
  )
}

export default MovieListing