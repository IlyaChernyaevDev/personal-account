import { v4 as uuidv4 } from 'uuid';

export const Contacts = ({ name, email, password, contacts }) => {
  return (
    <div>
      <p>Contacts</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
      <button onClick={() => console.log('Log out')}>Log out</button>
      {contacts.map((contact) => {
        return (
          <p key={uuidv4()}>
            Имя: {contact.name} Телефон: {contact.phone}
          </p>
        );
      })}
    </div>
  );
};
