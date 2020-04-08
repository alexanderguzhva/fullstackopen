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

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  
  if (all === 0) {
    return (
      <p>No statistics has been gathered yet</p>
    );
  }
  else {
    return (
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{props.good}</td>                   
          </tr>
          <tr>          
            <td>Neutral</td>                   
            <td>{props.neutral}</td>                   
          </tr>
          <tr>          
            <td>Bad</td>                   
            <td>{props.bad}</td>                   
          </tr>
          <tr>          
            <td>All</td>                   
            <td>{all}</td>                   
          </tr>
          <tr>          
            <td>Average</td>                   
            <td>{(props.good - props.bad) / all}</td>                   
          </tr>
          <tr>          
            <td>Positive</td>                   
            <td>{100*(props.good / all)}%</td>                   
          </tr>
        </tbody>
      </table>
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