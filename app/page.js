'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Monitor, Users, Calendar, TrendingUp, Home as HomeIcon,
  Calculator, BookOpen, FlaskConical, Globe,
  Zap, Microscope, DollarSign, Map,
  Network, Clock, PenLine,
  MessageCircle, Star, Target, Mail, GraduationCap
} from 'lucide-react'

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
        zIndex: 999,
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        transition: 'opacity 0.3s, transform 0.3s',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        textDecoration: 'none',
        color: 'white',
      }}>
      <MessageCircle size={24} strokeWidth={1.75} />
    </a>
  )
}

// ═══════════════════════════════════════════
//               HERO SECTION
// ═══════════════════════════════════════════
// ═══════════════════════════════════════════
//   HERO SECTION (UPGRADED - TECH STARTUP VIBES)
// ═══════════════════════════════════════════
function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d2a63, #1565c0, #1e88e5)',
      display: 'flex', alignItems: 'center',
      padding: '120px 60px 80px',
      color: 'var(--text)',
      gap: 60, position: 'relative', overflow: 'hidden',
    }}>
      {/* 1b. Efek Radial Gradient untuk "Depth" (Cahaya tambahan) */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 70% 50%, rgba(79,195,247,0.2), transparent 50%)'
      }} />

      {/* Content */}
      <div className="reveal-left" style={{ flex: 1, maxWidth: 580, zIndex: 1 }}>
        <div className="hide-mobile" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#E0F7FA',
          fontSize: '0.85rem', fontWeight: 500,
          padding: '8px 16px', borderRadius: 50, marginBottom: 24,
          backdropFilter: 'blur(10px)'
        }}>
          Les Private & Online — Ambon
        </div>

        {/* 5. Typography (Putih + Highlight Biru Muda) */}
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
          fontWeight: 900, color: 'white',
          lineHeight: 1.15, marginBottom: 24,
        }}>
          From Ambon,<br />
          <span style={{ color: '#4FC3F7' }}>Built for</span><br />
          Better Learning.
        </h1>

        {/* Subtext Abu Terang */}
        <p style={{
          fontSize: '1.05rem', color: '#B0BEC5',
          lineHeight: 1.8, marginBottom: 36,
        }}>
          Trinity Academy hadir untuk menemani perjalanan belajar siswa SD, SMP, dan SMA —
          secara online via Zoom maupun offline dengan tutor yang datang langsung ke rumah.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
          {/* 2. Tombol CTA (Gradient Biru + Glow) */}
          <Link href="/register"
            style={{
              background: 'linear-gradient(135deg, #29B6F6, #4FC3F7)',
              color: 'white',
              fontWeight: 700, fontSize: '0.95rem',
              padding: '14px 28px', borderRadius: 50,
              boxShadow: '0 0 20px rgba(41,182,246,0.5)',
              transition: 'all 0.3s',
            }}>
            Daftar Sekarang — Gratis
          </Link>
          <Link href="/subjects" style={{
            color: '#B0BEC5', fontWeight: 500,
            fontSize: '0.95rem', transition: 'color 0.3s',
          }}
          onMouseEnter={e => e.target.style.color = 'white'}
          onMouseLeave={e => e.target.style.color = '#B0BEC5'}
          >
            Lihat Mata Pelajaran →
          </Link>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {[
            { num: '50+', label: 'Siswa Aktif' },
            { num: '10+', label: 'Tutor Pilihan' },
            { num: '6', label: 'Program Tersedia' },
          ].map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              {i > 0 && <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.15)' }} />}
              <div style={{ textAlign: 'center' }}>
                <span style={{
                  display: 'block',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2rem', fontWeight: 700, color: '#4FC3F7',
                }}>{s.num}</span>
                <span style={{ fontSize: '0.78rem', color: '#B0BEC5', fontWeight: 500 }}>
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
        {/* 4. Glow di Logo Tengah */}
        <div className="hero-logo" style={{
          width: 280, height: 280, borderRadius: '50%',
          boxShadow: '0 0 40px rgba(79,195,247,0.4), 0 0 80px rgba(41,182,246,0.2)',
          border: '1px solid rgba(255,255,255,0.1)',
          position: 'relative', animation: 'float 6s ease-in-out infinite',
          overflow: 'hidden',
        }}>
          <img src="/logo.png" alt="Trinity Academy ID"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
            }} />
        </div>

        {/* 3. Card (Glassmorphism Penuh) */}
        {[
          { icon: <BookOpen size={18} strokeWidth={1.75} />, title: 'Matematika SMA', sub: 'Jadwal tersedia hari ini', pos: { top: 20, left: 0 } },
          { icon: <Star size={18} strokeWidth={1.75} />, title: 'Rating 4.9/5', sub: 'Dari 50+ ulasan siswa', pos: { bottom: 60, left: -20 } },
          { icon: <Target size={18} strokeWidth={1.75} />, title: 'Nilai Naik!', sub: '95% siswa merasakan peningkatan', pos: { top: 40, right: -10 } },
        ].map(card => (
          <div key={card.title} className="hero-card-float hide-mobile" style={{
            position: 'absolute', ...card.pos,
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16, padding: '14px 18px',
            color: 'white', animation: 'float 6s ease-in-out infinite',
          }}>
            <div style={{ marginBottom: 6, color: '#4FC3F7' }}>{card.icon}</div>
            <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>{card.title}</p>
            <small style={{ fontSize: '0.72rem', color: '#B0BEC5' }}>{card.sub}</small>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @media (max-width: 768px) {
          #hero {
            flex-direction: column !important;
            padding: 100px 24px 60px !important;
            text-align: center !important;
            gap: 40px !important;
          }
          #hero > div:last-child {
            min-height: auto !important;
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-logo {
            width: 200px !important;
            height: 200px !important;
          }
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
    {
      icon: <Monitor size={20} strokeWidth={1.75} />,
      title: 'Belajar Online',
      desc: 'Sesi belajar via Zoom atau Google Meet — nyaman dari rumah, kapan saja.'
    },
    {
      icon: <HomeIcon size={20} strokeWidth={1.75} />,
      title: 'Home Visit',
      desc: 'Tutor datang langsung ke rumah untuk program private offline di Ambon.'
    },
    {
      icon: <Users size={20} strokeWidth={1.75} />,
      title: 'Tutor Terseleksi',
      desc: 'Semua tutor melalui seleksi ketat dan berpengalaman di bidangnya.'
    },
    {
      icon: <TrendingUp size={20} strokeWidth={1.75} />,
      title: 'Hasil Terukur',
      desc: 'Evaluasi dan test berkala untuk memastikan perkembangan belajar siswa.'
    },
  ]

  return (
    <section id="about" className="reveal" style={{ padding: '100px 0', background: 'var(--bg-alt)' }}>
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
              fontWeight: 700, color: 'var(--text)',
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
                    width: 44, height: 44,
                    background: 'var(--navy-subtle)',
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text)', flexShrink: 0,
                  }}>{f.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{f.title}</h4>
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
                  'Online via Zoom & offline home visit',
                  'Sesi 1-on-1 yang fokus & personal',
                  'Materi disesuaikan kebutuhan siswa',
                  'Trinity Learning Report (program exclusive)',
                  'Konsultasi gratis sebelum mulai',
                  'Tersedia untuk SD, SMP, SMA',
                ].map(item => (
                  <li key={item} style={{
                    fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)',
                    padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}>✦ {item}</li>
                ))}
              </ul>
            </div>
            <div className="hide-mobile" style={{
  position: 'absolute', bottom: -24, right: -24,
  background: 'var(--gold)', color: 'var(--navy)',
  borderRadius: 16, padding: '16px 20px', textAlign: 'center',
  boxShadow: 'var(--shadow-gold)', animation: 'float 5s ease-in-out infinite',
}}>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.1rem', fontWeight: 700,
                color: 'var(--navy)', lineHeight: 1.3,
              }}>From<br />Ambon.</p>
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
    { id: 'sd', label: 'SD' },
    { id: 'smp', label: 'SMP' },
    { id: 'sma-ipa', label: 'SMA IPA' },
    { id: 'sma-ips', label: 'SMA IPS' },
  ]

  const SubjectIcon = ({ type }) => {
    const icons = {
      math: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
      english: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h10M4 17h13" /></svg>,
      science: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 3v10l-5 7h16l-5-7V3" /><line x1="9" y1="3" x2="15" y2="3" /></svg>,
      read: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6z" /><path d="M12 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6z" /></svg>,
      ipa: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
      ips: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
      physics: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
      chemistry: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 3v10l-5 7h16l-5-7V3" /><line x1="9" y1="3" x2="15" y2="3" /><circle cx="9" cy="14" r="1" fill="currentColor" /><circle cx="14" cy="16" r="1" fill="currentColor" /></svg>,
      biology: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
      economy: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" /></svg>,
      geography: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
      sociology: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
      history: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
      calistung: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    }
    return icons[type] || icons.math
  }

  const subjects = {
    sd: [
      { icon: <Calculator size={22} strokeWidth={1.75} />, title: 'Matematika', desc: 'Operasi hitung, pecahan, geometri dasar' },
      { icon: <BookOpen size={22} strokeWidth={1.75} />, title: 'Bahasa Inggris', desc: 'Kosakata, grammar dasar, percakapan' },
      { icon: <FlaskConical size={22} strokeWidth={1.75} />, title: 'Sains (IPA Dasar)', desc: 'Makhluk hidup, lingkungan, energi' },
      { icon: <PenLine size={22} strokeWidth={1.75} />, title: 'Calistung', desc: 'Baca, tulis, dan hitung untuk siswa awal' },
    ],
    smp: [
      { icon: <Calculator size={22} strokeWidth={1.75} />, title: 'Matematika', desc: 'Aljabar, geometri, statistika dasar' },
      { icon: <BookOpen size={22} strokeWidth={1.75} />, title: 'Bahasa Inggris', desc: 'Reading, writing, grammar, speaking' },
      { icon: <FlaskConical size={22} strokeWidth={1.75} />, title: 'IPA', desc: 'Fisika, kimia, biologi tingkat SMP' },
      { icon: <Globe size={22} strokeWidth={1.75} />, title: 'IPS', desc: 'Sejarah, geografi, ekonomi dasar' },
    ],
    'sma-ipa': [
      { icon: <Calculator size={22} strokeWidth={1.75} />, title: 'Matematika', desc: 'Kalkulus, trigonometri, statistika' },
      { icon: <Zap size={22} strokeWidth={1.75} />, title: 'Fisika', desc: 'Mekanika, listrik, gelombang, optik' },
      { icon: <FlaskConical size={22} strokeWidth={1.75} />, title: 'Kimia', desc: 'Reaksi kimia, stoikiometri, organik' },
      { icon: <Microscope size={22} strokeWidth={1.75} />, title: 'Biologi', desc: 'Sel, genetika, ekosistem, evolusi' },
      { icon: <BookOpen size={22} strokeWidth={1.75} />, title: 'Bahasa Inggris', desc: 'TOEFL prep, essay, advanced grammar' },
    ],
    'sma-ips': [
      { icon: <DollarSign size={22} strokeWidth={1.75} />, title: 'Ekonomi', desc: 'Mikro, makro, akuntansi dasar' },
      { icon: <Map size={22} strokeWidth={1.75} />, title: 'Geografi', desc: 'Peta, lingkungan, geografi regional' },
      { icon: <Network size={22} strokeWidth={1.75} />, title: 'Sosiologi', desc: 'Struktur sosial, budaya, perubahan' },
      { icon: <Clock size={22} strokeWidth={1.75} />, title: 'Sejarah', desc: 'Sejarah Indonesia & dunia' },
      { icon: <BookOpen size={22} strokeWidth={1.75} />, title: 'Bahasa Inggris', desc: 'TOEFL prep, essay, advanced grammar' },
    ],
  }

  return (
    <section id="subjects" style={{ padding: '100px 0', background: 'var(--bg-alt)' }}>
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
            fontWeight: 700, color: 'var(--text)', marginBottom: 16,
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
              style={{
                background: 'var(--surface)', borderRadius: 16,
                padding: '28px 24px', textAlign: 'center',
                boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
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
              <div style={{
                width: 48, height: 48,
                background: 'var(--navy-subtle)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--navy)', margin: '0 auto 16px',
              }}>
                {s.icon}
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{s.title}</h4>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/subjects" style={{
            display: 'inline-block',
            border: '2px solid var(--text)', color: 'var(--text)',
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
    {
      name: 'Sari Dewi, S.Pd',
      badge: 'Matematika & IPA',
      uni: 'Univ. Indonesia',
      rating: '4.9', reviews: 32,
      desc: '5 tahun pengalaman mengajar matematika SD hingga SMA. Dikenal sabar dan mudah dipahami.',
      tags: ['SD', 'SMP', 'SMA IPA'],
      photo: 'https://ui-avatars.com/api/?name=Sari+Dewi&background=E8F0FE&color=1a3a5c&size=200&bold=true',
      available: true,
    },
    {
      name: 'Budi Santoso, S.Si',
      badge: 'Fisika & Kimia',
      uni: 'ITB',
      rating: '4.8', reviews: 28,
      desc: 'Lulusan ITB dengan metode pengajaran berbasis contoh nyata kehidupan sehari-hari.',
      tags: ['SMP', 'SMA IPA'],
      photo: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=E8F0FE&color=1a3a5c&size=200&bold=true',
      available: true,
    },
    {
      name: 'Rina Putri, S.Pd',
      badge: 'Bahasa Inggris',
      uni: 'UGM',
      rating: '5.0', reviews: 41,
      desc: 'TOEFL score 600+. Berpengalaman mengajar conversation dan academic writing.',
      tags: ['SD', 'SMP', 'SMA'],
      photo: 'https://ui-avatars.com/api/?name=Rina+Putri&background=E8F0FE&color=1a3a5c&size=200&bold=true',
      available: true,
    },
    {
      name: 'Hendra Wijaya, S.E',
      badge: 'Ekonomi & IPS',
      uni: 'UNAIR',
      rating: '4.7', reviews: 19,
      desc: 'Pakar ekonomi dan IPS dengan pengalaman 4 tahun bimbel intensif SMA.',
      tags: ['SMP', 'SMA IPS'],
      photo: 'https://ui-avatars.com/api/?name=Hendra+Wijaya&background=E8F0FE&color=1a3a5c&size=200&bold=true',
      available: false,
    },
  ]

  return (
    <section id="tutors" style={{ padding: '100px 0', background: 'var(--bg-alt)' }}>
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
            fontWeight: 700, color: 'var(--text)', marginBottom: 16,
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
                background: 'var(--surface)', borderRadius: 16,
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
              <div style={{ position: 'relative', width: 72, height: 72, margin: '0 auto 16px' }}>
                <img
                  src={t.photo}
                  alt={t.name}
                  style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border)' }}
                />
                <div style={{
                  position: 'absolute', bottom: 2, right: 2,
                  width: 12, height: 12, borderRadius: '50%',
                  background: t.available ? '#22c55e' : '#94a3b8',
                  border: '2px solid white',
                }} />
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{t.name}</h4>
              <span style={{
                display: 'inline-block', background: 'var(--navy)',
                color: 'var(--gold)', fontSize: '0.72rem', fontWeight: 600,
                padding: '4px 12px', borderRadius: 50, marginBottom: 12,
              }}>{t.badge}</span>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: 'var(--text-light)' }}>
  <GraduationCap size={12} strokeWidth={1.75} /> {t.uni}
