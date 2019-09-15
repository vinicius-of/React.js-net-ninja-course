import React, {Component} from 'react';
import Ninjas from './Ninjas'
import NinjaForm from './AddNinja'


class App extends Component{

  state = {
    ninjas: [
      {name: 'Ryu', age: 30, belt: 'Black', id: 0},
      {name: 'Yoshi', age: 20, belt: 'Green', id: 1},
      {name: 'Luigi', age: 50, belt: 'Pink', id: 2}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((element) => {
      return element.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }

  render(){
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome! :)</p>
        <Ninjas list = {this.state.ninjas} deleteNinja = {this.deleteNinja}/>
        <NinjaForm addNinja = {this.addNinja} />
      </div>
    );
  }
}

export default App;
