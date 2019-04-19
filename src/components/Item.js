var React = require('react');
var Dispatcher = require('./../Dispatcher');
var Store = require('./../stores/Store');

export default class Item extends React.Component {
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

    handleClick(value) {
        if(this.props.item.correct === value){
            Dispatcher.dispatch({
                eventName: 'increment'
            });
        }
    }

    render() {
        const words = this.props.item.words || [];
        return <div className='options'>
            {words.map((value, index) => <button key={index} onClick={() => this.handleClick(index)}>{value}</button>)}
        </div>;

    }
}
