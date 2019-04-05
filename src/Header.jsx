import React from 'react'

export default function Header({ username }) {

  const buttonStyle = {
    marginLeft: '16px'
  }
  return (
    <div>
      {username}
      <button style = {buttonStyle}>Logout</button>
    </div>
  )
}
