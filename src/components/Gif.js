import React from "react";
import './Gif.css'

export default function Gif ({ title, id, url }) {
  return (
    <div className='gif-wrapper' key={id} >
      <p>{title}</p>
      <img className='gif-image' alt={title} src={url} />
      <a href={`#${id}`}>Detail</a>
    </div>
  )
}