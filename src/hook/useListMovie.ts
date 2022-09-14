import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL, HttpMethod } from "../constants"

const useListMovie = () => {
  const [moveList, setMovieList] = useState<IMovieListResponseData[]>([])
  const [loadingList, setLoadingList] = useState<boolean>(false)
  const [movieListParam, setListParam] = useState<IMovieListParam>({
    page:1,
    api_key: process.env.REACT_APP_API_KEY,
    language: "en"
  })

  const fetchMovieList = async() => {
    setLoadingList(true)
    try {
      const res = await axios({
        url:API_URL.list_movies,
        method:HttpMethod.GET,
        params: movieListParam
      })
      setMovieList(res.data.results)
    } catch (e) {
      console.log(e)
    } finally {
      setLoadingList(false)
    }
  }
  
  useEffect(()=>{
    fetchMovieList()
  },[movieListParam])

  return {
    moveList,
    loadingList,
  } 
}

export default useListMovie