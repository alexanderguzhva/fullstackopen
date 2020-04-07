import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, onClick}) => {
  return (
    <button onClick = {onClick}>{text}</button>
  );
}

const Feedback = (props) => {
  return (
    <div>
      <h1>
        Feedback
      </h1>
      <Button text='good' onClick={props.onGoodClick} />
      <Button text='neutral' onClick={props.onNeutralClick} />
      <Button text='bad' onClick={props.onBadClick} />
    </div>
  );
};

const StatisticsReporter = (props) => {
  return (
    <div>
      <h1>
        Statistics
      </h1>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
  }

  const addBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Feedback onGoodClick={() => addGood()} onNeutralClick={() => addNeutral()} onBadClick={() => addBad()}/>
      <StatisticsReporter bad={bad} neutral={neutral} good={good} />
    </div>
  );
};

ReactDOM.render(<App />, 
  document.getElementById('root')
);