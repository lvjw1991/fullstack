import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
	if(persons.filter((person)=>person.name===newName).length>0){
		alert(newName + ' is already added to phonebook')
		return
	}
    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const updatePerson = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={updatePerson} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <ul>
          {persons.map(note => 
            <li key={note.name}>{note.name}</li>
          )}
        </ul>
      </ul>
    </div>
  )
}

export default App