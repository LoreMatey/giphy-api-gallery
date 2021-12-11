import React from "react";

export default function Gif ({ title, id, url }) {
  return (
    <div key={id}>
      <h4>{title}</h4>
      <img alt={title} src={url} />
    </div>
  )
}