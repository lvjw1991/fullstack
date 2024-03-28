import { useState } from 'react'

const Display = (props) => {
const numArr=props.points
const textArr=props.anecdotes
let index=0;
let count=0;
for(let i=0;i<numArr.length;i++){
	if(numArr[i]>count){
		index=i;
		count=numArr[i];
	}
}
if(count>0){
return (
<div>
<h1>anecdote with most votes</h1>
<p>   {textArr[index]}</p>
    </div>
  )
}
  return (
<div>
    </div>
  )
}

const Button = (props) => {
  return (
<div>
    <button onClick={props.onClick}>
      {props.text}
    </button>
</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])



function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 包含最小值和最大值
}

const chooseSelected = () => {
	  setSelected(getRandomIntInclusive(0,anecdotes.length-1))
  }

const vote = () => {
const copy = [...points]
copy[selected] += 1
setPoints(copy)
  }

  return (
    <div>
<h1>anecdote of the day</h1>
   <p>   {anecdotes[selected]}</p>
<button onClick={vote}>vote</button>
<Button onClick={chooseSelected} text='next anecdote'/>
<Display points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App