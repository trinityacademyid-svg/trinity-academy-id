'use client'

import { useState } from 'react'
import Link from 'next/link'

const tutors = [
  {
    id: 1,
    avatar: '👩‍🏫',
    name: 'Sari Dewi, S.Pd',
    badge: 'Matematika & IPA',
    uni: 'Universitas Indonesia',
    rating: '4.9',
    reviews: 32,
    experience: '5 tahun',
    desc: 'Berpengalaman 5 tahun mengajar matematika SD hingga SMA. Dikenal sabar, sistematis, dan mudah dipahami oleh semua tingkat kemampuan siswa.',
    tags: ['SD', 'SMP', 'SMA IPA'],
    subjects: ['Matematika', 'IPA', 'Sains Dasar'],
    available: true,
  },
  {
    id: 2,
    avatar: '👨‍🏫',
    name: 'Budi Santoso, S.Si',
    badge: 'Fisika & Kimia',
    uni: 'Institut Teknologi Bandung',
    rating: '4.8',
    reviews: 28,
    experience: '4 tahun',
    desc: 'Lulusan ITB dengan metode pengajaran berbasis contoh nyata kehidupan sehari-hari. Fisika dan kimia jadi lebih mudah dan menyenangkan.',
    tags: ['SMP', 'SMA IPA'],
    subjects: ['Fisika', 'Kimia', 'Matematika SMA'],
    available: true,
  },
  {
    id: 3,
    avatar: '👩‍💼',
    name: 'Rina Putri, S.Pd',
    badge: 'Bahasa Inggris',
    uni: 'Universitas Gadjah Mada',
    rating: '5.0',
    reviews: 41,
    experience: '6 tahun',
    desc: 'TOEFL score 600+. Berpengalaman mengajar conversation, academic writing, dan grammar dari level dasar hingga advanced.',
    tags: ['SD', 'SMP', 'SMA'],
    subjects: ['Bahasa Inggris', 'TOEFL Prep', 'Academic Writing'],
    available: true,
  },
  {
    id: 4,
    avatar: '👨‍💼',
    name: 'Hendra Wijaya, S.E',
    badge: 'Ekonomi & IPS',
    uni: 'Universitas Airlangga',
    rating: '4.7',
    reviews: 19,
    experience: '4 tahun',
    desc: 'Pakar ekonomi dan IPS dengan pengalaman 4 tahun bimbel intensif SMA. Metode belajar terstruktur dan mudah diingat.',
    tags: ['SMP', 'SMA IPS'],
    subjects: ['Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah'],
    available: false,
  },
  {
    id: 5,
    avatar: '👩‍🔬',
    name: 'Dewi Anggraini, S.Pd',
    badge: 'Biologi & IPA',
    uni: 'Universitas Brawijaya',
    rating: '4.8',
    reviews: 23,
    experience: '3 tahun',
    desc: 'Spesialis biologi dan IPA dengan pendekatan visual dan diagram yang memudahkan siswa memahami konsep kompleks.',
    tags: ['SMP', 'SMA IPA'],
    subjects: ['Biologi', 'IPA', 'Kimia Dasar'],
    available: true,
  },
  {
    id: 6,
    avatar: '👨‍🎓',
    name: 'Rizky Pratama, S.Pd',
    badge: 'Matematika SD & SMP',
    uni: 'Universitas Negeri Jakarta',
    rating: '4.9',
    reviews: 37,
    experience: '5 tahun',
    desc: 'Spesialis matematika dasar untuk SD dan SMP. Dikenal kreatif dalam menjelaskan konsep dengan cara yang fun dan interaktif.',
    tags: ['SD', 'SMP'],
    subjects: ['Matematika', 'Calistung', 'IPA Dasar'],
    available: true,
  },
]

const filterOptions = ['Semua', 'SD', 'SMP', 'SMA IPA', 'SMA IPS']

