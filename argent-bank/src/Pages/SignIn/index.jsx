import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import "./style.css";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      login({
        email: username,
        password: password,
      })
    ).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className='mains'>
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <i className='fa fa-user-circle sign-in-icon'></i>
          <h1>Sign In</h1>
          <form>
            <div className='input-wrapper'>
              <label htmlFor='username'>Username</label>
              <input
                value={username}
                type='text'
                id='username'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input
                value={password}
                type='password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='input-remember'>
              <input type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className='sign-in-button'
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
export default SignIn;
