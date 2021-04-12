export const Display = ({ name, phone, setIsEdit }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <button onClick={() => console.log('delete user')}>Delete</button>
      <button onClick={() => setIsEdit(true)}>Edit</button>
    </div>
  );
};
