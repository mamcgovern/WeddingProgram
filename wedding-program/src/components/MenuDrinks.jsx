import React from 'react'

export default function MenuDrinks({ menu = {}, drinks = [] }) {
  return (
    <div className="menu-drinks">
      <div className="menu">
        <h4>Menu</h4>
        {Object.entries(menu).map(([course, items]) => (
          <div key={course} className="course">
            <strong>{course}</strong>
            <ul>
              {items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="drinks">
        <h4>Drinks</h4>
        <ul>
          {drinks.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
