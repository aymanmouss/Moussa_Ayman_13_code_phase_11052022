import { useState } from "react";
import AuthService from "../../hooks/auth.services";
import { useDispatch } from "react-redux";
import { user } from "../../redux/authSlice";
import "./style.css";

function User() {
  const token = JSON.parse(localStorage.getItem("user"));
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [inputFistName, setInputFistName] = useState("");
  const [inputlastName, setInputlastName] = useState("");
  const [edit, setEdit] = useState("displayNone");

  const dispatch = useDispatch();
  // Fatch the user infor and display them
  dispatch(user(token)).then((a) => {
    setFistName(a.payload.firstName);
    setLastName(a.payload.lastName);
  });

  const editName = () => {
    edit ? setEdit("") : setEdit("displayNone");
  };

  const push = () => {
    AuthService.pushInfo(inputFistName, inputlastName, token).then(() => {
      window.location.reload();
    });
  };
  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {`${firstName} ${lastName}`}
        </h1>
        <div className={`userProfile-Edit ${edit}`}>
          <label htmlFor='FirstName'>First Name </label>
          <input
            type='text'
            id='FirstName'
            onChange={(e) => setInputFistName(e.target.value)}
          />
          <label htmlFor='LastName'>Last Name </label>
          <input
            type='text'
            id='LastName'
            onChange={(e) => setInputlastName(e.target.value)}
          />
          <button
            type='submit'
            onClick={(e) => {
              push();
            }}
          >
            Save
          </button>
        </div>
        <button className='edit-button' onClick={(e) => editName()}>
          Edit Name
        </button>
      </div>
      <h2 className='sr-only'>Accounts</h2>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
          <p className='account-amount'>$2,082.79</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Savings (x6712)</h3>
          <p className='account-amount'>$10,928.42</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
          <p className='account-amount'>$184.30</p>
          <p className='account-amount-description'>Current Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
    </main>
  );
}
export default User;
