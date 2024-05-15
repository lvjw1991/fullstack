import { useState } from 'react'

const Statistics = (props) => {
    // ...
	if (props.total === 0) {
	    return (
	<div>
	<p>no feedback given</p>
	</div>
	  )
	  }
	return (
	<div>
	 <p>good is {props.good}</p>
	 <p> neutral is {props.neutral}</p>
	  <p>bad is {props.bad}</p>
	 <p> total is {props.total}</p>
	  <p>average is {props.average}</p>
	 <p> positive is {props.positive} %</p>
	</div>
	  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
} 
  
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const chooseGood = () => {
	  const updateGood=good+1
	  setGood(updateGood)
	  //setGood((good) => good + 1)
	  const updateTotal=updateGood+neutral+bad
	  setTotal(updateTotal)
	  setAverage(updateGood*1+bad*(-1))
	  setPositive(updateGood/updateTotal*100)
  }
  
  const chooseNeutral = () => {
	  const updateNeutral=neutral+1
	  setNeutral(updateNeutral)
	  //setNeutral((neutral) => neutral + 1)
	  const updateTotal=good+updateNeutral+bad
	  setTotal(updateTotal)
	  setAverage(good*1+bad*(-1))
	  setPositive(good/updateTotal*100)
  }
  
  const chooseBad = () => {
	  const updateBad=bad+1
	  setBad(updateBad)
	  //setBad((bad) => bad + 1)
	  const updateTotal=good+neutral+updateBad
	  setTotal(updateTotal)
	  setAverage(good*1+updateBad*(-1))
	  setPositive(good/updateTotal*100)
  }
  

  return (
    <div>
      <h1>give feedback</h1>
	    <Button onClick={chooseGood} text='good'/>
		<Button onClick={chooseNeutral} text='neutral'/>
		<Button onClick={chooseBad} text='bad'/>
	 <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App