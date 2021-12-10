import React, { useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/getGifs';

// const arrayOfGifs = [
//   'https://media4.giphy.com/media/l2JhGk8rR9WFLEDQY/giphy.webp?cid=ecf05e47hwugebj9fybnmgoaxq9qpnqv0ldz18lkyk1b9uee&rid=giphy.webp&ct=g',

//   'https://media0.giphy.com/media/l41lFj8afmWIo3yW4/200w.webp?cid=ecf05e47hwugebj9fybnmgoaxq9qpnqv0ldz18lkyk1b9uee&rid=200w.webp&ct=g'
// ]

// const arrayOfGifs2 = [
//   'https://media2.giphy.com/media/3o8dpbfzkgiDrCwbxm/giphy.webp?cid=ecf05e471ya7yloykiuwvrnni8jfut3cwbngeojx54uupjst&rid=giphy.webp&ct=g',

//   'https://media2.giphy.com/media/xTk9ZwzuWiyJ8n5Vzq/200.webp?cid=ecf05e47bze80hu8c5g9a5rvyqfxbgma60zbety8cpy9geuz&rid=200.webp&ct=g'
// ]

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGifs({ keyword: 'horseman' }).then(gifs => setGifs(gifs))
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(gif => {
            return (
            <div key={gif.id}>
              <h4>{gif.title}</h4>
              <img alt={gif.title} src={gif.url} />
            </div>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
