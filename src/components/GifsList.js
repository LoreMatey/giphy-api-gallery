import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

export default function GifsList ({ keyword }) {
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGifs({ keyword })
    .then(gifs => setGifs(gifs))
  }, [keyword])

  return gifs.map(gif => 
    <Gif 
      id={gif.id}
      key={gif.id}
      title={gif.title}
      url={gif.url}
    />
  )
}