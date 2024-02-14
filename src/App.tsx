import './App.css';
import { Person, ProfileProps } from './models/Person.model';
import ProfileComponent from './components/PersonComponent';
import Card from 'react-bootstrap/Card';
import Status from './components/Status';
import Header from './components/Header';
import NestedComponent from './components/NestedComponent';
function App() {

  const student: Person = {
    name: 'John',
    age: 25,
  }
  const profileData: ProfileProps = {
    person: student,
    message: 'This is a message from the parent component.'
  }

  const handleClick = () => {
    console.log('Button clicked');
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <ProfileComponent {...profileData}/>
        </Card.Body>
      </Card>
      <Header>Hey there buddy</Header>
      <NestedComponent>
          <h3>This is a children component</h3>
          <Status status='loading'/>
      </NestedComponent>
      <button onClick={handleClick}>Hello event</button>
    </div>
  );
}

export default App;
