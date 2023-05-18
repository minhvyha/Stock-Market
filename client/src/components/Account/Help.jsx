import React from 'react'
import { helpContent } from '../../constant'
import { nanoid } from 'nanoid'
function Help() {
  let helpList = helpContent.contents.map(content =>{
    return (
      <div key={nanoid()} className='help-content-wrapper'>
        <div className='help-content-title'>{content.title}</div>
        <div className='help-content-description'>{content.content}</div>
      </div>
    )
  })
  return (
    <div className='help-container'>
      <div className='help-title'>{helpContent.title}</div>
      <div className='help-subtitle'>{helpContent.subtitle}</div>
      <div className='help-content'>{helpList}</div>
      <div className='help-note'>{helpContent.note}</div>
      

    </div>
  )
}

export default Help