let API_KEY="ba3f97349079487a9e5861aaaef29632"
let baseUrl=`https://api.themoviedb.org/3`



// function for Fetching the Movies from Tmdb database

export const fetchMovies=async(type="popular")=>{
    let res=await fetch(`${baseUrl}/movie/${type}?api_key=${API_KEY}`)
    let data=await res.json()
    console.log(data.results)
   return data.results
}



// function for searching the Movies from Tmdb database
const SearchMovies=async()=>{
    return
 }
 