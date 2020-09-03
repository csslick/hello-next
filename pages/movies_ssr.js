import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import Head from "next/head";
import Layout from "../components/Layout";
import Router from 'next/router';

const Movies = ({movies}) => {
  // state
  // const [movie, setmovie] = useState([])
  const [searchQuery, setSearchQuery] = useState('star wars')
  const [loading, setLoading] = useState(false)
  const searchQuery2 = 'star wars'

  // fetch movie - 함수는 마운트 될때 실행됨
  const api_key = '224502cedb2aea2828098f3724fd0b0c';
  const movieList = 'https://api.themoviedb.org/4/list/3?page=1&api_key=224502cedb2aea2828098f3724fd0b0c'
  const imgUrl = 'https://image.tmdb.org/t/p/w300'
  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchQuery2}&api_key=224502cedb2aea2828098f3724fd0b0c`
  const trandUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`

  useEffect(() => {
    // showMovie();

  }, []) 

  const showMovie = () => {
    return (
      // <p>
      //   { JSON.stringify(movies) }
      //     { console.log(movies) }
      // </p>
      movies.map((item, i) => {
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

  const handleTextChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log('submit')
    e.preventDefault();
    Router.push(`./movies_ssr/?searchTerm=${searchQuery}`)
  }

  const searchForm = () => {
    return (
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleTextChange} />
      <button>Search</button>
    </form>
    )
  }
  
  return (
    <Layout title="Movies">
      <div>
        <h2>List of Movies</h2>
        <hr/>
        { searchForm() }
        <hr/>
        { showMovie() }
      </div>
    </Layout>
  )
}


// SSR(콘텐츠를 Server Side Rendering)
Movies.getInitialProps = async ({query}) => {
  let movies;
  const api_key = '224502cedb2aea2828098f3724fd0b0c';
  const trandUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${query.searchTerm}&api_key=${api_key}`
  let movie_url = trandUrl;
  
  // 검색(query) 요청이 없으면 기본 데이터 출력
  if(query.searchTerm) {
    movie_url = searchUrl;
  } else {
    movie_url = trandUrl;
  }

  await fetch(movie_url)
    .then(res => res.json())
    .then(data => {
      movies = data;
      console.log(movies)
    })
    .catch(err => {
      console.log(err)
      movies = []
    })

  return { 
    movies: movies.results
  }
}

export default Movies;