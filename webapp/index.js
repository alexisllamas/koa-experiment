import { createTextVNode, render, Component } from 'inferno'

import './styles/index.scss'

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div>
        <h1>Header!</h1>
        <span $HasVNodeChildren>{createTextVNode('Counter is at: ' + this.state.counter)}</span>
      </div>
    );
  }
}

render(
  <MyComponent />,
  document.getElementById("app")
)
