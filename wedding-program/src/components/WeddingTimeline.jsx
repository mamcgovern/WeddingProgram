import React from 'react'

export default function WeddingTimeline({ events = [] }) {
  return (
    <ul className="day-timeline">
      {events.map((ev, i) => (
        <li key={i} className="event">
          <time className="time">{ev.time}</time>
          <div className="what">{ev.title}</div>
          {ev.location && <div className="where">{ev.location}</div>}
        </li>
      ))}
    </ul>
  )
}
