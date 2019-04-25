import React, { Component } from 'react';
import './App.css';
import Item from "./components/Item";
import Store from './stores/Store';

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            data: Store.getData(),
        }
    }
    componentDidMount() {
        Store.bind(this, 'incremented');
    }
    componentWillUnmount() {
        Store.unbind(this, 'incremented');
    }
    incremented() {
        this.setState({
            value: Store.getValue()
        })
    }

    render () {
        if(this.state.value < this.state.data.length){
            return <div>
                <Item item={this.state.data[this.state.value]}/>
                <img src={this.state.data[this.state.value].img} className="eat_pic_game" />
               <p className="score"> Score: {this.state.value * 3} </p>
            </div>
        }else {
            return <h1>The end! Your score: {this.state.value * 3} From: {this.state.value * 3}</h1>
        }
    }
 }
