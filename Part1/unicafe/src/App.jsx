import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad 
  if (sum === 0) {
    return <div>No feedback given</div>
  }

  return (
    <table>
      <tbody>
        <Display text="Good" value={good} />
        <Display text="Neutral" value={neutral} />
        <Display text="Bad" value={bad} />
        <Display text="All" value={sum} />
        <Display text="Average" value={(good - bad)/sum} />
        <Display text="Positive" value={good/sum} />
      </tbody>
    </table>

  )
}

const Display = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={increaseGood} text="Good" />
      <Button handleClick={increaseNeutral} text="Neutral" />
      <Button handleClick={increaseBad} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App