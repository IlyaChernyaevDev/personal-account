import React, { useState } from 'react';
import { getUsers } from '../../actions/userActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = ({ setCurrentUser }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

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
      if (user) {
        setCurrentUser(() => {
          return {
            ...user,
            authenticated: true,
          };
        });
        setError(null);
      } else {
        setError(<p>There is no such user</p>);
      }
    });
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          autoComplete='email'
          autoFocus
          value={formData.email}
          name='email'
          onChange={(event) =>
            handaleChangeInputs(event.target.value, event.target.name)
          }
          type='text'
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          value={formData.password}
          name='password'
          onChange={(event) =>
            handaleChangeInputs(event.target.value, event.target.name)
          }
        />
        {error}
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={(event) => {
            sumbitFormHandler(event);
          }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};
