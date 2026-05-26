import React from 'react'
import sampleData from '../data/sampleData'

export default function Cover({ onEnter }) {
  return (
    <section className="cover">
      <div className="cover-inner">
        <h1 className="couple-name">Maddelynne & Nicholas</h1>
        <p className="cover-sub">We're getting married — welcome to our program</p>
        <button className="enter-btn" onClick={() => onEnter && onEnter()}>
          Enter
        </button>
      </div>
    </section>
  )
}