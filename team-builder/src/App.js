import React, { useState } from 'react';
import InputForm from './components/Form';
import './App.css';

function App() {
    const [group, setGroup] = useState([]);
    console.log(group)
    const groupHandler = (member) => {
        console.log(group);
        return setGroup([...group, member])
    }
    
  return (
      <div className='App'>
        <InputForm addMember={member => groupHandler(member)}/>
      </div>
  );
}

export default App;
