import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [kwd, setKwd] = useState('')
  const [results, setResults] = useState([])
  
  const addPerson = (event) => {
    event.preventDefault()
	if(persons.filter((person)=>person.name===newName).length>0){
		alert(newName + ' is already added to phonebook')
		return
	}
    const personObject = {
      name: newName,
	  num: newNum
    }

    setPersons(persons.concat(personObject))
    setNewName('')
	setNewNum('')
  }

  const updateName = (event) => {
    setNewName(event.target.value)
  }
  
  const updateNum = (event) => {
    setNewNum(event.target.value)
  }
  
  const updatekwd = (event) => {
    setKwd(event.target.value)
  }
  
  const search = () => {
	  setResults(persons.filter((el) => el.name.toLowerCase().includes(kwd.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
	  <div>
          kwd: <input value={kwd} onChange={updatekwd} />
		  <button onClick={search}>
		search
        </button>
        </div>
		<h2>results</h2>
      <ul>
        <ul>
          {results.map(note => 
            <li key={note.num}>{note.name}-{note.num}</li>
          )}
        </ul>
      </ul>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={updateName} />
        </div>
		<div>
          num: <input value={newNum} onChange={updateNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <ul>
          {persons.map(note => 
            <li key={note.num}>{note.name}-{note.num}</li>
          )}
        </ul>
      </ul>
    </div>
  )
}

export default App