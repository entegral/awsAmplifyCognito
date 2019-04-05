import React from 'react'

export default function Header({ username, handleSignOut }) {

  const buttonStyle = {
    marginLeft: '16px'
  }
  return (
    <div>
      {username}
      <button style = {buttonStyle} onClick={handleSignOut}>Logout</button>
    </div>
  )
}
