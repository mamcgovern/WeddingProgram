import React from 'react'
import awards from '../data/guestAwards.json'

export default function GuestAwards() {
  return (
    <section className="guest-awards container py-5">
      <div className="row g-4">
        {awards.map((item, idx) => (
          <div key={idx} className="col-12 col-lg-6">
            <div className="award-card">

              {/* Decorative corners */}
              <div className="corner top-left" />
              <div className="corner top-right" />
              <div className="corner bottom-left" />
              <div className="corner bottom-right" />

              <div className="award-inner">

                {/* TITLE */}
                <div className="award-title-wrapper">
                  {item.title && <h2 className="award-title">{item.title}</h2>}
                </div>

                {/* DIVIDER */}
                <div className="gold-divider" />

                {/* PHOTO + NAME ROW */}
                <div className="award-bottom">

                  <div className="photo-wrapper">
                    <img
                      src={item.photo}
                      alt={item.name || item.title}
                      className="guest-photo"
                    />
                  </div>

                  <div className="award-content">
                    {item.name && (
                      <div className="award-name">
                        {item.name}
                      </div>
                    )}
                  </div>

                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}