import React from 'react'

const Course = (props) => {
const total = props.course.parts.reduce(
  (accumulator, currentValue) => accumulator + currentValue.exercises,
  0,
);
	
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
		<p>Number of exercises {total}</p>		
	</div>)
}

export default Course