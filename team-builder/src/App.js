import React, { useState } from 'react';
import InputForm from './components/Form';
import MemberCard from './components/Card';
import './App.css';

function App() {
  const [groupList, setGroupList] = useState([{ name: "", email: "", role: "" }]);
  function addPersonToList(person) {
    console.log(person)
    console.log(groupList)
    const newGroupList = groupList.concat(person);
    console.log(newGroupList)
    setGroupList(newGroupList);
  }
    
  return (
      <div className='App'>
        <InputForm setList={addPersonToList} />
      <div className='cards'>
        {groupList.map(person => <MemberCard key={person.email} person={person} />)}
      </div>
      </div>
  );
}

export default App;
