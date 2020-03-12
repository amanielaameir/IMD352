import React from 'react';
import './Tile.css';

export default class Tile extends React.Component {
    constructor(props) {
       // calling the super constructor
        super(props);
        this.state = {value: ""};

        // Bind "this" to event listener
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //given function used to update the state
        this.setState({value: this.props.turn});
        this.props.swapTurn(this.props.index);
    }

    //creates tile
    render() {
        return (
            <button
                className="tile"
                //onclick calls to handleclick function
                onClick={this.handleClick}>

                {this.state.value}
            </button>
        );
    }
}
