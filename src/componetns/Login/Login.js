export const Login = ({change}) => {
  return (
    <form>
      <label>
        Email
        <input
          name='email'
          onChange={(event) => change(event.target.value, event.target.name)}
          type='text'
        />
      </label>
      <label>
        Password
        <input
          onChange={(event) => change(event.target.value, event.target.name)}
          type='text'
        />
      </label>
      <input type='submit' value='Submit'/>
    </form>
  );
};
