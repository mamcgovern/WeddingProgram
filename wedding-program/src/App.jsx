import './App.css'
import { useState } from 'react'
import Header from './components/Header.jsx'
import WeddingParty from './components/WeddingParty.jsx'
import ThankYou from './components/ThankYou.jsx'
import WeddingTimeline from './components/WeddingTimeline.jsx'
import SeatingChart from './components/SeatingChart.jsx'
import Cover from './components/Cover.jsx'

function App() {
  const [page, setPage] = useState('cover')
  const PAGES = [
    { id: 'cover', label: 'Home' },
    { id: 'wedding-party', label: 'Wedding Party' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'seating', label: 'Seating' },
    { id: 'thank-you', label: 'Thank You' },
  ]

  const currentIndex = PAGES.findIndex((p) => p.id === page)
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null

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

        {page === 'thank-you' && (
          <section id="thank-you" className="section">
            <h2>Thank You</h2>
            <ThankYou letter={sampleData.thankYou} />
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-side left">
          <button
            className="nav-btn prev"
            onClick={() => prevPage && setPage(prevPage.id)}
            disabled={!prevPage}
            aria-label={prevPage ? `Previous: ${prevPage.label}` : 'No previous page'}
          >
            ← {prevPage ? prevPage.label : ''}
          </button>
        </div>

        <div className="footer-center">Made with ❤️ — Please reach out for updates or corrections</div>

        <div className="footer-side right">
          <button
            className="nav-btn next"
            onClick={() => nextPage && setPage(nextPage.id)}
            disabled={!nextPage}
            aria-label={nextPage ? `Next: ${nextPage.label}` : 'No next page'}
          >
            {nextPage ? nextPage.label : ''} →
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
 