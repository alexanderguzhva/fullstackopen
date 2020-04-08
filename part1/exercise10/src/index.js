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
      <Button text='good' onClick={props.onGoodClick} />
      <Button text='neutral' onClick={props.onNeutralClick} />
      <Button text='bad' onClick={props.onBadClick} />
    </div>
  );
};

const Statistic = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  );
};

const PercentageStatistic = ({text, value}) => {
  return (
    <p>{text} {value*100}%</p>
  );
};


const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  
  if (all === 0) {
    return (
      <p>No statistics has been gathered yet</p>
    );
  }
  else {
    return (
      <div>
        <Statistic text="Good" value={props.good} />
        <Statistic text="Neutral" value={props.neutral} />
        <Statistic text="Bad" value={props.bad} />
        <Statistic text="All" value={all} />
        <Statistic text="Average" value={(props.good - props.bad) / all} />
        <PercentageStatistic text="Positive" value={props.good / all} />
      </div>
    );
  }
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
      <h1>
        Feedback
      </h1>
      <Feedback onGoodClick={() => addGood()} onNeutralClick={() => addNeutral()} onBadClick={() => addBad()}/>

      <h1>
          Statistics
      </h1>
      <Statistics bad={bad} neutral={neutral} good={good} />
    </div>
  );
};

ReactDOM.render(<App />, 
  document.getElementById('root')
);