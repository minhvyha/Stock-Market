import React from 'react'
import './NewsCard.css'

function NewsCard({title, description, imageUrl, url, alt, time}) {
  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }
  console.log(imageUrl)
  return (
    <a className='news-card-container' href={url}>
      <img className='news-card-image' src={imageUrl} alt={alt} />
        <div className='news-card-title'>
          {title}
        </div>
        <div className='news-card-description'>
          {description}
        </div>
        <div className='news-card-source'>
          {alt}
        </div>
        <div className='news-card-time'>
          {formatDate(time)}
        </div>
    </a>
  )
}

export default NewsCard