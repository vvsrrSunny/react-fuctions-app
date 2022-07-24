import './App.css';
import React, { useState } from 'react';
import AppLayout from './components/AppLayout';
import UsersTable from './components/UsersTable';

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: 'Matt',
      title: 'Team Lead',
      email: 'Matt@example.com',
      role: 'Member',
    },
    {
      id: 2,
      name: 'Josh',
      title: 'Senior Front-end Developer',
      email: 'Joush@example.com',
      role: 'Member',
    },
    {
      id: 3,
      name: 'Sunny',
      title: 'Software Developer',
      email: 'sunny@example.com',
      role: 'Member',
    },
    {
      id: 4,
      name: 'Sam',
      title: 'Software Developer',
      email: 'Sam@example.com',
      role: 'Member',
    },
    {
      id: 5,
      name: 'Alex',
      title: 'Software Developer',
      email: 'Alex@example.com',
      role: 'Member',
    },
    {
      id: 6,
      name: 'Ben',
      title: 'Senior Software Developer',
      email: 'Ben@example.com',
      role: 'Member',
    },
  ]);

  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <AppLayout>
        <button  onClick={() => setCount(count + 1)}>Test</button>
        <UsersTable props= {people} data = {count} data1 = {num}></UsersTable>
      </AppLayout>
    </div>
  );
}

export default App;
