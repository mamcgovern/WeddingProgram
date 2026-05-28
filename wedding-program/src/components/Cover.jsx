import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import coverImages from '../data/coverImages.json'

export default function Cover({ onEnter }) {
  return (
    <section className="cover">

      {/* IMAGE */}
      <div className="cover-carousel">
        <Carousel
          className="cover-carousel"
          fade
          interval={5000}
          controls={false}
          indicators={false}
        >
          {coverImages.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                  src={import.meta.env.BASE_URL + img}
                  alt=""
                  className="cover-image"
                />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* TEXT BELOW IMAGE */}
      <div className="cover-text">
        <h1 className="couple-name">
          Maddelynne & Nicholas
        </h1>

        <p className="cover-sub">
          The Bergans | 04.24.2027
        </p>

        <button
          className="enter-btn"
          onClick={() => onEnter?.()}
        >
          Enter
        </button>
      </div>

    </section>
  )
}
