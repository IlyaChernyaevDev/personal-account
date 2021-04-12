import { useState } from 'react';
import './App.css';
import { Login } from './componetns/Login/';
import { Contacts } from './componetns/Contacts/';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { getUsers } from './actions/userActions';
import Container from '@material-ui/core/Container';

function App() {
  const [currentUser, setCurrentUser] = useState({ authenticated: false });
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
    getUsers().then((users) => {
      let user = users.find(
        (user) =>
          user.email === formData.email && user.password === +formData.password
      );
      console.log(user);
      if (user) {
        setCurrentUser(() => {
          return {
            ...user,
            authenticated: true,
          };
        });
      } else {
        console.log('Такого пользователя нет');
      }
    });
  };

  return (
    <Router>
      <Container component='main' maxWidth='xs'>
        <Switch>
          <Route exact path='/'>
            {currentUser.authenticated ? (
              <Redirect to='/contacts' />
            ) : (
              <Login
                change={handaleChangeInputs}
                submit={sumbitFormHandler}
                {...formData}
                authenticated={currentUser.authenticated}
              />
            )}
          </Route>
          <Route path='/contacts'>
            {currentUser.authenticated ? (
              <Contacts {...currentUser} />
            ) : (
              <div>Error</div>
            )}
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
