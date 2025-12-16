import React from 'react'

const Card = (props) => {
  return (
    <div>
          <a href={props.elem.url} target="_blank" rel="noreferrer">
          <img src={props.elem.download_url} alt="random pics" className='flex justify-center items-center w-70 h-45 m-4 rounded-lg shadow-lg'/>
          <p className='m-4 text-white font-bold  '>Author: {props.elem.author}</p>
          </a>
    </div>
  )
}

export default Card
