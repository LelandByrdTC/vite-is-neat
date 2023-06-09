import React, { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChildComponent from './components/childComponent'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      believe: false,
      musicians: ["Louis Armstrong", "Miles Davis", "Duke Ellington", "Charlie Parker", "John Coltrane", "Ella Fitzgerald"]
    }
    this.setCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }))
    }
    this.setBelieve = () => {
      this.setState((prevState) => ({
        believe: !prevState.believe
      }))
    }
  }
  render() {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <ChildComponent message="This iS the CHILDRENS"
          belief={this.state.believe.toString()}
        />
        <h1>Jazz Musicians</h1>
        <ul>
          {this.state.musicians.map((person, id) => {
            return <li key={id + person}>{person}</li>
          })}
        </ul>
        <div className="card">
          <button onClick={() => this.setCount((sum) => sum - 1)}>
            count is {this.state.count}
          </button>
          <button onClick={() =>
            this.setBelieve(!this.state.believe)
          }>
            believe is {this.state.believe ? "true" : "false"}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }

}

export default App
