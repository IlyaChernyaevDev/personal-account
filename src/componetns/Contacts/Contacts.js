import { v4 as uuidv4 } from 'uuid';
import { Contact } from './Contact';

export const Contacts = ({ name, email, password, contacts}) => {
  return (
    <div>
      <p>Contacts</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
      <button onClick={() => console.log('Log out')}>Log out</button>
      {contacts.map((contact) => {
        return (
          <Contact key={uuidv4()} name={contact.name} phone={contact.phone}/>
        );
      })}
    </div>
  );
};
