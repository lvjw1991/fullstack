import React from 'react'

const Header = ({course}) => {
  return (
   <h1>{course.name}</h1>
  )
}

const Part = ({part}) => {
  return (
   <li>{part.name}-{part.exercises}</li>
  )
}

const Content = ({content}) => {
	
const total = content.reduce(
  (accumulator, currentValue) => accumulator + currentValue.exercises,
  0,
);
  return (
  <div>
		<ul>
			{content.map(note => 
				<Part key={note.id} part={note} />
			)}
		</ul>	
		<p>Number of exercises {total}</p>
		</div>
  )
}

const Course = (props) => {

	
  return (
	<div>
	      <Header course={props.course} />
		  <Content content={props.course.parts} />		
	</div>)
}

export default Course