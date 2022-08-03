import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="screen"> 0</div>
          <button type="button" className="btn num-pad">AC</button>
          <button type="button" className="btn num-pad">+ / -</button>
          <button type="button" className="btn num-pad">%</button>
          <button type="button" className="btn orange">÷</button>
          <button type="button" className="btn num-pad">7</button>
          <button type="button" className="btn num-pad">8</button>
          <button type="button" className="btn num-pad">9</button>
          <button type="button" className="btn orange">x</button>
          <button type="button" className="btn num-pad">4</button>
          <button type="button" className="btn num-pad">5</button>
          <button type="button" className="btn num-pad">6</button>
          <button type="button" className="btn orange">-</button>
          <button type="button" className="btn num-pad">1</button>
          <button type="button" className="btn num-pad">2</button>
          <button type="button" className="btn num-pad">3</button>
          <button type="button" className="btn orange">+</button>
          <button type="button" className="btn num-pad num-zero">0</button>
          <button type="button" className="btn num-pad">.</button>
          <button type="button" className="btn orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
