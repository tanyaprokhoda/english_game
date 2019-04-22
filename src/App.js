import React, { Component } from 'react';
import './App.css';
import Item from "./components/Item";
import Store from './stores/Store';
const data = [
      {
        img: 'images/apple.png',
        words:['chicken', 'water', 'apple', 'cheese', 'eggs', 'milk', 'tea'],
        correct: 2
      },
      {
        img: 'images/cheese.png',
        words:['water', 'cheese', 'apple', 'carrot', 'cucumber', 'potato', 'rice'],
        correct: 1
      },
      {
        img: 'images/pineapple.png',
        words:['banana', 'blackberry', 'blueberry', 'cherry', 'lemon', 'orange', 'pineapple'],
        correct: 6
      },
      {
        img: 'images/bread.png',
        words:['bread', 'cabbage', 'candy', 'fish', 'lemon', 'orange', 'meat'],
        correct: 0
      },
      {
        img: 'images/orange.png',
        words:['banana', 'blackberry', 'mushroom', 'cherry', 'lemon', 'orange', 'pineapple'],
        correct: 5
      },
      {
        img: 'images/banana.png',
        words:['banana', 'melon', 'blueberry', 'mushroom', 'lemon', 'orange', 'pineapple'],
        correct: 0
      },
      {
        img: 'images/potato.png',
        words:['banana', 'nut', 'peach', 'pepper', 'lemon', 'potato', 'pineapple'],
        correct: 5
      },
      {
        img: 'images/lemon.png',
        words:['chocolate', 'apricot', 'tea', 'cherry', 'lemon', 'orange', 'pineapple'],
        correct: 4
      },
      {
        img: 'images/tomato.png',
        words:['banana', 'tomato', 'blueberry', 'cherry', 'lemon', 'orange', 'pineapple'],
      correct: 1
      },
      {
        img: 'images/pear.png',
        words:['banana', 'blackberry', 'blueberry', 'pear', 'lemon', 'orange', 'pineapple'],
        correct: 3
      },
      {
        img: 'images/meat.png',
        words:['banana', 'blackberry', 'meat', 'cherry', 'lemon', 'orange', 'pineapple'],
        correct: 2
      },
      {
        img: 'images/mushroom.png',
        words:['banana', 'mushroom', 'blueberry', 'cherry', 'plum', 'pie', 'pineapple'],
        correct: 1
      },
 ];
export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
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
        if(this.state.value < data.length){
            return <div>
                <Item item={data[this.state.value]}/>
                <img src={data[this.state.value].img} width={'200px'} />
                
            </div>
        }else {
            return <h1>The end!</h1>
        }
    }
 }
