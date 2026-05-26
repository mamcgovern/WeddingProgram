import React from 'react'

export default function LoveStory({ timeline = [] }) {
  return (
    <ol className="story-timeline">
      {timeline.map((item, idx) => (
        <li key={idx} className="story-item">
          <div className="date">{item.date}</div>
          <div className="desc">{item.text}</div>
        </li>
      ))}
    </ol>
  )
}
