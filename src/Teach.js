import React, { Component } from 'react';
import './App.css';
import Dispatcher from './Dispatcher';
import Store from './stores/Store';

export default class Teach extends React.Component {
    constructor() {
        super();
        this.state = {
            data: Store.getData(),
            teach_value: 0
        }
    }
    componentDidMount() {
        Store.bind(this, 'incrementedTeach');
    }
    componentWillUnmount() {
        Store.unbind(this, 'incrementedTeach');
    }
    incrementedTeach() {
        this.setState({
            teach_value: Store.getTeachValue()
        })
    }

    handleClick() {
        Dispatcher.dispatch({
            eventName: 'increment_teach'
        });
    }

    render () {
        if(this.state.teach_value < this.state.data.length){
            const item = this.state.data[this.state.teach_value];
            return <div>
                        <button className="button_style" onClick={() => this.handleClick()}>{item.words[item.correct]}</button>
                        <h3>{item.translate}</h3>
                        <h3>{item.transcription}</h3>
                        <img src={this.state.data[this.state.teach_value].img} width={'200px'} />
                    </div>
         }else {
             return <h1>The end!</h1>
         }
    }
 }
