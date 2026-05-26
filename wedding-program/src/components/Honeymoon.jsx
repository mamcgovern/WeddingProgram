import React from 'react'
// TODO: Add honeymoon details
export default function Honeymoon({ info }) {
  if (!info) return null
  return (
    <div className="honeymoon">
      <p>{info.text}</p>
      {info.registry && (
        <p>
          Registry: <a href={info.registry} target="_blank" rel="noreferrer">{info.registry}</a>
        </p>
      )}
    </div>
  )
}
