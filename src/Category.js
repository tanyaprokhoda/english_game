import React, { Component } from 'react';
import './App.css';
import Dispatcher from './Dispatcher';
import Store from './stores/Store';

export default class Category extends React.Component {
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

    render () {
        return <div>
                    <button type="button" onClick={() => this.handleChangePage('game')} className="btn item btn-danger">{'Food game'}</button>
                    <button type="button" onClick={() => this.handleChangePage('game')} className="btn item btn-danger">{'Food game'}</button>
                    <button type="button" onClick={() => this.handleChangePage('game')} className="btn item btn-danger">{'Food game'}</button>
                    <button type="button" onClick={() => this.handleChangePage('game')} className="btn item btn-danger">{'Food game'}</button>
                    <button type="button" onClick={() => this.handleChangePage('game')} className="btn item btn-danger">{'Food game'}</button>
                </div>
    }
 }
