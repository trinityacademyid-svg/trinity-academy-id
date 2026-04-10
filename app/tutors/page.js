'use client'

import { useState, useEffect } from 'react'
import { Search, GraduationCap, Star, BookOpen, Filter, MessageCircle } from 'lucide-react'

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' })
    document.querySelectorAll('.reveal, .stagger-children').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const tutors = [
  { id: 1, name: 'Sari Dewi, S.Pd', badge: 'Matematika & IPA', uni: 'Universitas Indonesia', rating: '4.9', reviews: 32, desc: 'Berpengalaman 5 tahun mengajar matematika SD hingga SMA. Dikenal sabar dan mudah dipahami.', tags: ['SD', 'SMP', 'SMA IPA'], subjects: ['Matematika', 'IPA', 'Sains Dasar'], available: true, photo: 'https://ui-avatars.com/api/?name=Sari+Dewi&background=E8F0FE&color=1a3a5c&size=200&bold=true' },
  { id: 2, name: 'Budi Santoso, S.Si', badge: 'Fisika & Kimia', uni: 'Institut Teknologi Bandung', rating: '4.8', reviews: 28, desc: 'Lulusan ITB dengan metode pengajaran berbasis contoh nyata kehidupan sehari-hari.', tags: ['SMP', 'SMA IPA'], subjects: ['Fisika', 'Kimia', 'Matematika SMA'], available: true, photo: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=E8F0FE&color=1a3a5c&size=200&bold=true' },
  { id: 3, name: 'Rina Putri, S.Pd', badge: 'Bahasa Inggris', uni: 'Universitas Gadjah Mada', rating: '5.0', reviews: 41, desc: 'TOEFL score 600+. Berpengalaman mengajar conversation dan academic writing.', tags: ['SD', 'SMP', 'SMA'], subjects: ['Bahasa Inggris', 'TOEFL Prep', 'Academic Writing'], available: true, photo: 'https://ui-avatars.com/api/?name=Rina+Putri&background=E8F0FE&color=1a3a5c&size=200&bold=true' },
  { id: 4, name: 'Hendra Wijaya, S.E', badge: 'Ekonomi & IPS', uni: 'Universitas Airlangga', rating: '4.7', reviews: 19, desc: 'Pakar ekonomi dan IPS dengan pengalaman 4 tahun bimbel intensif SMA.', tags: ['SMP', 'SMA IPS'], subjects: ['Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah'], available: false, photo: 'https://ui-avatars.com/api/?name=Hendra+Wijaya&background=E8F0FE&color=1a3a5c&size=200&bold=true' },
  { id: 5, name: 'Dewi Anggraini, S.Pd', badge: 'Biologi & IPA', uni: 'Universitas Brawijaya', rating: '4.8', reviews: 23, desc: 'Spesialis biologi dan IPA dengan pendekatan visual yang memudahkan siswa memahami konsep kompleks.', tags: ['SMP', 'SMA IPA'], subjects: ['Biologi', 'IPA', 'Kimia Dasar'], available: true, photo: 'https://ui-avatars.com/api/?name=Dewi+Anggraini&background=E8F0FE&color=1a3a5c&size=200&bold=true' },
  { id: 6, name: 'Rizky Pratama, S.Pd', badge: 'Matematika SD & SMP', uni: 'Universitas Negeri Jakarta', rating: '4.9', reviews: 37, desc: 'Spesialis matematika dasar untuk SD dan SMP. Kreatif dan interaktif dalam mengajar.', tags: ['SD', 'SMP'], subjects: ['Matematika', 'Calistung', 'IPA Dasar'], available: true, photo: 'https://ui-avatars.com/api/?name=Rizky+Pratama&background=E8F0FE&color=1a3a5c&size=200&bold=true' },
]

const filterOptions = ['Semua', 'SD', 'SMP', 'SMA IPA', 'SMA IPS']

function waMsg(name) {
  return 'https://wa.me/6281234567890?text=Halo%20Trinity%20Academy!%20Saya%20tertarik%20dengan%20tutor%20' + encodeURIComponent(name)
}

function TutorCard({ tutor }) {
  return (
    <div
      style={{ background: 'var(--white)', borderRadius: 16, border: '1.5px solid var(--border)', overflow: 'hidden', transition: 'all 0.25s ease' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      <div style={{ padding: '24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img src={tutor.photo} alt={tutor.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border)' }} />
          <div style={{ position: 'absolute', bottom: 2, right: 2, width: 12, height: 12, borderRadius: '50%', background: tutor.available ? '#22c55e' : '#94a3b8', border: '2px solid white' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>{tutor.name}</h4>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, color: tutor.available ? '#16a34a' : '#94a3b8', background: tutor.available ? '#dcfce7' : '#f1f5f9', padding: '2px 8px', borderRadius: 50 }}>
              {tutor.available ? 'Tersedia' : 'Penuh'}
            </span>
          </div>
          <span style={{ display: 'inline-block', background: 'var(--navy)', color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 600, padding: '3px 10px', borderRadius: 50, marginBottom: 8 }}>
            {tutor.badge}
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: 'var(--text-light)' }}>
              <GraduationCap size={12} strokeWidth={1.75} />{tutor.uni}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: 'var(--text-light)' }}>
              <Star size={12} strokeWidth={1.75} />{tutor.rating} ({tutor.reviews} ulasan)
            </span>
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: 'var(--border)', margin: '0 24px' }} />

      <div style={{ padding: '16px 24px 24px' }}>
        <p style={{ fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.65, marginBottom: 14 }}>{tutor.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {tutor.subjects.map(s => (
            <span key={s} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'var(--off-white)', color: 'var(--text-mid)', fontSize: '0.72rem', fontWeight: 500, padding: '3px 10px', borderRadius: 50, border: '1px solid var(--border)' }}>
              <BookOpen size={10} strokeWidth={1.75} />{s}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {tutor.tags.map(tag => (
              <span key={tag} style={{ background: 'var(--gold-pale)', color: 'var(--gold)', fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: 50 }}>{tag}</span>
            ))}
          </div>
          
          <a
            href={tutor.available ? waMsg(tutor.name) : undefined}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: tutor.available ? 'var(--navy)' : 'var(--border)', color: tutor.available ? 'white' : 'var(--text-light)', fontSize: '0.75rem', fontWeight: 600, padding: '8px 16px', borderRadius: 50, pointerEvents: tutor.available ? 'auto' : 'none', transition: 'all 0.2s', whiteSpace: 'nowrap', textDecoration: 'none' }}
            onMouseEnter={e => { if (tutor.available) e.currentTarget.style.background = 'var(--navy-light)' }}
            onMouseLeave={e => { if (tutor.available) e.currentTarget.style.background = 'var(--navy)' }}
          >
            <MessageCircle size={12} strokeWidth={1.75} />
            {tutor.available ? 'Pilih Tutor' : 'Tidak Tersedia'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function TutorsPage() {
  useReveal()
  const [activeFilter, setActiveFilter] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = tutors.filter(t => {
    const matchFilter = activeFilter === 'Semua' || t.tags.includes(activeFilter)
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.subjects.some(s => s.toLowerCase().includes(search.toLowerCase()))
    return matchFilter && matchSearch
  })

  return (
    <main style={{ paddingTop: 68 }}>
      <section style={{ background: 'var(--navy)', padding: '72px 40px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top, rgba(201,168,76,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="reveal" style={{ position: 'relative' }}>
          <p className="label">Temu Tutor</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: 'white', marginBottom: 12 }}>
            Temukan Tutor <span style={{ color: 'var(--gold)' }}>Terbaik</span>
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', maxWidth: 480, margin: '0 auto 36px' }}>
            Semua tutor telah melalui seleksi ketat. Admin kami akan membantu mencocokkan tutor terbaik untukmu.
          </p>
          <div style={{ maxWidth: 480, margin: '0 auto', position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.6)', pointerEvents: 'none' }} />
            <input
              type="text"
              placeholder="Cari tutor atau mata pelajaran..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: '14px 20px 14px 46px', borderRadius: 50, border: '1.5px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.07)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: 'white', outline: 'none' }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 40px 80px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-light)', fontSize: '0.82rem', marginRight: 4 }}>
              <Filter size={14} strokeWidth={1.75} />Filter
            </div>
            {filterOptions.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{ background: activeFilter === f ? 'var(--navy)' : 'var(--white)', color: activeFilter === f ? 'var(--white)' : 'var(--text-mid)', border: '1.5px solid ' + (activeFilter === f ? 'var(--navy)' : 'var(--border)'), fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', fontWeight: 500, padding: '7px 18px', borderRadius: 50, cursor: 'pointer', transition: 'all 0.2s' }}>
                {f}
              </button>
            ))}
            <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-mid)' }}>{filtered.length} tutor ditemukan</span>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontSize: '1rem', color: 'var(--text-mid)' }}>Tidak ada tutor yang sesuai.</p>
            </div>
          ) : (
            <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
              {filtered.map(t => <TutorCard key={t.id} tutor={t} />)}
            </div>
          )}

          <div className="reveal" style={{ marginTop: 64, background: 'var(--white)', borderRadius: 20, border: '1.5px solid var(--border)', padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Ingin Bergabung sebagai Tutor?</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)' }}>Kami selalu mencari tutor berdedikasi untuk bergabung bersama Trinity Academy.</p>
            </div>
            
            <a
              href="https://wa.me/6281234567890?text=Halo%20Trinity%20Academy!%20Saya%20ingin%20mendaftar%20sebagai%20tutor."
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--navy)', color: 'white', fontWeight: 600, fontSize: '0.875rem', padding: '12px 28px', borderRadius: 50, textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy-light)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy)' }}
            >
              <MessageCircle size={15} strokeWidth={1.75} />
              Daftar Jadi Tutor
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}