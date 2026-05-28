import React from 'react'
import timelineData from '../data/weddingTimeline.json'

export default function WeddingTimeline() {
  const timeline = Array.isArray(timelineData) ? timelineData : []

  if (!timeline.length) {
    return <div style={{ padding: 40 }}>No timeline data</div>
  }

  return (
    <div className="timeline-wrapper">
      <h1 className="timeline-title">Wedding Day Timeline</h1>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div className="timeline-row" key={index}>

            {/* TIME */}
            <div className="timeline-time">
              {item.time || ''}
            </div>

            {/* DOT + LINE */}
            <div className="timeline-line-wrap">
              <span className="timeline-dot" />
              <span className="timeline-line" />
            </div>

            {/* CONTENT */}
            <div className="timeline-content">

              {item.photo && (
                <img
                  className="timeline-image"
                  src={item.photo}
                  alt={item.event}
                />
              )}

              <div className="timeline-event">
                {item.event}
              </div>

            </div>


          </div>
        ))}
      </div>
    </div>
  )
}