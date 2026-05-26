import React from 'react'

export default function ThankYou({ letter }) {
  if (!letter) return null
  return (
    <article className="thankyou">
      <p>{letter.opening}</p>
      <p>{letter.body}</p>
      <p className="sign">— {letter.signature}</p>
    </article>
  )
}
