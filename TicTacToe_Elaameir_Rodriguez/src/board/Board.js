import React from 'react';
import './Board.css';
import Tile from '../tile/Tile.js';


export default class Board extends React.Component {
    constructor(props) {
        super(props);

        // Tic Tac Toe board initialization
        let x = 3;
        let y = 3;
        const board = new Array( x * y);

        this.state = {turn: "X", count: 0, board: board, winner: ""};

        // Bind event listener
        this.swapTurn = this.swapTurn.bind(this);
    }
    //tile perameter is a number 0-8
    swapTurn(tile) {
        let newBoard = this.state.board;
        newBoard[tile] = this.state.turn;
        this.checkForWin(this.state.turn);
        //increase turn count
        let curr = this.state.count + 1;
        //mod checks for value remainder (odd or even)
        if (this.state.count % 2 === 1) {
            this.setState({turn: "X", count: curr, board: newBoard});
        }
        else {
            this.setState({turn: "O", count: curr, board: newBoard});
        }
    }

    checkForWin(turn) {

        // Rows 1 - 3
        if ((this.state.board[0] != undefined)
            && this.state.board[0] == this.state.board[1]
            && this.state.board[0] == this.state.board[2]
            && this.state.board[1] == this.state.board[2]) {
            this.setState({winner: turn});
        }

        if ((this.state.board[3] != undefined)
            && this.state.board[3] == this.state.board[4]
            && this.state.board[3] == this.state.board[5]
            && this.state.board[4] == this.state.board[5]) {
            this.setState({winner: turn});
        }


        if ((this.state.board[6] != undefined)
            && this.state.board[6] == this.state.board[7]
            && this.state.board[6] == this.state.board[8]
            && this.state.board[7] == this.state.board[8]) {
            this.setState({winner: turn});
        }


        // Columns 1 - 3

        if ((this.state.board[0] != undefined)
            && this.state.board[0] == this.state.board[3]
            && this.state.board[0] == this.state.board[6]
            && this.state.board[3] == this.state.board[6]) {
            this.setState({winner: turn});
        }

        if ((this.state.board[1] != undefined)
            && this.state.board[1] == this.state.board[4]
            && this.state.board[1] == this.state.board[7]
            && this.state.board[4] == this.state.board[7]) {
            this.setState({winner: turn});
        }


        if ((this.state.board[2] != undefined)
            && this.state.board[2] == this.state.board[5]
            && this.state.board[2] == this.state.board[8]
            && this.state.board[5] == this.state.board[8]) {
            this.setState({winner: turn});
        }

        // Diagonal top left to bottom right

        if ((this.state.board[0] != undefined)
            && this.state.board[0] == this.state.board[4]
            && this.state.board[0] == this.state.board[8]
            && this.state.board[4] == this.state.board[8]) {
            this.setState({winner: turn});
        }
        // Diagonal bottom left to top right
        if ((this.state.board[2] != undefined)
            && this.state.board[2] == this.state.board[4]
            && this.state.board[2] == this.state.board[6]
            && this.state.board[4] == this.state.board[6]) {
            this.setState({winner: turn});
        }
    }

    createTable(x, y) {
        let table = []

        let index  = 0;
        // Outer loop to create rows
        for (let i = 0; i < y; i++) {
            let children = []

            //Inner loop to create tiles
            for (let j = 0; j < x; j++) {
                children.push(<td><Tile index={index} swapTurn={this.swapTurn} turn={this.state.turn}></Tile></td>)
                index++;
            }

            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }

        return table;
    }

    render () {
        return (
            <div class="board">
                <div class="table-squares">
                    <table>
                        {this.createTable(3, 3)}
                    </table>
                </div>
                <p> Winner is: {this.state.winner}</p>
            </div>
        );
    }
}