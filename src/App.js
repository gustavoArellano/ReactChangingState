import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }  
    // ***********BELOW, WE ARE BINDING THE HANDLE CLICK TO OUR CLASS CONSTRUCTOR***********
    this.handleClickAdd = this.handleClickAdd.bind(this)
    this.handleClickSubtract = this.handleClickSubtract.bind(this)
  }
  //***********WHENEVER THIS.SETSTATE() IS USED TO CHANGE STATE, YOU MUST BIND IT TO THE CLASS LIKE ABOVE ************/
  handleClickAdd() {
    //***********PREVSTATE BELOW IS A VARIABLE BEING PASSED TO GET THE CURRENT COUNT THAT IS IN STATE, THIS.STATE.COUNT WILL NOT WORK, NEEDS TO BE THROUGH A NEW VARIABLE.***********
    this.setState((stateToAdd) => {
      return {
        count: stateToAdd.count + 1
      }
    })
  }

  handleClickSubtract() {
    this.setState((stateToSubtract) => {
      return {
        count: stateToSubtract.count - 1
      }
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Changing states!</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClickAdd}>ADD</button>
        <button onClick={this.handleClickSubtract}>SUBTRACT</button>
      </div>
    )
  }
}

export default App;
