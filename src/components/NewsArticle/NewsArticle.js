import React from 'react'
import './NewsArticle.css'

function NewsArticle({ author, title, description, url, urlToImage, publishedAt, content }) {
    return (
        <div className='news-artical-cards' >
            <img src={urlToImage} alt="" className='news-artical-img' />
            <h2 className='article-title'>{title}</h2>
            <div className='article-info'>
                <p className='article-author '>
                    {author}
                </p>
                
            </div>
            
        </div>
    )
}

export default NewsArticle
