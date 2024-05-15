import React from 'react'

const Course = (props) => {
const coorseArray=props.course.parts
let count=0;
for(let i=0;i<coorseArray.length;i++){
	count+=coorseArray[i].exercises;
}
	
  return (
	<div>
		<h1>{props.course.name}</h1>
		<ul>
			{props.course.parts.map(note => 
			  <li key={note.id}>
				{note.name}-{note.exercises}
			  </li>
			)}
		</ul>	
		<p>Number of exercises {count}</p>		
	</div>)
}

export default Course