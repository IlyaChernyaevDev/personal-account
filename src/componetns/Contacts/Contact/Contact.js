export const Contact = ({ name, phone }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <button>Delete</button>
    </div>
  );
};
