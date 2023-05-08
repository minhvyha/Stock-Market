import React from 'react'
import './PortfolioData.css'

function PortfolioData({name, amount}) {
  return (
    <div className='portfolio-data-container'>
      <div className='data-name'>{name}</div>
      <div className='data-amount'>{amount}</div>
    </div>
  )
}

export default PortfolioData