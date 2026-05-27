import React from 'react'
import menuData from '../data/menuDrinks.json'

export default function MenuDrinks() {
  const { menu, dessert, drinks } = menuData

  const renderItems = (items = []) => {
    return (
      <div className="row">
        {items.map((item, index) => (
          <div
            className="col-12 col-md-6 pb-4"
            key={index}
          >
            <div
              className="card h-100 border-0 text-center"
              style={{
                backgroundColor: 'var(--background)',
                // or use: backgroundColor: 'transparent'
              }}
            >
              <img
                src={item.photo}
                alt={item.name}
                className="card-img-top rounded"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                }}
              />

              <div className="card-body pb-4">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="container py-5 menu-drinks">
      {/* Menu */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Menu</h2>
        {renderItems(menu)}
      </section>

      {/* Dessert */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Dessert</h2>
        {renderItems(dessert)}
      </section>

      {/* Drinks */}
      <section>
        <h2 className="text-center mb-4">Drinks</h2>

        {/* Non-Alcoholic */}
        <div className="mb-5">
          <h3 className="mb-4">Non-Alcoholic</h3>
          {renderItems(drinks['non-alcoholic'])}
        </div>

        {/* Alcoholic */}
        <div>
          <h3 className="mb-4">Alcoholic</h3>
          {renderItems(drinks.alcoholic)}
        </div>
      </section>
    </div>
  )
}