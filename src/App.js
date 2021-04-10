import { useState } from 'react';
import './App.css';
import { Login } from './componetns/Login/';
import { Contacts } from './componetns/Contacts/';

function App() {
  const [user, setUser] = useState({ login: false });
  const [formData, setFormData] = useState({});

  const handaleChangeInputs = (value, propertyName) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [propertyName]: value,
      };
    });
  };

  const sumbitForm = () => {
    
  };

  return (
    <div className='App'>
      {user.login ? <Contacts /> : <Login change={handaleChangeInputs} />}
    </div>
  );
}

export default App;