export default function TutorsPage() {
  const [activeFilter, setActiveFilter] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = tutors.filter(t => {
    const matchFilter = activeFilter === 'Semua' || t.tags.includes(activeFilter)
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.subjects.some(s => s.toLowerCase().includes(search.toLowerCase()))
    return matchFilter && matchSearch
  })

  return (
    <main style={{ paddingTop: 80 }}>

      {/* Hero */}
      <section style={{
        background: 'var(--navy)', padding: '80px 40px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'var(--gold)', opacity: 0.05,
          top: -100, right: -100, pointerEvents: 'none',
        }} />
        <span style={{
          display: 'inline-block', background: 'rgba(0,180,216,0.15)',
          color: 'var(--gold-light)', fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '6px 16px', borderRadius: 50, marginBottom: 16,
        }}>Temu Tutor</span>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 900, color: 'white', marginBottom: 16,
        }}>
          Temukan Tutor <span style={{ color: 'var(--gold)' }}>Terbaik untuk Kamu</span>
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto 40px' }}>
          Semua tutor telah melalui seleksi ketat dan berpengalaman di bidangnya masing-masing
        </p>

        {/* Search */}
        <div style={{ maxWidth: 480, margin: '0 auto', position: 'relative' }}>
          <span style={{
            position: 'absolute', left: 18, top: '50%',
            transform: 'translateY(-50%)', fontSize: '1rem',
          }}>🔍</span>
          <input
            type="text"
            placeholder="Cari tutor atau mata pelajaran..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '14px 20px 14px 48px',
              borderRadius: 50, border: 'none', outline: 'none',
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
              background: 'white', color: 'var(--text-dark)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            }}
          />
        </div>
      </section>

      {/* Filter & Grid */}
      <section style={{ padding: '60px 40px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
            {filterOptions.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{
                  background: activeFilter === f ? 'var(--navy)' : 'var(--white)',
                  color: activeFilter === f ? 'var(--gold)' : 'var(--text-mid)',
                  border: `2px solid ${activeFilter === f ? 'var(--navy)' : 'transparent'}`,
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.9rem', fontWeight: 600,
                  padding: '10px 24px', borderRadius: 50,
                  cursor: 'pointer', transition: 'all 0.3s',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}>
                {f}
              </button>
            ))}
            <span style={{
              marginLeft: 'auto', fontSize: '0.875rem',
              color: 'var(--text-light)', alignSelf: 'center',
            }}>
              {filtered.length} tutor ditemukan
            </span>
          </div>

          {/* Tutor Cards */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: 16 }}>🔍</span>
              <p style={{ fontSize: '1rem', color: 'var(--text-mid)' }}>
                Tidak ada tutor yang sesuai. Coba kata kunci lain!
              </p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 24,
            }}>
              {filtered.map(t => (
                <div key={t.id}
                  style={{
                    background: 'var(--white)', borderRadius: 16,
                    padding: 28, border: '2px solid transparent',
                    transition: 'all 0.3s', boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
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
                  {/* Header */}
                  <div style={{ display: 'flex', gap: 16, marginBottom: 16, alignItems: 'flex-start' }}>
                    <div style={{
                      fontSize: '2.5rem', width: 64, height: 64,
                      background: 'var(--gold-pale)', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>{t.avatar}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)' }}>{t.name}</h4>
                        {t.available ? (
                          <span style={{
                            background: '#d4edda', color: '#155724',
                            fontSize: '0.65rem', fontWeight: 700,
                            padding: '2px 8px', borderRadius: 50,
                          }}>● Tersedia</span>
                        ) : (
                          <span style={{
                            background: '#f8d7da', color: '#721c24',
                            fontSize: '0.65rem', fontWeight: 700,
                            padding: '2px 8px', borderRadius: 50,
                          }}>● Penuh</span>
                        )}
                      </div>
                      <span style={{
                        display: 'inline-block', background: 'var(--navy)',
                        color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 600,
                        padding: '3px 10px', borderRadius: 50,
                      }}>{t.badge}</span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div style={{
                    display: 'flex', gap: 16, marginBottom: 12,
                    padding: '12px 0', borderTop: '1px solid rgba(0,0,0,0.05)',
                    borderBottom: '1px solid rgba(0,0,0,0.05)', flexWrap: 'wrap',
                  }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>🎓 {t.uni}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>⭐ {t.rating} ({t.reviews} ulasan)</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>📅 {t.experience}</span>
                  </div>

                  {/* Desc */}
                  <p style={{
                    fontSize: '0.85rem', color: 'var(--text-mid)',
                    lineHeight: 1.6, marginBottom: 14,
                  }}>{t.desc}</p>

                  {/* Subjects */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {t.subjects.map(s => (
                      <span key={s} style={{
                        background: 'var(--cream)', color: 'var(--text-mid)',
                        fontSize: '0.72rem', fontWeight: 500,
                        padding: '3px 10px', borderRadius: 50,
                        border: '1px solid rgba(0,0,0,0.08)',
                      }}>{s}</span>
                    ))}
                  </div>

                  {/* Tags & CTA */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {t.tags.map(tag => (
                        <span key={tag} style={{
                          background: 'var(--gold-pale)', color: 'var(--gold)',
                          fontSize: '0.68rem', fontWeight: 600,
                          padding: '3px 8px', borderRadius: 50,
                        }}>{tag}</span>
                      ))}
                    </div>
                    <a href={`https://wa.me/6281234567890?text=Halo, saya ingin belajar dengan ${t.name}`}
                      target="_blank" rel="noreferrer"
                      style={{
                        background: t.available ? 'var(--navy)' : 'rgba(0,0,0,0.1)',
                        color: t.available ? 'var(--gold)' : 'var(--text-light)',
                        fontSize: '0.78rem', fontWeight: 700,
                        padding: '8px 16px', borderRadius: 50,
                        pointerEvents: t.available ? 'auto' : 'none',
                        transition: 'all 0.3s',
                      }}>
                      {t.available ? '💬 Pilih Tutor' : 'Tidak Tersedia'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Jadi Tutor CTA */}
          <div style={{
            marginTop: 60, background: 'var(--navy)',
            borderRadius: 16, padding: '40px',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
          }}>
            <div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem', fontWeight: 700,
                color: 'white', marginBottom: 8,
              }}>Ingin Bergabung sebagai Tutor?</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                Kami selalu mencari tutor berdedikasi untuk bergabung bersama Trinity Academy ID.
              </p>
            </div>
            <a href="https://wa.me/6281234567890?text=Halo, saya ingin mendaftar sebagai tutor di Trinity Academy ID"
              target="_blank" rel="noreferrer"
              style={{
                background: 'var(--gold)', color: 'var(--navy)',
                fontWeight: 700, fontSize: '0.95rem',
                padding: '14px 32px', borderRadius: 50,
                whiteSpace: 'nowrap', transition: 'all 0.3s',
              }}>
              💬 Daftar Jadi Tutor
            </a>
          </div>

        </div>
      </section>
    </main>
  )
}