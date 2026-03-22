'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Program', href: '/pricing' },
  { label: 'Mata Pelajaran', href: '/subjects' },
  { label: 'Tutor', href: '/tutors' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 68,
        display: 'flex', alignItems: 'center',
        padding: '0 48px',
        background: 'var(--navy)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.2)' : 'none',
      }
      }
      >

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
          <img
            src="/logo.png"
            alt="Trinity Academy ID"
            style={{ height: 42, width: 'auto', transition: 'all 0.3s' }}
          />
        </Link>

        {/* Desktop Links */}
        <ul className="nav-desktop" style={{
          display: 'flex', alignItems: 'center',
          gap: 36, listStyle: 'none', marginRight: 36,
        }}>
          {navLinks.map(link => {
            const isActive = pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href.split('#')[0]) && link.href.split('#')[0] !== '/')
            return (
              <li key={link.href}>
                <Link href={link.href} style={{
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--white)' : 'rgba(255,255,255,0.65)',
                  transition: 'color 0.2s',
                  position: 'relative',
                  paddingBottom: 2,
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--white)'}
                  onMouseLeave={e => e.target.style.color = isActive ? 'var(--white)' : 'rgba(255,255,255,0.65)'}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute', bottom: -2, left: 0, right: 0,
                      height: 2, background: 'var(--gold)', borderRadius: 2,
                    }} />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
            style={{
              fontSize: '0.875rem', fontWeight: 500,
              color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--white)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
          >
            Hubungi
          </a>
          <Link href="/register" style={{
            background: 'var(--navy)', color: 'var(--white)',
            fontSize: '0.875rem', fontWeight: 600,
            padding: '10px 22px', borderRadius: 50,
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--gold-light)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--navy)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Daftar Sekarang
          </Link>
        </div>

        {/* Hamburger */}
        <button className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none', border: 'none',
            cursor: 'pointer', padding: 8,
            color: 'var(--white)',
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'var(--navy)',
          paddingTop: 68,
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ padding: '32px 28px', flex: 1 }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 32 }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      fontSize: '1.1rem', fontWeight: 500,
                      color: 'rgba(255,255,255,0.85)',
                      padding: '14px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    fontSize: '1.1rem', fontWeight: 500,
                    color: 'rgba(255,255,255,0.85)',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}>
                  Hubungi
                </a>
              </li>
            </ul>
            <Link href="/register" onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', textAlign: 'center',
                background: 'var(--gold)', color: 'var(--navy)',
                fontWeight: 600, fontSize: '1rem',
                padding: '16px', borderRadius: 50,
              }}>
              Daftar Sekarang
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}