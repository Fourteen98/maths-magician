import { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
function Calculator() {
  const [state, setState] = useState(0);

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.innerText));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">{state.next || state.total}</div>
        <button type="button" className="btn num-pad" onClick={handleClick}>AC</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>+ / -</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>%</button>
        <button type="button" className="btn orange" onClick={handleClick}>÷</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>7</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>8</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>9</button>
        <button type="button" className="btn orange" onClick={handleClick}>x</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>4</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>5</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>6</button>
        <button type="button" className="btn orange" onClick={handleClick}>-</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>1</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>2</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>3</button>
        <button type="button" className="btn orange" onClick={handleClick}>+</button>
        <button type="button" className="btn num-pad num-zero" onClick={handleClick}>0</button>
        <button type="button" className="btn num-pad" onClick={handleClick}>.</button>
        <button type="button" className="btn orange" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
