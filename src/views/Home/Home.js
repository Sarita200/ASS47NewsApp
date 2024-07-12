import React, { useEffect, useState } from 'react'
import './Home.css'
import NewsArticle from '../../components/NewsArticle/NewsArticle'
import axios from "axios"
import LogoImg from "./img/search.png"

function Home() {
  const [news, setNews] = useState([])
  const [searchQuery , setSearchQuery] = useState("pune");

  const loadNews = async () => {
    try{
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-07-10&to=2024-07-10&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);

    setNews(response.data.articles)
    }
    catch(error){
      console.error()
    };

  }
  useEffect(() => {
    loadNews()
  }, [])

  useEffect(() =>{
    loadNews()
  },[searchQuery])

  return (
    <div>
      <h1 className='title-heading'>News App</h1>
      <div className='search-main-container'>
        <div>
        <input
      type='text'
      value={searchQuery}
      onChange={(e) =>{
      setSearchQuery(e.target.value)
      }}
      className='search-box'
      />
        </div>
        <div className='img-div'>
        <img src={LogoImg} className='search-img'/>
        </div>
      </div>

      <div className='news-container'> 
        {
          news.map((newsArticle, index) => {

            const { author, title, description, url, urlToImage, publishedAt, content } = newsArticle

            return (
              <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content} key={index} />
            )

          })
        }
      </div>

    </div>
  )
}

export default Home
