'use client'

import Link from 'next/link'

export default function Footer() {
  const socials = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/trinityacademy.id?igsh=MWI1bmlqOGpmMWxjZQ==',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      label: 'TikTok',
      href: '#',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
        </svg>
      )
    },
    {
      label: 'YouTube',
      href: '#',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
        </svg>
      )
    },
  ]

  const navLinks = [
    { label: 'Tentang Kami', href: '/#about' },
    { label: 'Mata Pelajaran', href: '/subjects' },
    { label: 'Temu Tutor', href: '/tutors' },
    { label: 'Harga & Paket', href: '/pricing' },
    { label: 'Daftar Sekarang', href: '/register' },
  ]

  const subjects = [
    { label: 'SD — Calistung & Sains', href: '/subjects' },
    { label: 'SMP — Mat, IPA, IPS', href: '/subjects' },
    { label: 'SMA IPA — Fisika, Kimia', href: '/subjects' },
    { label: 'SMA IPS — Ekonomi, Geo', href: '/subjects' },
    { label: 'Bahasa Inggris Semua Jenjang', href: '/subjects' },
  ]

  return (
    <footer id="footer" style={{
      background: 'var(--navy)',
      padding: '72px 0 0',
      color: 'rgba(255,255,255,0.55)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.4fr',
          gap: 48,
          paddingBottom: 56,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: 20 }}>
              <img src="/logo.png" alt="Trinity Academy ID"
                style={{ height: 56, width: 'auto' }} />
            </Link>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, marginBottom: 24, maxWidth: 280 }}>
              Platform les private online terpercaya untuk siswa SD, SMP, dan SMA di seluruh Indonesia.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} title={s.label}
                  style={{
                    width: 40, height: 40,
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.7)',
                    transition: 'all 0.3s',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--gold)'
                    e.currentTarget.style.color = 'var(--navy)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >{s.svg}</a>
              ))}
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                title="WhatsApp"
                style={{
                  width: 40, height: 40,
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'all 0.3s',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--gold)'
                  e.currentTarget.style.color = 'var(--navy)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h5 style={{
              fontSize: '0.78rem', fontWeight: 700, color: 'white',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20,
            }}>Navigasi</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '0.875rem', transition: 'color 0.3s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h5 style={{
              fontSize: '0.78rem', fontWeight: 700, color: 'white',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20,
            }}>Mata Pelajaran</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {subjects.map(s => (
                <li key={s.label}>
                  <Link href={s.href} style={{ fontSize: '0.875rem', transition: 'color 0.3s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                  >{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{
              fontSize: '0.78rem', fontWeight: 700, color: 'white',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20,
            }}>Kontak</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              <p style={{ fontSize: '0.875rem', marginBottom: 10 }}>+62 812-3456-7890</p>
              <p style={{ fontSize: '0.875rem', marginBottom: 10 }}>trinityacademy.id@gmail.com</p>
              <p style={{ fontSize: '0.875rem', marginBottom: 20 }}>Senin–Minggu, 08.00–21.00 WIB</p>
            </div>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--gold)', color: 'var(--navy)',
                fontWeight: 700, fontSize: '0.85rem',
                padding: '11px 22px', borderRadius: 50,
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--gold-light)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          padding: '20px 0',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.25)',
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} Trinity Academy ID. All rights reserved.
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          footer { padding: 48px 0 0 !important; }
          footer > div { padding: 0 24px !important; }
        }
      `}</style>
    </footer>
  )
}