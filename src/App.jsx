import React, { useState } from 'react';
import './app.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counter';

const App = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1 className="page__heading">Increment/Decrement Counter</h1>
        <h4 className="page__sub__heading">Using React & Redux</h4>

        <div className="quanity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decrement())}
          >
            <span>-</span>
          </a>
          <input
            className="quantity__input"
            name="quantity"
            type="text"
            onChange={handleChange}
            value={count}
          ></input>
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(increment())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
