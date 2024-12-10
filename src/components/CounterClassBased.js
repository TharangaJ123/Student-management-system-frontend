import React from "react"

class CounterClass extends React.Component{

  //create a constructor
  constructor(){
    super();
    this.increment = this.increment.bind(this)
    this.state = {
      number : 0
    }
  }

  increment(){
    this.setState({
      number : ++this.state.number
    })
  }

  render(){
    return(
      <div>
        <h2>01 . Class Based Approach</h2>
        <h1>Counter = {this.state.number}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }

}
export default CounterClass