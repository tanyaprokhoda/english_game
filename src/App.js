import React, { Component } from 'react';
import './App.css';
const data = [
      {
        img: 'pic/apple.png',
        words:['chicken', 'water', 'apple', 'cheese', 'eggs', 'milk', 'tea'],
      correct: 2
      },
    {
      img: 'pic/cheese.png',
      words:['water', 'cheese', 'apple', 'carrot', 'cucumber', 'potato', 'rice'],
      correct: 1
      },
      {
        img: 'pic/pineapple.png',
        words:['banana', 'blackberry', 'blueberry', 'cherry', 'lemon', 'orange', 'pineapple'],
      correct: 6
      },
      {
        img: 'pic/bread.png',
        words:['bread', 'cabbage', 'candy', 'fish', 'lemon', 'orange', 'meat'],
      correct: 0
      },
    {
      img: 'pic/orange.png',
      words:['banana', 'blackberry', 'mushroom', 'cherry', 'lemon', 'orange', 'pineapple'],
      correct: 5
      },
      {
        img: 'pic/banana.png',
        words:['banana', 'melon', 'blueberry', 'mushroom', 'lemon', 'orange', 'pineapple'],
      correct: 0
      },
    {
      img: 'pic/potato.png',
      words:['banana', 'nut', 'peach', 'pepper', 'lemon', 'potato', 'pineapple'],
      correct: 5
      },
    {
      img: 'pic/lemon.png',
      words:['chocolate', 'apricot', 'tea', 'cherry', 'lemon', 'orange', 'pineapple'],
      correct: 4
      },
      {
        img: 'pic/tomato.png',
        words:['banana', 'tomato', 'blueberry', 'cherry', 'lemon', 'orange', 'pineapple'],
      correct: 1
      },
    {
      img: 'pic/pear.png',
      words:['banana', 'blackberry', 'blueberry', 'pear', 'lemon', 'orange', 'pineapple'],
      correct: 3
      },
      {
        img: 'pic/meat.png',
        words:['banana', 'blackberry', 'meat', 'cherry', 'lemon', 'orange', 'pineapple'],
      correct: 2
      },
      {
        img: 'pic/mushroom.png',
        words:['banana', 'mushroom', 'blueberry', 'cherry', 'plum', 'pie', 'pineapple'],
      correct: 1
      },
 ]
 export default class Game extends Component {
render () {
  return (
     data.map((obj) => <img className="pic" src={obj.img}/>)
  )
    }
 }
