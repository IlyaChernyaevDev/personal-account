import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  contact: {
    border: '1px solid #42a5f5',
    borderRadius: '5px',
    marginBottom: '10px',
    padding: '10px',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right',
  },
}));

export const EditForm = ({ name, phone, setIsEdit }) => {
  const classes = useStyles();
  return (
    <form className={classes.contact}>
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        label='Name'
        name='name'
        autoFocus
        value={name}
        type='text'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        label='Phone'
        name='phone'
        autoFocus
        value={phone}
        type='text'
      />
      <Button
        variant='contained'
        color='primary'
        startIcon={<SaveIcon />}
        onClick={() => setIsEdit(false)}
      >
        Save
      </Button>
    </form>
  );
};
