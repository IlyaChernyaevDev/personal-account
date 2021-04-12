import { v4 as uuidv4 } from 'uuid';
import { Contact } from './Contact';

import React from 'react';

import List from '@material-ui/core/List';

import Grid from '@material-ui/core/Grid';

export const Contacts = ({ name, contacts }) => {
  return (
    <div>
      <p>Contacts</p>
      <p>{name}</p>
      <button onClick={() => console.log('Log out')}>Log out</button>
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