</span>
<span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: 'var(--text-light)' }}>
  <Star size={12} strokeWidth={1.75} fill="var(--gold)" color="var(--gold)" /> {t.rating} ({t.reviews} ulasan)
</span>
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
    {
      stars: 5,
      text: 'Anak saya yang tadinya kesulitan matematika, sekarang nilainya naik signifikan. Tutornya sabar dan cara menjelaskannya mudah dipahami.',
      name: 'Ibu Margaretha',
      role: 'Orang tua siswa SMP, Ambon',
      initials: 'MR',
    },
    {
      stars: 5,
      text: 'Program home visit-nya sangat membantu. Tidak perlu keluar rumah, tutor datang tepat waktu dan materi yang diajarkan sesuai kebutuhan.',
      name: 'Pak Dominggus',
      role: 'Orang tua siswa SD, Ambon',
      initials: 'DM',
    },
    {
      stars: 5,
      text: 'Fisika SMA yang dulu saya anggap sulit sekarang jadi jauh lebih mudah. Tutornya selalu sabar menjawab pertanyaan dan memberikan latihan soal.',
      name: 'Yolanda',
      role: 'Siswa SMA IPA, Ambon',
      initials: 'YL',
    },
    {
      stars: 5,
      text: 'Jadwal les bisa disesuaikan dengan kegiatan anak. Kami sangat puas dengan pelayanan Trinity Academy, recommended!',
      name: 'Ibu Selfia',
      role: 'Orang tua siswa SMP, Ambon',
      initials: 'SF',
    },
    {
      stars: 5,
      text: 'Bahasa Inggris saya meningkat pesat sejak les di sini. Tutor selalu membuat suasana belajar menjadi menyenangkan dan tidak membosankan.',
      name: 'Kevin',
      role: 'Siswa SMA IPS, Ambon',
      initials: 'KV',
    },
    {
      stars: 5,
      text: 'Trinity Learning Report yang diberikan setiap bulan sangat membantu kami memantau perkembangan belajar anak. Terima kasih Trinity Academy!',
      name: 'Pak Samuel',
      role: 'Orang tua siswa SD, Ambon',
      initials: 'SM',
    },
  ]

  return (
    <section id="testimonials" style={{ padding: '100px 0', background: 'var(--bg-alt)' }}>
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
            fontWeight: 700, color: 'var(--text)', marginBottom: 16,
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
  <div key={i}
              style={{
                background: 'var(--surface)', borderRadius: 16,
                padding: 28, boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
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
              <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 20 }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 42, height: 42,
                  background: 'var(--navy)',
                  borderRadius: '50%', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)',
                  flexShrink: 0,
                }}>{t.initials}</div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text)' }}>{t.name}</strong>
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
          access_key: 'a5161d81-6450-4fe4-8bb9-5604706a106c',
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
    <section id="suggestions" style={{ padding: '100px 0', background: 'var(--bg-alt)' }}>
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
            fontWeight: 700, color: 'var(--text)', marginBottom: 16,
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
            background: 'var(--surface)', borderRadius: 16, padding: 40,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}
              className="form-row">
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: 8 }}>Nama</label>
                <input style={inputStyle} placeholder="Nama kamu..." value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: 8 }}>Sebagai</label>
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
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: 8 }}>Subjek Saran</label>
              <input style={inputStyle} placeholder="Tentang apa?" value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })} required />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: 8 }}>Saran / Masukan</label>
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
              {loading ? 'Mengirim...' : 'Kirim Saran '}
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
              { icon: <MessageCircle size={24} strokeWidth={1.75} />, title: 'Hubungi Langsung', desc: 'Untuk pertanyaan cepat, langsung chat kami via WhatsApp.', link: 'https://wa.me/6281234567890', label: 'Chat WhatsApp' },
              { icon: <Mail size={24} strokeWidth={1.75} />, title: 'Email Kami', desc: 'Kirim pertanyaan atau saran ke email resmi kami.', link: 'mailto:trinityacademy.id@gmail.com', label: 'Kirim Email' },
            ].map(card => (
              <div key={card.title} style={{
                background: 'var(--surface)', borderRadius: 16,
                padding: 24, textAlign: 'center',
                border: '2px solid transparent', transition: 'all 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10, color: 'var(--text)' }}>
                  {card.icon}
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{card.title}</h4>
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