export const Login = ({ change, submit, email, password }) => {
  return (
    <form>
      <label>
        Email
        <input
          value={email}
          name='email'
          onChange={(event) => change(event.target.value, event.target.name)}
          type='text'
        />
      </label>
      <label>
        Password
        <input
          value={password}
          name='password'
          onChange={(event) => change(event.target.value, event.target.name)}
          type='text'
        />
      </label>
      <input
        type='submit'
        value='Submit'
        onClick={(event) => {
          submit(event);
        }}
      />
    </form>
  );
};
