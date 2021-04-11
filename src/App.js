import { useState } from 'react';
import './App.css';
import { Login } from './componetns/Login/';
import { Contacts } from './componetns/Contacts/';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://localhost:3001/users',
});

function App() {
  const [user, setUser] = useState({ authenticated: false });
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
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Login
              change={handaleChangeInputs}
              submit={sumbitFormHandler}
              {...formData}
            />
          </Route>
          {user.authenticated && (
            <Route path='/contacts'>
              <Contacts {...user} />
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// {
//   /* <Login
//   path='/'
// change={handaleChangeInputs}
// submit={sumbitFormHandler}
// {...formData}
// /> */
// }
// <Route
//   exact
//   path='/'
//   render={() => {
//     return (
//       <Login
//         change={handaleChangeInputs}
//         submit={sumbitFormHandler}
//         {...formData}
//       />
//     );
//   }}
// />;
// {
//   /* {user.authenticated ? (
//   <Contacts {...user} />
// ) : (
//   <Login
//     change={handaleChangeInputs}
//     submit={sumbitFormHandler}
//     {...formData}
//   />
// )} */
// }
// {
//   user.authenticated && (
//     <Route
//       exact
//       path='/contacts'
//       render={() => <Contacts {...user} />}
//     />
//   );
// }
