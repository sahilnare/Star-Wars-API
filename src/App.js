import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    fetch("https://swapi.co/api/starships/11")
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoading: false,
          character: res
        })
      })
  }

  render() {
    const starshipInfo = <div> 
      <h2>Name: {this.state.character.name}</h2>
      <h2>Model: {this.state.character.model}</h2>
    </div>
    const displayText = this.state.isLoading ? "Loading..." : starshipInfo
    return (
      <div className="App">
        <h1>{displayText}</h1>
      </div>
    )
  }
}

export default App;
