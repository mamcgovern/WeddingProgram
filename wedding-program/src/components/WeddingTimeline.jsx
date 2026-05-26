import React, { useEffect, useRef } from 'react'
import timelineData from '../data/weddingTimeline.json'
// TODO: make sure the circles are centered horizontally on mobile

export default function WeddingTimeline() {
  const timeline = timelineData || []
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rafId = null
    let resizeTimer = null

    const applyOffsets = () => {
      const items = container.querySelectorAll('.story-item')
      items.forEach((item) => {
        const content = item.querySelector('.content')
        const marker = item.querySelector('.marker')
        if (!content || !marker) return

        // On small screens, use CSS/grid behavior; clear inline styles
        if (window.innerWidth <= 800) {
          marker.style.position = ''
          marker.style.left = ''
          marker.style.top = ''
          marker.style.transform = ''
          marker.style.removeProperty('will-change')
          return
        }

  // keep marker in the grid center column (no absolute positioning)
  // compute vertical delta from current marker center to content center,
  // then apply a translateY so horizontal centering remains controlled by CSS
  const markerHeight = marker.offsetHeight || 18
  const currentMarkerCenter = marker.offsetTop + markerHeight / 2
  const contentCenter = content.offsetTop + content.offsetHeight / 2
  const delta = Math.round(contentCenter - currentMarkerCenter)

  marker.style.position = ''
  marker.style.left = ''
  marker.style.top = ''
  marker.style.transform = `translateY(${delta}px)`
  marker.style.willChange = 'transform'
      })
    }

    const schedule = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        applyOffsets()
        rafId = null
      })
    }

    schedule()
    window.addEventListener('resize', () => {
      if (resizeTimer) clearTimeout(resizeTimer)
      resizeTimer = setTimeout(schedule, 120)
    })

    // Also re-run shortly after load to account for font/image shifts
    const t = setTimeout(schedule, 300)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      clearTimeout(t)
      if (resizeTimer) clearTimeout(resizeTimer)
    }
  }, [timeline])

  return (
    <div className="love-timeline" ref={containerRef}>
      <div className="timeline-line" aria-hidden="true" />
      <ol className="story-timeline">
        {timeline.map((item, idx) => (
          <li key={idx} className={`story-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className="marker" aria-hidden="true" />
            <div className="content">
              <div className="event-title">{item.event}</div>
              <div className="date">{item.date}</div>
              {/* photos removed for now */}
              <div className="desc">{item.description}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
