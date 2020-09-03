import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import Head from "next/head";
import Layout from "../components/Layout";

const Movies = ({Movies}) => {
  // state
  const [movie, setmovie] = useState([])
  const [searchQuery, setSearchQuery] = useState('star wars')
  const [loading, setLoading] = useState(false)
  const searchQuery2 = 'star wars'

  // fetch movie - 함수는 마운트 될때 실행됨
  const api_key = '224502cedb2aea2828098f3724fd0b0c';
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=224502cedb2aea2828098f3724fd0b0c';
  const movieList = 'https://api.themoviedb.org/4/list/3?page=1&api_key=224502cedb2aea2828098f3724fd0b0c'
  const imgUrl = 'https://image.tmdb.org/t/p/w300'
  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchQuery2}&api_key=224502cedb2aea2828098f3724fd0b0c`
  const url2 = 'http://hn.algolia.com/api/v1/search?query=react'
  const trandUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`

  useEffect(() => {
    fetchMovie();

  }, []) 

  const fetchMovie = () => {
    // set loading false
    setLoading(true)

    fetch(trandUrl)
      .then(res => res.json())
      .then(data => {
        setmovie(data.results)
        setLoading(false)
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  const showMovie = () => {
    return (
      // <p>
      //   { JSON.stringify(movie)}
      // </p>
      movie.map((item, i) => {
        return (
          <div key={i}>
            <p>{i}. {item.original_title}</p>
            <img src={imgUrl+item.poster_path} alt={item.poster_path} />
            <p>{i}. {item.overview}</p>
          </div>
        )
      })
    )
  }
  
  return (
    <Layout title="Movies">
      <div>
        <h2>List of Movies</h2>
        { showMovie() }
      </div>
    </Layout>
  )
}

export default Movies;