import React, { Component } from 'react';
import './App.css';
import english_game from './english_game.png';
class App extends Component {
render () {
  return <div>
    <img 
        src={english_game} className="english_game"
    
      />
 <button type="button" class="btn margin btn-danger">ГЛАВНАЯ СТРАНИЦА</button>
 <button type="button" class="btn margin2 btn-danger">ИГРА</button>
 <button type="button" class="btn margin2 btn-danger">ЛИЧНАЯ КОМНАТА</button>
 <button type="button" class="btn margin2 btn-danger">ЧАТ</button>
</div>
  }
}

export default App;