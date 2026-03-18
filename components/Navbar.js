'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const navLinks = [
    { label: 'Tentang', href: isHome ? '#about' : '/#about' },
    { label: 'Mata Pelajaran', href: '/subjects' },
    { label: 'Tutor', href: '/tutors' },
    { label: 'Harga', href: '/pricing' },
    { label: 'Testimoni', href: isHome ? '#testimonials' : '/#testimonials' },
    { label: 'Saran', href: isHome ? '#suggestions' : '/#suggestions' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '12px 60px' : '18px 60px',
        background: '#0A3D8F',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.2)' : 'none',
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="Trinity Academy ID"
            style={{
              height: scrolled ? '44px' : '52px',
              width: 'auto',
              transition: 'all 0.3s ease',
            }}
          />
        </Link>

        {/* Desktop Links */}
        <ul style={{
          display: 'flex', alignItems: 'center', gap: 28,
          listStyle: 'none',
        }} className="nav-links-desktop">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '0.88rem', fontWeight: 500,
                  transition: 'color 0.3s',
                  position: 'relative',
                }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="nav-btns-desktop">
          <Link href="/register"
            style={{
              background: 'var(--gold)',
              color: 'var(--navy)',
              fontWeight: 700, fontSize: '0.85rem',
              padding: '10px 22px', borderRadius: 50,
              transition: 'all 0.3s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--gold-light)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--gold)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Daftar Sekarang
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none', border: 'none',
            color: 'white', fontSize: '1.5rem', cursor: 'pointer',
          }}
          className="nav-hamburger"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 70, left: 0, right: 0,
          background: 'var(--navy)',
          zIndex: 999,
          padding: '24px 32px',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMobile} style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '1rem', fontWeight: 500,
                  display: 'block', padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: 8 }}>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                onClick={closeMobile}
                style={{
                  display: 'block', padding: '10px 0',
                  color: 'rgba(255,255,255,0.85)', fontSize: '1rem', fontWeight: 500,
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                💬 Hubungi Kami
              </a>
            </li>
            <li style={{ marginTop: 12 }}>
              <Link href="/register" onClick={closeMobile}
                style={{
                  display: 'block', textAlign: 'center',
                  background: 'var(--gold)', color: 'var(--navy)',
                  fontWeight: 700, padding: '14px 24px',
                  borderRadius: 50, fontSize: '0.95rem',
                }}>
                Daftar Sekarang
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1024px) {
          nav { padding: ${scrolled ? '12px 32px' : '16px 32px'} !important; }
          .nav-links-desktop { gap: 18px !important; }
        }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-btns-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
          nav { padding: 16px 24px !important; }
        }
      `}</style>
    </>
  )
}