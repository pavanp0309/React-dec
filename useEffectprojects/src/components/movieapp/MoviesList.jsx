import {useState,useEffect} from 'react'
import { fetchMovies } from '../../api/movieapi/movieapi'

const MoviesList = () => {
    const[movies,setMovies]=useState([])

    //useEffect for avoiding unneccessary api calls
    useEffect(()=>{
     const getMovies=async()=>{
        const data=await fetchMovies()
        setMovies(data)
     }
    // calling the getMovies
    getMovies()

    },[])

  return (
    <div className='container my-2'>
    <h4 className='fs-3 fw-bold text-danger'>Popular</h4>
    <div className='row gy-2'>
     {
        movies.map((movie)=>(
          <div className='col-sm-12 col-md-3 col-lg-3 col-12' key={movie.id}>
         <div class="card shadow" >
            <img src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`} class="card-img-top" alt={movie.title} height={"200px"}/>
            <div class="card-body">
                <h5 class="card-title">{movie?.title}</h5>
                <p class="card-text">⭐{movie?.vote_average}</p>
                <a href="#" class="btn btn-primary">viewdetails</a>
            </div>
            </div>
         </div>

        ))
     }
    </div>
      
    </div>
  )
}

export default MoviesList
