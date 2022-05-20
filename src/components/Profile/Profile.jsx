import React from 'react'

export default function Profile({ profile: { name, email, bio }}) {
  return (
    <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{bio}</p>
    </div>
  )
}
