export const EditForm = ({ name, phone, setIsEdit }) => {
  return (
    <form>
      <label>
        {name} <input type='text' value={name} />
      </label>
      <label>
        {phone} <input type='text' value={phone} />
      </label>
      <input type='submit' value='Save' onClick={() => setIsEdit(false)} />
    </form>
  );
};
