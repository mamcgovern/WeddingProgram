import React from 'react'

export default function SeatingChart({ seating = [] }) {
  return (
    <div className="seating">
      {seating.map((table) => (
        <div key={table.table} className="table">
          <h4>Table {table.table}</h4>
          <ul>
            {table.guests.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
