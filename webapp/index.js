import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.scss'

class Index extends React.Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(r => r.json())
      .then(todos => this.setState({ todos }))
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

ReactDOM.render(<Index />, document.getElementById('index'))
