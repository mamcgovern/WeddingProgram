import React from 'react'

export default function GuestAwards({ awards = [] }) {
  return (
    <div className="awards">
      {awards.map((a, i) => (
        <div key={i} className="award">
          <strong>{a.title}</strong>
          <div className="desc">{a.desc}</div>
        </div>
      ))}
    </div>
  )
}
