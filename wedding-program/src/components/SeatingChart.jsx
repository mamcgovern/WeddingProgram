import React, { useMemo, useState } from 'react'
import seating from '../data/seatingChart.json'

export default function SeatingChart() {
  const [search, setSearch] = useState('')

  const normalizedSearch = search.trim().toLowerCase()

  const filteredTables = useMemo(() => {
    if (!normalizedSearch) return seating.tables

    return seating.tables
      .map((table) => ({
        ...table,
        seats: table.seats.filter((guest) =>
          guest.name.toLowerCase().includes(normalizedSearch)
        ),
      }))
      .filter((table) => table.seats.length > 0)
  }, [normalizedSearch])

  return (
    <section className="seating-wrapper container">
      <div className="search-section">
        <div className="search-divider"></div>

        <input
          type="text"
          placeholder="Search your name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="seat-search"
        />
      </div>

      <section className="seating-chart">
        {filteredTables.map((table) => (
          <div key={table.name} className="table-card">
            <div className="table-card-header">
              <h2>{table.name}</h2>
              <div className="table-divider"></div>
            </div>

            <div className="guest-grid">
              {table.seats.map((guest, index) => (
                <div key={index} className="guest-card">
                  <div className="guest-card-inner">
                    <div className="guest-name">
                      {guest.name || 'Empty Seat'}
                    </div>

                    {guest.role && (
                      <div className="guest-role">
                        {guest.role}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {filteredTables.length === 0 && (
        <div className="no-results">
          No guests found.
        </div>
      )}
    </section>
  )
}