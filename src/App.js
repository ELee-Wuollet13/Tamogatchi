import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from './components/Video.jsx'
import YouTube from 'react-youtube';
import { Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import GifPlayer from 'react-gif-player';
import scream from './components/Predator/scream.gif'
// with JSX
function App() {




  return (
    <div className="App">
      <header className="App-header">
 <h2> TaMAGoTCHI!?!?!?!</h2>
    <Video/>
    <GifPlayer gif={scream} still={scream} />




      </header>

    </div>
  );
}

export default App;
