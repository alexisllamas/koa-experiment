import React from "react"
import ReactDOM from "react-dom"

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch('/api/todos').then(r => r.json()).then(todos => this.setState({todos}))
  }
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        {this.state.todos.map(todo => <div>{todo}</div>)}
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById("index"))
