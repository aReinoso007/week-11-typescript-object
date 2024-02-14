import React from 'react';
import './App.css';
import { Person } from './models/Person.model';
import ProfileComponent from './components/PersonComponent';
import Card from 'react-bootstrap/Card';
function App() {

  const student: Person = {
    name: 'John',
    age: 25,
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <ProfileComponent person={student} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
