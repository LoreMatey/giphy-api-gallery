import React, { useState } from 'react';
import './App.css';

const arrayOfGifs = [
  'https://media4.giphy.com/media/l2JhGk8rR9WFLEDQY/giphy.webp?cid=ecf05e47hwugebj9fybnmgoaxq9qpnqv0ldz18lkyk1b9uee&rid=giphy.webp&ct=g',

  'https://media0.giphy.com/media/l41lFj8afmWIo3yW4/200w.webp?cid=ecf05e47hwugebj9fybnmgoaxq9qpnqv0ldz18lkyk1b9uee&rid=200w.webp&ct=g'
]

function App() {
  const [gifs, setGifs] = useState(arrayOfGifs)
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(gif => 
            <img src={gif} />)
        }
        
      </section>
    </div>
  );
}

export default App;
