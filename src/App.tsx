import './App.css';
import { Person, ProfileProps } from './models/Person.model';
import ProfileComponent from './components/PersonComponent';
import Card from 'react-bootstrap/Card';
import Status from './components/Status';
import Header from './components/Header';
function App() {

  const student: Person = {
    name: 'John',
    age: 25,
  }
  const profileData: ProfileProps = {
    person: student,
    message: 'This is a message from the parent component.'
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <ProfileComponent {...profileData}/>
          <Status status='loading'/>
        </Card.Body>
      </Card>
      <Header> Hola bebe</Header>
    </div>
  );
}

export default App;
