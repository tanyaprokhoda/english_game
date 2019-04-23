import React, { Component } from 'react';
import './App.css';
import english_game from './images/english_game.png';
import bird_hello from './images/bird_hello.png';
import Game from "./Game";
import Store from './stores/Store';
import Teach from "./Teach";
import Category from "./Category";
var Dispatcher = require('./Dispatcher');
const pages = [
    {
        name: 'ГЛАВНАЯ СТРАНИЦА',
        route: 'home'
    },
    {
        name: 'ОБУЧЕНИЕ',
        route: 'teach'
    },
    {
        name: 'КАТЕГОРИИ',
        route: 'category'
    },
    {
        name: 'ЛИЧНАЯ КОМНАТА',
        route: 'profile'
    },
    {
        name: 'ЧАТ',
        route: 'chat'
    },
];
export default class StartPage extends React.Component  {
    constructor() {
        super();
        this.state = {
            page: 'home'
        }
    }
    componentDidMount() {
        Store.bind(this, 'changePage');
    }
    componentWillUnmount() {
        Store.unbind(this, 'changePage');
    }
    changePage() {
        this.setState({
            page: Store.getPage()
        })
    }

    handleChangePage(route) {
        Dispatcher.dispatch({
            eventName: 'updatePage',
            route: route
        });
    }

    getContent (currentPage) {
        let page = '';
        switch (currentPage) {
            case "home": page = <div className="margin_bird"><img src={bird_hello} className="bird_hello"></img></div>; break;
            case "game": page = <Game/>; break;
            case "teach": page = <Teach/>; break;
            case "category": page = <Category/>; break;
            case "profile": page = <div>This is profile</div>; break;
        }
        return page;
    }
    render () {
            return <div>
                <img src={english_game} className="english_game" />
                <div className="margin_menu_buttons">
                    {pages.map((item, index) => <button
                        key={index}
                        type="button"
                        onClick={() => this.handleChangePage(item.route)}
                        className="btn item btn-danger">{item.name}</button>)}
                </div>
                <div className='content'>
                    {this.getContent(this.state.page)}
                </div>
            </div>
    }
}
