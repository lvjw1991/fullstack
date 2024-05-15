import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
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
		<button onClick={chooseGood}>
		good
        </button>
		<button onClick={chooseNeutral}>
		neutral
        </button>
		<button onClick={chooseBad} >
		bad
        </button>
	  <h1>statistics</h1>
	  good is {good}
	  <br/>
	  neutral is {neutral}
	  <br/>
	  bad is {bad}
	  <br/>
	  total is {total}
	  <br/>
	  average is {average}
	  <br/>
	  positive is {positive} %
    </div>
  )
}

export default App