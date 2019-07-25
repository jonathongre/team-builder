import React, { useState } from 'react';
import InputForm from './components/Form';
import MemberCard from './components/Card';
import { Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [groupList, setGroupList] = useState([{ id: 0, firstName: "Jonathon", lastName: "Green", email: "jonathongre@gmail.com", role: "Student" }]);
    
  function addPersonToList(person) {
    setGroupList([...groupList, {...person, id: Date.now()}]);
  };
    
    const editPerson = editedPerson => {
        const peopleCopy = [...groupList];
        const personIndex = peopleCopy.findIndex(person => person.id === editedPerson.id);
        peopleCopy[0] = editedPerson;
        setGroupList(peopleCopy);
  };
    
  return (
      <div className='App'>
      <Link to="/">Home</Link>
      <Link to="/add">Add Person</Link>
        <Route path="/add"
             render={props => <InputForm {...props}
                                    submitPerson={addPersonToList}
                                    buttonText="Add Person"
                              />}/>
      <Route exact path="/"
             render={props => groupList.map(person => <MemberCard person={person} />)}/>
      <Route path="/edit/:id"
             render={props => {
               const person = groupList.find(person => person.id.toString() === props.match.params.id);
               return <InputForm {...props}
                            initialPerson={person}
                            submitPerson={editPerson}
                            buttonText="Edit Person"
                      />;
             }}/>
    </div>
  );
}

export default App;
