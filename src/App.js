import { useState } from 'react';
import './App.css';
import { Login } from './componetns/Login/';
import { Contacts } from './componetns/Contacts/';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/users',
});

function App() {
  const [user, setUser] = useState({ login: false });
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handaleChangeInputs = (value, propertyName) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [propertyName]: value,
      };
    });
  };

  const sumbitFormHandler = (event) => {
    event.preventDefault();
    api.get('/').then((res) => {
      let users = res.data;
      let currentUser = users.find(
        (user) =>
          user.email === formData.email && user.password === +formData.password
      );
      if (currentUser) {
        setUser((prevState) => {
          console.log(currentUser);
          return {
            ...prevState,
            ...currentUser,
            login: true,
          };
        });
      } else {
        console.log('Такого пользователя нет');
      }
    });
  };

  return (
    <div className='App'>
      {user.login ? (
        <Contacts {...user} />
      ) : (
        <Login
          change={handaleChangeInputs}
          submit={sumbitFormHandler}
          {...formData}
        />
      )}
    </div>
  );
}

export default App;
