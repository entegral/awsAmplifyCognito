import React from 'react';
import {Modal} from 'react-materialize';

export default function Login({ displayConfirmationModal, handleLogin, handleEmailChange, handlePasswordChange, handlePasswordConfirmationChange}) {

  const loginFormStyle = {

  };

  const loginDivStyle = {
    marginTop: '40px',
    marginBottom: '40px',
    marginLeft: '45%',
    marginRight: '45%',
    width: '10%',
    border: '1px solid grey',
    padding: '16px',
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'center'
  };

  const inputStyle = {
    display: 'block'
  }

  function handleSubmit(event){
    event.preventDefault();
    handleLogin();
  };
  

  if (displayConfirmationModal){
    return (
      <Modal />
    )
  } else {
    return (
      <div style = {loginDivStyle}>
        <form style={loginFormStyle}>
          <label htmlFor="emaill">Email</label>
          <input style={inputStyle} type="text" name="email" id="email" onChange={handleEmailChange}/>
          <label htmlFor="passwordd">Password</label>
          <input style={inputStyle} type="password" name="password" id="password" onChange={handlePasswordChange}/>
          <label htmlFor="confirm_passwordd">Confirm Password</label>
          <input style={inputStyle} type="password" name="confirm_password" id="confirm_password" onChange={handlePasswordConfirmationChange}/>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
