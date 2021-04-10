export const Login = () => {
  return (
    <form>
      <label>
        Email
        <input
          onChange={(event) => console.log(`email: ${event.target.value}`)}
          type='text'
        />
      </label>
      <label>
        Password
        <input
          onChange={(event) => console.log(`password: ${event.target.value}`)}
          type='text'
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};
