import ReactTicTacToe from ‘react’;

export default ClassComponent extends React.Component {

    constructor (props) {
        super(props);
        this.state = {name: ‘Sammy’};
    }

    render() {
        return <div>The name {this.state.name} stored as a state</div>;
    }
}
