import { useState } from 'react'

const Filter = (props) => {
	const persons=props.persons
	const [kwd, setKwd] = useState('')
  const [results, setResults] = useState([])
  
  const updatekwd = (event) => {
    setKwd(event.target.value)
  }
  
  const search = () => {
	  setResults(persons.filter((el) => el.name.toLowerCase().includes(kwd.toLowerCase())))
  }
  
  return (
<div>
    <div>
          kwd: <input value={kwd} onChange={updatekwd} />
		 <button onClick={search}>
		search
        </button>
        </div>
		<h2>results</h2>
        <ul>
          {results.map(note => 
            <li key={note.id}>{note.name},{note.number}</li>
          )}
        </ul>
</div>
  )
}

const PersonForm = (props) => {  
const newName=props.newName
const newNum=props.newNum
  return (
<div>
    <form onSubmit={props.onSubmit}>
        <div>
          name: <input value={newName} onChange={props.updateName} />
        </div>
		<div>
          num: <input value={newNum} onChange={props.updateNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
</div>
  )
}

const Persons = (props) => {
	const persons=props.persons
  return (
<div>
    <ul>
          {persons.map(note => 
            <li key={note.id}>{note.name},{note.number}</li>
          )}
        </ul>
</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const updateName = (event) => {
    setNewName(event.target.value)
  }
  
  const updateNum = (event) => {
    setNewNum(event.target.value)
  }
  
  const addPerson = (event) => {
    event.preventDefault()
	if(persons.filter((person)=>person.name===newName).length>0){
		alert(newName + ' is already added to phonebook')
		return
	}
    const personObject = {
      name: newName,
	  number: newNum,
	  id: persons.length+1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
	setNewNum('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
	  <Filter persons={persons}/>
	  <PersonForm newName={newName} newNum={newNum} onSubmit={addPerson} updateName={updateName} updateNum={updateNum}/>
      <h2>Numbers</h2>
	  <Persons persons={persons} />
    </div>
  )
}

export default App