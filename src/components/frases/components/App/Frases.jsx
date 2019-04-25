import React, { Component } from 'react';
import Cards from '../Cards';
import './style.scss'

const DATA_URL = './Phrases.json';

class Frases extends Component {
  state = {
    cards: []
  }

  getData = async() => { //Получаем данные из JSON
    const data = await fetch(DATA_URL);
    let cards = await data.json();

    cards.map((elem) => { //Считаем количество слов строке
      elem.length = elem.sourceText.split(" ").length;
      return elem;
    })

    this.setState({
      cards
    })
  }

  componentDidMount = () => {
    this.getData();
  }

  render() {
    let date = new Date;
    let day = date.getDate(); // Получаем число и месяц
    let month = date.toLocaleString('en-us', { month: 'long' });

    return (
      <>
        <div className="header-container">
          <div className="date">
            <h2>{day}</h2>
            <p>{month}</p>
          </div>
            <h1 className="header-line">Изучаем фразы</h1>
        </div>
        <Cards data={this.state.cards}/>
      </>
    );
  }
}

export default Frases;
