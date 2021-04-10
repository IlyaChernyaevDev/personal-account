export const Contacts = ({ name, email, password, contacts }) => {
  return (
    <div>
      <p>Contacts</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
      {contacts.map(contact => {
        return <p>Имя: {contact.name} Телефон: {contact.phone}</p>
      })}
    </div>
  );
};
