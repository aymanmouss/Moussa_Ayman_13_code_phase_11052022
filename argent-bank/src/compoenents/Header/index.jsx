import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../assets/argentBankLogo.png";
import { user } from "../../redux/authSlice";
import "./syle.css";
function Header() {
  const [firstName, setFistName] = useState("");
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const SignInIcon = (
    <span>
      <i className='fa fa-user-circle'></i> Sign In
    </span>
  );
  const SignOutIcon = (
    <span>
      {" "}
      <i className='fa fa-sign-out'></i> Log Out
    </span>
  );
  dispatch(user(signIn)).then((a) => {
    setFistName(a.payload.firstName);
  });
  const userIconLogin = (
    <span className='usenameIcon'>
      <i className='fa fa-user-circle'></i> {firstName}
    </span>
  );
  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to='/'>
        <img
          className='main-nav-logo-image'
          src={logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        {signIn ? userIconLogin : ""}
        <Link
          className='main-nav-item'
          to='./sign-in'
          onClick={() => {
            if (JSON.parse(localStorage.getItem("user"))) {
              localStorage.removeItem("user");
              window.location.reload();
            }
          }}
        >
          {signIn ? SignOutIcon : SignInIcon}
        </Link>
      </div>
    </nav>
  );
}
export default Header;
