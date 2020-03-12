Welcome = (props) => {
    return <h3>Hello, {props.name}</h3>;
  }
  
  //class OtherWelcome extends React.Component {
   // render()
    //return (<h4>{this.props.name});
  //}
  
  class App extends React.Component {
    
    constructor (props) {
      super(props);
      this.state = {name: "Unknown"}
    }
    
    handleChange = (e) => {
      this.setState({name: e.target.value});
    }
    e
    render() {
    return (
      <div className = "center">
        <form>
        <h1>Demo</h1>
        <h2>{this.props.title}</h2>
        <label for="name"> Enter Your Name </label>&nbsp;&nbsp;
        <input id="name" name="name" type="text" size="80" onChange={this.handleChange}/>
        <Welcome name={this.state.name} />
        </form>
      </div> 
      );
    }
  }
    
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  ); 