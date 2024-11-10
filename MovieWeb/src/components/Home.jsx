import React, { useEffect } from 'react'
import MovieListing from './MovieListing';
import movieApi from '../common/api/movieApi';
import { useDispatch } from 'react-redux';
import { addMovies } from '../features/movieSlice';

function Home() {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async() => {
      const response = await movieApi.get(`${movieText}&type=movie`)
      .catch((err) => {
        console.log(err);
      })
      dispatch(addMovies(response.data));
    }
    fetchMovies();
  }, [])

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home