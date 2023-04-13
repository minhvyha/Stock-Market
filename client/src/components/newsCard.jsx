import React from 'react'
import './NewsCard.css'

function NewsCard({title, description, imageUrl, url, alt}) {
  return (
    <a className='news-card-container' href={url}>
      <img className='news-card-image' src={imageUrl} alt={alt} />
      <div className='news-card-content'>
        <div className='news-card-title'>
          {title}
        </div>
        <div className='news-card-description'>
          {description}
        </div>
      </div>
    </a>
  )
}

export default NewsCard