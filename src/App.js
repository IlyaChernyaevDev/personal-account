import { useState } from 'react';
import { Login } from './componetns/Login/';
import { Contacts } from './componetns/Contacts/';
import { Error } from './componetns/Contacts/Error';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '64px',
  },
}));

function App() {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState({ authenticated: false });

  return (
    <Router>
      <Container component='main' maxWidth='xs' className={classes.app}>
        <Switch>
          <Route exact path='/'>
            {currentUser.authenticated ? (
              <Redirect to='/contacts' />
            ) : (
              <Login authenticated={currentUser.authenticated} setCurrentUser={setCurrentUser} />
            )}
          </Route>
          <Route path='/contacts'>
            {currentUser.authenticated ? (
              <Contacts {...currentUser} />
            ) : (
              <Error />
            )}
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
