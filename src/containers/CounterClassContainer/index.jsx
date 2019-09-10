import React, { Component } from 'react';

class CounterClassContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, prevProps) => {
      console.log('[Counter Class] - previous state', prevState);
      console.log('[Counter Class] - previous props', prevProps);
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    const { counter } = this.state;
    const { title } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <p>Counter value: {counter}</p>
        <button onClick={this.handleClick}>Add counter</button>
      </div>
    );
  }
}

export default CounterClassContainer;
