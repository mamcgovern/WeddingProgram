import './App.css'
import { useState } from 'react'
import Header from './components/Header.jsx'
import WeddingParty from './components/WeddingParty.jsx'
import ThankYou from './components/ThankYou.jsx'
import LoveStory from './components/LoveStory.jsx'
import WeddingTimeline from './components/WeddingTimeline.jsx'
import SeatingChart from './components/SeatingChart.jsx'
import MenuDrinks from './components/MenuDrinks.jsx'
import Honeymoon from './components/Honeymoon.jsx'
import GuestAwards from './components/GuestAwards.jsx'
import Cover from './components/Cover.jsx'
import sampleData from './data/sampleData'

function App() {
  const [page, setPage] = useState('cover')

  return (
    <div className="app-root">
  <Header onNavigate={setPage} currentPage={page} />

      <main>
        {page === 'cover' && (
          <Cover onEnter={() => setPage('wedding-party')} />
        )}

        {page === 'wedding-party' && (
          <section id="wedding-party" className="section">
            <h2>Wedding Party</h2>
            <WeddingParty />
          </section>
        )}

        {page === 'love-story' && (
          <section id="love-story" className="section">
            <h2>Our Love Story</h2>
            <LoveStory timeline={sampleData.loveStory} />
          </section>
        )}

        {page === 'timeline' && (
          <section id="timeline" className="section">
            <h2>Wedding Day Timeline</h2>
            <WeddingTimeline events={sampleData.timeline} />
          </section>
        )}

        {page === 'seating' && (
          <section id="seating" className="section">
            <h2>Seating Chart</h2>
            <SeatingChart seating={sampleData.seating} />
          </section>
        )}

        {page === 'menu' && (
          <section id="menu" className="section">
            <h2>Menu & Drinks</h2>
            <MenuDrinks menu={sampleData.menu} drinks={sampleData.drinks} />
          </section>
        )}

        {page === 'honeymoon' && (
          <section id="honeymoon" className="section">
            <h2>Honeymoon</h2>
            <Honeymoon info={sampleData.honeymoon} />
          </section>
        )}

        {page === 'awards' && (
          <section id="awards" className="section">
            <h2>Guest Awards</h2>
            <GuestAwards awards={sampleData.awards} />
          </section>
        )}

        {page === 'thank-you' && (
          <section id="thank-you" className="section">
            <h2>Thank You</h2>
            <ThankYou letter={sampleData.thankYou} />
          </section>
        )}
      </main>

      <footer className="footer">Made with ❤️ — Please reach out for updates or corrections</footer>
    </div>
  )
}

export default App
 