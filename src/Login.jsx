import React from 'react';

export default function Login({ handleLogin, handleOnChange, errorMessage}) {

  const loginFormStyle = {
    textAlign: 'center'
  };

  const loginDivStyle = {
    marginTop: '40px',
    marginBottom: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '20%',
    border: '1px solid grey',
    padding: '16px',
    justifyContent: 'center'
  };

  const loginHeaderStyle = {
    textAlign: 'center'
  };

  const inputStyle = {
    display: 'block',
    margin: '0 auto'
  };

  const errorStyle = {
    color: 'red',
    display: 'block'
  };

  return (
    <div style = {loginDivStyle}>
      <h4 style={loginHeaderStyle}>Login</h4>
      <form style={loginFormStyle}>
        <input style={inputStyle} placeholder='Email' type="text" name="email" id="email" onChange={handleOnChange}/>
        <input style={inputStyle} placeholder='Password' type="password" name="password" id="password" onChange={handleOnChange}/>
        <button type='submit' onClick={handleLogin}>Login</button>
      </form>
      <p style = {errorStyle}>{errorMessage}</p>
    </div>
  )

}
