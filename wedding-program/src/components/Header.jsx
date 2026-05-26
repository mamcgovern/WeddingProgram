import React, { useState, useRef, useEffect } from 'react'

const PAGES = [
    { id: 'cover', label: 'Home' },
    { id: 'wedding-party', label: 'Wedding Party' },
    { id: 'love-story', label: 'Love Story' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'seating', label: 'Seating' },
    { id: 'menu', label: 'Menu' },
    { id: 'honeymoon', label: 'Honeymoon' },
    { id: 'awards', label: 'Awards' },
    { id: 'thank-you', label: 'Thank You' },
]

export default function Header({ onNavigate, currentPage }) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function onDoc(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('mousedown', onDoc)
        return () => document.removeEventListener('mousedown', onDoc)
    }, [])

    const handleNavigate = (e, id) => {
        e.preventDefault()
        setOpen(false)
        if (onNavigate) onNavigate(id)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">The Bergans</a>

                <div className="ml-auto" ref={ref}>
                    <button className="btn btn-outline-light" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-haspopup>
                        Menu
                    </button>
                    {open && (
                        <ul className="dropdown-menu show" style={{ position: 'absolute', right: 10 }}>
                            {PAGES.map((p) => (
                                <li key={p.id}>
                                    <a
                                        className={`dropdown-item ${currentPage === p.id ? 'active' : ''}`}
                                        href={`#${p.id}`}
                                        aria-current={currentPage === p.id ? 'page' : undefined}
                                        onClick={(e) => handleNavigate(e, p.id)}
                                    >
                                        {p.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}