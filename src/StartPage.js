import React, { Component } from 'react';
import './App.css';
import english_game from './images/english_game.png';
import App from "./App";
class StartPage extends Component {
    getContent () {
        const currentPage = 'game';
        if(currentPage === 'game'){
            return <App/>
        }
    }
    render () {
            return <div>
                <img src={english_game} className="english_game" />
                <button type="button" class="btn margin btn-danger">ГЛАВНАЯ СТРАНИЦА</button>
                <button type="button" class="btn margin2 btn-danger">ИГРА</button>
                <button type="button" class="btn margin2 btn-danger">ЛИЧНАЯ КОМНАТА</button>
                <button type="button" class="btn margin2 btn-danger">ЧАТ</button>
                <div className='content'>
                    {this.getContent()}
                </div>
            </div>
    }
}

export default StartPage;
