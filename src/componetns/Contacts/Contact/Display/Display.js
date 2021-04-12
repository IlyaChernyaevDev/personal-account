import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  contact: {
    border: '1px solid #42a5f5',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right',
  },
}));

export const Display = ({ name, phone, setIsEdit }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.contact}>
      <ListItemAvatar>
        <Avatar>{name[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={phone} />
      <ListItemSecondaryAction className={classes.buttons}>
        <Button
          size='small'
          variant='contained'
          color='secondary'
          startIcon={<DeleteIcon />}
          onClick={() => console.log('delete user')}
        >
          Delete
        </Button>
        <Button
          size='small'
          variant='contained'
          color='primary'
          startIcon={<EditIcon />}
          onClick={() => setIsEdit(true)}
        >
          Edit
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
