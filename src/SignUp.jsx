import React from 'react';

export default function SignUp({ displayConfirmation, handleSignUp, handleOnChange, handleConfirmSignUp, errorMessage}) {

  const signUpFormStyle = {
    textAlign: 'center'
  };

  const signUpDivStyle = {
    marginTop: '40px',
    marginBottom: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '20%',
    border: '1px solid grey',
    padding: '16px',
    justifyContent: 'center'
  };
  
  const signUpHeaderStyle = {
    textAlign: 'center'
  }

  const inputStyle = {
    display: 'block',
    margin: '0 auto'
  }

  const errorStyle = {
    color: 'red',
    display: 'block'
  }
  

  if (displayConfirmation){
    return (  
      <div style = {signUpDivStyle}>
      <h4 style={signUpHeaderStyle} >Confirm Sign Up</h4>
        <form style={signUpFormStyle}>
          <input style={inputStyle} placeholder='Authentication Code' type="text" name="authenticationCode" id="authenticationCode" onChange={handleOnChange}/>
          <button type='submit' onClick={handleConfirmSignUp}>Confirm Sign Up</button>
        </form>
      </div>    )
  } else {
    return (
      <div style = {signUpDivStyle}>
        <h4 style={signUpHeaderStyle}>Sign Up</h4>
        <form style={signUpFormStyle}>
          <input style={inputStyle} placeholder='Email' type="text" name="email" id="email" onChange={handleOnChange}/>
          <input style={inputStyle} placeholder='Password' type="password" name="password" id="password" onChange={handleOnChange}/>
          <input style={inputStyle} placeholder='Confirm Password' type="password" name="confirm_password" id="confirm_password" onChange={handleOnChange}/>
          <button type='submit' onClick={handleSignUp}>Sign Up</button>
        </form>
        <p style = {errorStyle}>{errorMessage}</p>
      </div>
    )
  }
}
