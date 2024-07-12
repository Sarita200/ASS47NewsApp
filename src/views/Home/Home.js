import React, {useEffect,useState }  from 'react'
import './Home.css'
import axios from "axios"

function Home() {
    const[news,setNews] = useState([])

    const loadNews = async ()=>{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-07-10&to=2024-07-10&sortBy=popularity&apiKey=5f7108985bba4756b28c3119e306ba28`);

        setNews(response.data.articles)
    }
    useEffect(() => {
        loadNews()
    } , [])

  return (
    <div>
      <h1>News App</h1>

      {
        news.map((newsArticle, index) =>{
    
            const {author ,title, description, url, urlToImage ,publishedAt, content} = newsArticle

            return(
                <>
                <div className='news-artical-cards' >
                    <img src={urlToImage} alt="" className='news-artical-img'/>
                    <h3>{title}</h3>
                </div>
                </>
            )
            
            }  )
      }
      
    </div>
  )
}

export default Home
