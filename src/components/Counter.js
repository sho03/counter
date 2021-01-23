import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from '../actions/actions';

class Counter extends React.Component {

  increment = () => {
    this.props.dispatch({ type: INCREMENT });
  }

  decrement = () => {
    this.props.dispatch({ type: DECREMENT });
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}
//export default Counter;
export default connect(mapStateToProps)(Counter);