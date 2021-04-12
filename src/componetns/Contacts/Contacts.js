import { v4 as uuidv4 } from 'uuid';
import { Contact } from './Contact';

import React from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export const Contacts = ({ name, contacts }) => {

  const handaleLogout = () => {
    
  }

  return (
    <div>
      <Typography gutterBottom variant='h4' component='h2' align='center'>
        Contacts
      </Typography>
      <Typography gutterBottom variant='h5' component='h3' align='center'>
        {name}
      </Typography>
      <button onClick={() => console.log('Log out')}>Log out</button>
      <TextField fullWidth margin='normal' label='Search' variant='outlined' />
      <Grid item xs={12}>
        <List>
          {contacts.map((contact) => {
            return (
              <Contact
                key={uuidv4()}
                name={contact.name}
                phone={contact.phone}
              />
            );
          })}
        </List>
      </Grid>
    </div>
  );
};
