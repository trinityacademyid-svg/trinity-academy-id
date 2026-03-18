'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// ── Scroll Reveal Hook ──
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, (entry.target.dataset.delay || 0) * 100)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
}

// ═══════════════════════════════════════════
//              FLOATING WA BUTTON
// ═══════════════════════════════════════════
function FloatingWA() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const footer = document.getElementById('footer')
    const handleScroll = () => {
      if (!footer) return
      const footerTop = footer.offsetTop
      const scrollBottom = window.scrollY + window.innerHeight
      setVisible(scrollBottom < footerTop + 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
      style={{
        position: 'fixed', bottom: 32, right: 32,
        width: 56, height: 56,
        background: '#25D366', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.6rem', zIndex: 999,
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        transition: 'opacity 0.3s, transform 0.3s',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        textDecoration: 'none',
        color: 'white',
      }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

// ═══════════════════════════════════════════
//               HERO SECTION
// ═══════════════════════════════════════════
function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'var(--navy)',
      display: 'flex', alignItems: 'center',
      padding: '120px 60px 80px',
      gap: 60, position: 'relative', overflow: 'hidden',
    }}>
      {/* Background shapes */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', width: 500, height: 500,
          borderRadius: '50%', filter: 'blur(80px)', opacity: 0.12,
          background: 'var(--gold)', top: -100, right: -100,
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300,
          borderRadius: '50%', filter: 'blur(80px)', opacity: 0.08,
          background: 'var(--gold-light)', bottom: -50, left: 200,
        }} />
      </div>

      {/* Content */}
      <div className="reveal-left" style={{ flex: 1, maxWidth: 580, zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,180,216,0.15)',
          border: '1px solid rgba(0,180,216,0.3)',
          color: 'var(--gold-light)',
          fontSize: '0.85rem', fontWeight: 500,
          padding: '8px 16px', borderRadius: 50, marginBottom: 24,
        }}>
          🎓 Les Private Online Terpercaya
        </div>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
          fontWeight: 900, color: 'white',
          lineHeight: 1.15, marginBottom: 24,
        }}>
          Belajar Lebih <span style={{ color: 'var(--gold)' }}>Cerdas,</span><br />
          Raih Prestasi <span style={{ color: 'var(--gold)' }}>Terbaik</span>
        </h1>

        <p style={{
          fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.8, marginBottom: 36,
        }}>
          Trinity Academy ID hadir untuk menemani perjalanan belajar siswa SD, SMP, dan SMA
          dengan tutor berpengalaman secara online via Zoom/Google Meet.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
          <Link href="/register"
            style={{
              background: 'var(--gold)', color: 'var(--navy)',
              fontWeight: 700, fontSize: '0.95rem',
              padding: '14px 28px', borderRadius: 50,
              boxShadow: 'var(--shadow-gold)', transition: 'all 0.3s',
            }}>
            🎓 Daftar Sekarang — Gratis!
          </Link>
          <Link href="/subjects" style={{
            color: 'rgba(255,255,255,0.8)', fontWeight: 500,
            fontSize: '0.95rem', transition: 'color 0.3s',
          }}>
            Lihat Mata Pelajaran →
          </Link>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {[
            { num: '50+', label: 'Siswa Aktif' },
            { num: '10+', label: 'Tutor Berpengalaman' },
            { num: '15+', label: 'Mata Pelajaran' },
          ].map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              {i > 0 && <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.15)' }} />}
              <div style={{ textAlign: 'center' }}>
                <span style={{
                  display: 'block',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2rem', fontWeight: 700, color: 'var(--gold)',
                }}>{s.num}</span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className="reveal-right" style={{
        flex: 1, position: 'relative',
        minHeight: 460, display: 'flex',
        alignItems: 'center', justifyContent: 'center', zIndex: 1,
      }}>
        <div style={{
          width: 280, height: 280, borderRadius: '50%',
          border: '2px solid rgba(0,180,216,0.3)',
          position: 'relative', animation: 'float 6s ease-in-out infinite',
          overflow: 'hidden',
        }}>
          <img src="/logo.png" alt="Trinity Academy ID"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }} />
        </div>

        {/* Float cards */}
        {[
          { emoji: '📚', title: 'Matematika SMA', sub: 'Jadwal tersedia hari ini', pos: { top: 20, left: 0 } },
          { emoji: '⭐', title: 'Rating 4.9/5', sub: 'Dari 50+ ulasan siswa', pos: { bottom: 60, left: -20 } },
          { emoji: '🎯', title: 'Nilai Naik!', sub: '95% siswa merasakan peningkatan', pos: { top: 40, right: -10 } },
        ].map(card => (
          <div key={card.title} className="hero-card-float" style={{
            position: 'absolute', ...card.pos,
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 16, padding: '14px 18px',
            color: 'white', animation: 'float 6s ease-in-out infinite',
          }}>
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: 4 }}>{card.emoji}</span>
            <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>{card.title}</p>
            <small style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)' }}>{card.sub}</small>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @media (max-width: 768px) {
          section { flex-direction: column !important; padding: 100px 24px 60px !important; text-align: center; }
        }
      `}</style>
    </section>
  )
}

// ═══════════════════════════════════════════
//               ABOUT SECTION
// ═══════════════════════════════════════════
function About() {
  const features = [
    { icon: '🖥️', title: '100% Online', desc: 'Belajar nyaman dari rumah via Zoom atau Google Meet kapan saja.' },
    { icon: '👨‍🏫', title: 'Tutor Berpengalaman', desc: 'Semua tutor telah melalui seleksi ketat dan berpengalaman di bidangnya.' },
    { icon: '📅', title: 'Jadwal Fleksibel', desc: 'Sesuaikan jadwal belajar dengan kesibukan siswa dan orang tua.' },
    { icon: '📈', title: 'Terbukti Efektif', desc: '95% siswa kami mengalami peningkatan nilai yang signifikan.' },
  ]

  return (
    <section id="about" className="reveal" style={{ padding: '100px 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center',
        }} className="about-grid">

          <div>
            <span style={{
              display: 'inline-block', background: 'var(--gold-pale)',
              color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '6px 16px', borderRadius: 50, marginBottom: 16,
            }}>Tentang Kami</span>

            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: 'var(--navy)',
              lineHeight: 1.2, marginBottom: 16,
            }}>
              Kenapa Pilih <span style={{ color: 'var(--gold)' }}>Trinity Academy ID?</span>
            </h2>

            <p style={{ fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 36 }}>
              Trinity Academy ID adalah platform les private online yang didirikan dengan satu tujuan:
              membantu setiap siswa memahami pelajaran dengan cara yang menyenangkan, efektif, dan terjangkau.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {features.map(f => (
                <div key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, background: 'var(--gold-pale)',
                    borderRadius: 8, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0,
                  }}>{f.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>{f.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'var(--navy)', borderRadius: 16,
              padding: 32, color: 'white',
              boxShadow: 'var(--shadow)',
            }}>
              <div style={{
                fontFamily: 'Playfair Display, serif', fontSize: '1.1rem',
                fontWeight: 700, color: 'var(--gold)',
                marginBottom: 20, paddingBottom: 16,
                borderBottom: '1px solid rgba(201,168,76,0.2)',
              }}>🏆 Keunggulan Kami</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Sesi 1-on-1 yang fokus & personal',
                  'Materi disesuaikan kebutuhan siswa',
                  'Laporan perkembangan berkala',
                  'Konsultasi gratis sebelum mulai',
                  'Harga terjangkau & transparan',
                  'Tersedia untuk SD, SMP, SMA',
                ].map(item => (
                  <li key={item} style={{
                    fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)',
                    padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}>✦ {item}</li>
                ))}
              </ul>
            </div>
            <div style={{
              position: 'absolute', bottom: -24, right: -24,
              background: 'var(--gold)', color: 'var(--navy)',
              borderRadius: 16, padding: '16px 20px', textAlign: 'center',
              boxShadow: 'var(--shadow-gold)', animation: 'float 5s ease-in-out infinite',
            }}>
              <span style={{ fontSize: '1.5rem', display: 'block' }}>🎓</span>
              <p style={{ fontSize: '0.8rem', marginTop: 4 }}>Mulai dari<br /><strong>Nol Bersama</strong></p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}

// ═══════════════════════════════════════════
//             SUBJECTS PREVIEW
// ═══════════════════════════════════════════
function SubjectsPreview() {
  const [activeTab, setActiveTab] = useState('sd')

  const tabs = [
    { id: 'sd', label: '🎒 SD' },
    { id: 'smp', label: '📗 SMP' },
    { id: 'sma-ipa', label: '🔬 SMA IPA' },
    { id: 'sma-ips', label: '🌍 SMA IPS' },
  ]

  const subjects = {
    sd: [
      { icon: '🔢', title: 'Matematika', desc: 'Operasi hitung, pecahan, geometri dasar' },
      { icon: '🇬🇧', title: 'Bahasa Inggris', desc: 'Kosakata, grammar dasar, percakapan' },
      { icon: '🔬', title: 'Sains (IPA Dasar)', desc: 'Makhluk hidup, lingkungan, energi' },
      { icon: '📖', title: 'Calistung', desc: 'Baca, tulis, dan hitung untuk siswa awal' },
    ],
    smp: [
      { icon: '🔢', title: 'Matematika', desc: 'Aljabar, geometri, statistika dasar' },
      { icon: '🇬🇧', title: 'Bahasa Inggris', desc: 'Reading, writing, grammar, speaking' },
      { icon: '⚗️', title: 'IPA', desc: 'Fisika, kimia, biologi tingkat SMP' },
      { icon: '🌏', title: 'IPS', desc: 'Sejarah, geografi, ekonomi dasar' },
    ],
    'sma-ipa': [
      { icon: '🔢', title: 'Matematika', desc: 'Kalkulus, trigonometri, statistika' },
      { icon: '⚡', title: 'Fisika', desc: 'Mekanika, listrik, gelombang, optik' },
      { icon: '⚗️', title: 'Kimia', desc: 'Reaksi kimia, stoikiometri, organik' },
      { icon: '🧬', title: 'Biologi', desc: 'Sel, genetika, ekosistem, evolusi' },
      { icon: '🇬🇧', title: 'Bahasa Inggris', desc: 'TOEFL prep, essay, advanced grammar' },
    ],
    'sma-ips': [
      { icon: '💰', title: 'Ekonomi', desc: 'Mikro, makro, akuntansi dasar' },
      { icon: '🗺️', title: 'Geografi', desc: 'Peta, lingkungan, geografi regional' },
      { icon: '👥', title: 'Sosiologi', desc: 'Struktur sosial, budaya, perubahan' },
      { icon: '📜', title: 'Sejarah', desc: 'Sejarah Indonesia & dunia' },
      { icon: '🇬🇧', title: 'Bahasa Inggris', desc: 'TOEFL prep, essay, advanced grammar' },
    ],
  }

  return (
    <section id="subjects" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', background: 'var(--gold-pale)',
            color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 50, marginBottom: 16,
          }}>Mata Pelajaran</span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700, color: 'var(--navy)', marginBottom: 16,
          }}>
            Kami Mengajarkan <span style={{ color: 'var(--gold)' }}>Semua Jenjang</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-mid)', marginBottom: 40 }}>
            Pilih jenjang untuk melihat mata pelajaran yang tersedia
          </p>
        </div>

        {/* Tabs */}
        <div className="subject-tabs" style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'var(--navy)' : 'var(--white)',
                color: activeTab === tab.id ? 'var(--gold)' : 'var(--text-mid)',
                border: `2px solid ${activeTab === tab.id ? 'var(--navy)' : 'transparent'}`,
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9rem', fontWeight: 600,
                padding: '10px 24px', borderRadius: 50,
                cursor: 'pointer', transition: 'all 0.3s',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="subject-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 24, marginBottom: 40,
        }}>
          {subjects[activeTab].map((s, i) => (
            <div key={s.title}
              className="reveal"
              data-delay={i}
              style={{
                background: 'var(--white)', borderRadius: 16,
                padding: '28px 24px', textAlign: 'center',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                transition: 'all 0.3s', border: '2px solid transparent',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-gold)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
              }}
            >
              <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: 12 }}>{s.icon}</span>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{s.title}</h4>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/subjects" style={{
            display: 'inline-block',
            border: '2px solid var(--navy)', color: 'var(--navy)',
            fontWeight: 600, fontSize: '0.9rem',
            padding: '12px 32px', borderRadius: 50,
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--navy)'
              e.currentTarget.style.color = 'var(--gold)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--navy)'
            }}
          >
            Lihat Semua Mata Pelajaran →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════
//            TUTORS PREVIEW
// ═══════════════════════════════════════════
function TutorsPreview() {
  const tutors = [
    { avatar: '👩‍🏫', name: 'Sari Dewi, S.Pd', badge: 'Matematika & IPA', uni: 'Univ. Indonesia', rating: '4.9', reviews: 32, desc: '5 tahun pengalaman mengajar matematika SD–SMA.', tags: ['SD', 'SMP', 'SMA IPA'] },
    { avatar: '👨‍🏫', name: 'Budi Santoso, S.Si', badge: 'Fisika & Kimia', uni: 'ITB', rating: '4.8', reviews: 28, desc: 'Lulusan ITB dengan metode berbasis contoh nyata.', tags: ['SMP', 'SMA IPA'] },
    { avatar: '👩‍💼', name: 'Rina Putri, S.Pd', badge: 'Bahasa Inggris', uni: 'UGM', rating: '5.0', reviews: 41, desc: 'TOEFL 600+, berpengalaman academic English.', tags: ['SD', 'SMP', 'SMA'] },
    { avatar: '👨‍💼', name: 'Hendra Wijaya, S.E', badge: 'Ekonomi & IPS', uni: 'UNAIR', rating: '4.7', reviews: 19, desc: 'Pakar ekonomi dengan 4 tahun bimbel intensif.', tags: ['SMP', 'SMA IPS'] },
  ]

  return (
    <section id="tutors" style={{ padding: '100px 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', background: 'var(--gold-pale)',
            color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 50, marginBottom: 16,
          }}>Temu Tutor</span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700, color: 'var(--navy)', marginBottom: 16,
          }}>
            Kenali <span style={{ color: 'var(--gold)' }}>Tutor Kami</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-mid)', marginBottom: 48 }}>
            Tutor berpengalaman, terseleksi, dan siap membimbing dengan penuh dedikasi
          </p>
        </div>

        <div className="tutors-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24, marginBottom: 40,
        }}>
          {tutors.map((t, i) => (
            <div key={t.name}
              className="reveal"
              data-delay={i}
              style={{
                background: 'var(--cream)', borderRadius: 16,
                padding: 28, textAlign: 'center',
                border: '2px solid transparent', transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = 'var(--shadow)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                fontSize: '3.5rem', width: 80, height: 80,
                background: 'var(--gold-pale)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
              }}>{t.avatar}</div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{t.name}</h4>
              <span style={{
                display: 'inline-block', background: 'var(--navy)',
                color: 'var(--gold)', fontSize: '0.72rem', fontWeight: 600,
                padding: '4px 12px', borderRadius: 50, marginBottom: 12,
              }}>{t.badge}</span>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>🎓 {t.uni}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>⭐ {t.rating} ({t.reviews} ulasan)</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: 14 }}>{t.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 6, flexWrap: 'wrap' }}>
                {t.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'var(--gold-pale)', color: 'var(--gold)',
                    fontSize: '0.72rem', fontWeight: 600,
                    padding: '3px 10px', borderRadius: 50,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/tutors" style={{
            display: 'inline-block',
            border: '2px solid var(--navy)', color: 'var(--navy)',
            fontWeight: 600, fontSize: '0.9rem',
            padding: '12px 32px', borderRadius: 50, transition: 'all 0.3s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--navy)'
              e.currentTarget.style.color = 'var(--gold)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--navy)'
            }}
          >
            Lihat Semua Tutor →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════
//            TESTIMONIALS SECTION
// ═══════════════════════════════════════════
function Testimonials() {
  const testis = [
    { stars: '⭐⭐⭐⭐⭐', text: 'Nilai matematika anak saya naik dari 60 ke 85 hanya dalam 2 bulan! Tutornya sabar banget.', name: 'Ibu Ratna', role: 'Orang tua siswa SMP, Jakarta', avatar: '👩' },
    { stars: '⭐⭐⭐⭐⭐', text: 'Belajar fisika jadi jauh lebih mudah. Tutor selalu kasih contoh yang relate sama kehidupan sehari-hari.', name: 'Dani', role: 'Siswa SMA IPA, Surabaya', avatar: '👦' },
    { stars: '⭐⭐⭐⭐⭐', text: 'Jadwalnya fleksibel, bisa disesuaikan dengan kesibukan anak. Sangat membantu untuk persiapan ujian.', name: 'Pak Hendro', role: 'Orang tua siswa SD, Bandung', avatar: '👨' },
    { stars: '⭐⭐⭐⭐⭐', text: 'Bahasa Inggris saya meningkat drastis! Sekarang lebih percaya diri speaking di kelas.', name: 'Sinta', role: 'Siswa SMA IPS, Medan', avatar: '👧' },
    { stars: '⭐⭐⭐⭐⭐', text: 'Harganya sangat terjangkau tapi kualitas tutornya tidak kalah dengan bimbel besar. Worth it!', name: 'Ibu Susi', role: 'Orang tua siswa SMP, Yogyakarta', avatar: '👩' },
    { stars: '⭐⭐⭐⭐⭐', text: 'Anak saya yang tadinya tidak suka belajar, sekarang malah minta tambah jam les!', name: 'Pak Agus', role: 'Orang tua siswa SD, Semarang', avatar: '👨' },
  ]

  return (
    <section id="testimonials" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', background: 'var(--gold-pale)',
            color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 50, marginBottom: 16,
          }}>Testimoni</span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700, color: 'var(--navy)', marginBottom: 16,
          }}>
            Kata Mereka tentang <span style={{ color: 'var(--gold)' }}>Trinity Academy ID</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-mid)', marginBottom: 48 }}>
            Lebih dari 50 siswa telah merasakan manfaatnya
          </p>
        </div>

        <div className="testi-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {testis.map((t, i) => (
            <div key={t.name}
              className="reveal"
              data-delay={i}
              style={{
                background: 'var(--white)', borderRadius: 16,
                padding: 28, boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                transition: 'all 0.3s', borderLeft: '4px solid transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderLeftColor = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderLeftColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ fontSize: '0.9rem', marginBottom: 14 }}>{t.stars}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 20 }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 42, height: 42, background: 'var(--gold-pale)',
                  borderRadius: '50%', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                }}>{t.avatar}</div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--navy)' }}>{t.name}</strong>
                  <small style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════
//            SUGGESTIONS SECTION
// ═══════════════════════════════════════════
function Suggestions() {
  const [form, setForm] = useState({ name: '', role: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '59168487-c0ba-4ad2-9b7f-f164b57b68d3',
          subject: `Saran Baru dari ${form.name} — Trinity Academy ID`,
          from_name: form.name,
          role: form.role,
          subject_saran: form.subject,
          message: form.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setForm({ name: '', role: '', subject: '', message: '' })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        alert('Gagal mengirim saran. Coba lagi!')
      }
    } catch (error) {
      alert('Terjadi kesalahan. Periksa koneksi internet kamu.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem',
    color: 'var(--text-dark)', background: 'var(--white)',
    border: '2px solid rgba(0,0,0,0.08)', borderRadius: 8,
    padding: '12px 16px', outline: 'none',
    transition: 'border-color 0.3s', width: '100%',
  }

  return (
    <section id="suggestions" style={{ padding: '100px 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', background: 'var(--gold-pale)',
            color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 50, marginBottom: 16,
          }}>Kotak Saran</span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700, color: 'var(--navy)', marginBottom: 16,
          }}>
            Sampaikan <span style={{ color: 'var(--gold)' }}>Saran & Masukan</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-mid)', marginBottom: 48 }}>
            Kami terus berkembang. Pendapatmu sangat berarti bagi kami!
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 320px',
          gap: 48, alignItems: 'start',
        }} className="suggestion-grid">

          <form onSubmit={handleSubmit} style={{
            background: 'var(--cream)', borderRadius: 16, padding: 40,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}
              className="form-row">
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>Nama</label>
                <input style={inputStyle} placeholder="Nama kamu..." value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>Sebagai</label>
                <select style={inputStyle} value={form.role}
                  onChange={e => setForm({ ...form, role: e.target.value })}>
                  <option value="">Pilih peran...</option>
                  <option>Siswa</option>
                  <option>Orang Tua</option>
                  <option>Tutor</option>
                  <option>Lainnya</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>Subjek Saran</label>
              <input style={inputStyle} placeholder="Tentang apa?" value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })} required />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>Saran / Masukan</label>
              <textarea style={{ ...inputStyle, resize: 'vertical' }} rows={5}
                placeholder="Tuliskan saran atau masukan kamu di sini..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button type="submit"
              style={{
                background: 'var(--navy)', color: 'var(--gold)',
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
                fontWeight: 700, padding: '14px 32px',
                border: 'none', borderRadius: 50,
                cursor: loading ? 'not-allowed' : 'pointer',
                width: '100%', opacity: loading ? 0.7 : 1,
                transition: 'all 0.3s',
              }}>
              {loading ? 'Mengirim...' : 'Kirim Saran 🚀'}
            </button>
            {success && (
              <div style={{
                marginTop: 16, background: '#d4edda', color: '#155724',
                borderRadius: 8, padding: '14px 20px',
                fontSize: '0.9rem', fontWeight: 500, textAlign: 'center',
              }}>
                ✅ Terima kasih! Saran kamu telah kami terima.
              </div>
            )}
          </form>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: '💬', title: 'Hubungi Langsung', desc: 'Untuk pertanyaan cepat, langsung chat kami via WhatsApp.', link: 'https://wa.me/6281234567890', label: 'Chat WhatsApp' },
              { icon: '📧', title: 'Email Kami', desc: 'Kirim pertanyaan atau saran ke email resmi kami.', link: 'mailto:info@trinityacademy.id', label: 'Kirim Email' },
            ].map(card => (
              <div key={card.title} style={{
                background: 'var(--cream)', borderRadius: 16,
                padding: 24, textAlign: 'center',
                border: '2px solid transparent', transition: 'all 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: 10 }}>{card.icon}</span>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{card.title}</h4>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-light)', lineHeight: 1.6, marginBottom: 14 }}>{card.desc}</p>
                <a href={card.link} target="_blank" rel="noreferrer" style={{
                  display: 'inline-block', background: 'var(--navy)',
                  color: 'var(--gold)', fontSize: '0.83rem', fontWeight: 600,
                  padding: '10px 20px', borderRadius: 50, transition: 'all 0.3s',
                }}>
                  {card.label}
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .suggestion-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

// ═══════════════════════════════════════════
//               MAIN PAGE
// ═══════════════════════════════════════════
export default function Home() {
  useReveal()   // ← tambahkan ini
  return (
    <main>
      <Hero />
      <About />
      <SubjectsPreview />
      <TutorsPreview />
      <Testimonials />
      <Suggestions />
      <FloatingWA />

      <style>{`
  /* ── Hero Mobile ── */
  @media (max-width: 768px) {
    #hero {
      flex-direction: column !important;
      padding: 100px 24px 60px !important;
      text-align: center !important;
      gap: 40px !important;
    }
    #hero .hero-cta {
      justify-content: center !important;
    }
    #hero .hero-stats {
      justify-content: center !important;
    }
    #hero .hero-visual {
      width: 100% !important;
      min-height: 260px !important;
    }
    #hero .hero-card-float {
      display: none !important;
    }
  }

  /* ── About Mobile ── */
  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    .about-badge-float {
      display: none !important;
    }
  }

  /* ── Subjects Mobile ── */
  @media (max-width: 768px) {
    .subject-tabs {
      gap: 8px !important;
    }
    .subject-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 16px !important;
    }
  }
  @media (max-width: 480px) {
    .subject-grid {
      grid-template-columns: 1fr !important;
    }
  }

  /* ── Tutors Mobile ── */
  @media (max-width: 768px) {
    .tutors-grid {
      grid-template-columns: 1fr !important;
    }
  }

  /* ── Testimonials Mobile ── */
  @media (max-width: 768px) {
    .testi-grid {
      grid-template-columns: 1fr !important;
    }
  }

  /* ── Suggestions Mobile ── */
  @media (max-width: 768px) {
    .suggestion-grid {
      grid-template-columns: 1fr !important;
    }
    .form-row {
      grid-template-columns: 1fr !important;
    }
  }

  /* ── General Mobile ── */
  @media (max-width: 768px) {
    section > div {
      padding: 0 24px !important;
    }
  }
`}</style>
    </main>
  )
}