import React from 'react'

function newsCard({title, description, imageUrl, url}) {
  return (
    <a className='news-card-container' href={url}>
      <img src={imageUrl} alt="" />
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

export default newsCard