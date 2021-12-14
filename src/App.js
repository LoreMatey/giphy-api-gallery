import React from 'react';
import './App.css';
import GifsList from './components/GifsList';
import { Link, Route } from 'wouter';

function App() {
  // const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        <h1>Welcome to your gallery of gifs</h1>
        <div className='links-wrapper'>
          <Link className='links' to='/gif/panda'>Panda gifs</Link>
          <Link to='/gif/penguin'>Penguin gifs</Link>
          <Link to='/gif/horseman'>Bojack Horseman gifs</Link>
        </div>
        
      {/* <button onClick={() => setKeyword('penguin')}>Change keyword</button> */}
        <Route 
          component={GifsList}
          path='/gif/:keyword' 
        />
      </section>
    </div>
  )
}

export default App;
