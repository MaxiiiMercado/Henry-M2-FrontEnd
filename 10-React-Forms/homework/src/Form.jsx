import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  else if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.-*[0-9])/.test(input.username)) {
    errors.password = 'Password is invalid';
  }

  return errors;
}

export default function Form() {

  const [input, setInput] = React.useState({ username: '', password: '' })

  const [error, setError] = React.useState({});

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })

    setError(validate({ ...input, [e.target.name]: e.target.value }))
  }

  return (
    <form>
      <div>
        <label htmlFor="">Username:</label>
        <input type={"text"} name="username" className={error.username && 'danger'} id="" value={input.username} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input type={"password"} name="password" className={error.password && 'danger'} id="" value={input.password} onChange={handleInputChange} />
      </div>
      <input type={"submit"} value={"Ingresar"} />
    </form>
  )
}
