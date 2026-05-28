import React from 'react'
import message from '../data/thankYou.json'

export default function ThankYou() {
  if (!message) return null
  return (
    <article className="thankyou">
      <p>{message.opening}</p>
      <p>{message.body}</p>
      <p className="sign">— {message.signature}</p>
    </article>
  )
}
