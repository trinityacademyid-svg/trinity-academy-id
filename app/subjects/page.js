'use client'

import { useState } from 'react'
import Link from 'next/link'

const levels = [
  {
    id: 'sd',
    label: '🎒 SD',
    title: 'Sekolah Dasar',
    desc: 'Fondasi belajar yang kuat untuk siswa kelas 1–6 SD dengan pendekatan yang menyenangkan.',
    color: '#4CAF50',
    subjects: [
      { icon: '🔢', name: 'Matematika', desc: 'Operasi hitung, pecahan, geometri dasar, pengukuran, dan penalaran logika sejak dini.', topics: ['Penjumlahan & Pengurangan', 'Perkalian & Pembagian', 'Pecahan', 'Geometri Dasar', 'Pengukuran'] },
      { icon: '🇬🇧', name: 'Bahasa Inggris', desc: 'Pengenalan kosakata, grammar dasar, percakapan sehari-hari, dan lagu edukatif.', topics: ['Vocabulary', 'Simple Grammar', 'Daily Conversation', 'Reading Dasar', 'Listening'] },
      { icon: '🔬', name: 'Sains (IPA Dasar)', desc: 'Pengenalan makhluk hidup, lingkungan, energi, dan fenomena alam sekitar.', topics: ['Makhluk Hidup', 'Lingkungan Hidup', 'Energi & Gerak', 'Cuaca & Iklim', 'Tubuh Manusia'] },
      { icon: '📖', name: 'Calistung', desc: 'Program khusus membaca, menulis, dan berhitung untuk siswa yang baru mulai belajar.', topics: ['Mengenal Huruf', 'Membaca Lancar', 'Menulis Rapi', 'Berhitung Dasar', 'Pemahaman Bacaan'] },
    ],
  },
  {
    id: 'smp',
    label: '📗 SMP',
    title: 'Sekolah Menengah Pertama',
    desc: 'Penguatan materi dan persiapan menghadapi ujian untuk siswa kelas 7–9 SMP.',
    color: '#2196F3',
    subjects: [
      { icon: '🔢', name: 'Matematika', desc: 'Aljabar, geometri, statistika dasar, dan persiapan olimpiade matematika.', topics: ['Aljabar', 'Persamaan Linear', 'Geometri', 'Statistika', 'Peluang'] },
      { icon: '🇬🇧', name: 'Bahasa Inggris', desc: 'Reading comprehension, writing, grammar menengah, dan persiapan ujian nasional.', topics: ['Reading Comprehension', 'Essay Writing', 'Grammar Intermediate', 'Speaking', 'Listening'] },
      { icon: '⚗️', name: 'IPA', desc: 'Fisika, kimia, dan biologi tingkat SMP yang terintegrasi dan mudah dipahami.', topics: ['Fisika Dasar', 'Kimia Dasar', 'Biologi', 'Listrik', 'Ekosistem'] },
      { icon: '🌏', name: 'IPS', desc: 'Sejarah, geografi, ekonomi, dan sosiologi dasar untuk pemahaman lingkungan sosial.', topics: ['Sejarah Indonesia', 'Geografi', 'Ekonomi Dasar', 'Sosiologi', 'Kewarganegaraan'] },
    ],
  },
  {
    id: 'sma-ipa',
    label: '🔬 SMA IPA',
    title: 'SMA — Jurusan IPA',
    desc: 'Materi mendalam untuk siswa IPA kelas 10–12 dengan persiapan UTBK dan Olimpiade Sains.',
    color: '#9C27B0',
    subjects: [
      { icon: '🔢', name: 'Matematika', desc: 'Kalkulus, trigonometri, statistika lanjut, dan persiapan UTBK Matematika.', topics: ['Kalkulus', 'Trigonometri', 'Statistika', 'Matriks', 'Limit & Turunan'] },
      { icon: '⚡', name: 'Fisika', desc: 'Mekanika, listrik, gelombang, optik, dan persiapan olimpiade fisika.', topics: ['Mekanika', 'Termodinamika', 'Listrik & Magnet', 'Gelombang', 'Optik'] },
      { icon: '⚗️', name: 'Kimia', desc: 'Reaksi kimia, stoikiometri, kimia organik, dan persiapan olimpiade kimia.', topics: ['Stoikiometri', 'Reaksi Kimia', 'Kimia Organik', 'Larutan', 'Termokimia'] },
      { icon: '🧬', name: 'Biologi', desc: 'Sel, genetika, ekosistem, evolusi, dan persiapan olimpiade biologi.', topics: ['Sel & Jaringan', 'Genetika', 'Ekosistem', 'Evolusi', 'Anatomi Manusia'] },
      { icon: '🇬🇧', name: 'Bahasa Inggris', desc: 'TOEFL preparation, academic writing, advanced grammar, dan reading comprehension.', topics: ['TOEFL Prep', 'Academic Writing', 'Advanced Grammar', 'Critical Reading', 'Presentation'] },
    ],
  },
  {
    id: 'sma-ips',
    label: '🌍 SMA IPS',
    title: 'SMA — Jurusan IPS',
    desc: 'Materi komprehensif untuk siswa IPS kelas 10–12 dengan persiapan UTBK Soshum.',
    color: '#FF9800',
    subjects: [
      { icon: '💰', name: 'Ekonomi', desc: 'Mikroekonomi, makroekonomi, akuntansi dasar, dan persiapan UTBK Ekonomi.', topics: ['Mikroekonomi', 'Makroekonomi', 'Akuntansi', 'Pasar Modal', 'Sistem Ekonomi'] },
      { icon: '🗺️', name: 'Geografi', desc: 'Peta, lingkungan hidup, geografi regional, dan persiapan UTBK Geografi.', topics: ['Peta & Pengindraan', 'Geografi Fisik', 'Geografi Manusia', 'Lingkungan Hidup', 'Geografi Regional'] },
      { icon: '👥', name: 'Sosiologi', desc: 'Struktur sosial, budaya, perubahan sosial, dan persiapan UTBK Sosiologi.', topics: ['Struktur Sosial', 'Interaksi Sosial', 'Budaya', 'Perubahan Sosial', 'Konflik Sosial'] },
      { icon: '📜', name: 'Sejarah', desc: 'Sejarah Indonesia, sejarah dunia, dan persiapan UTBK Sejarah secara mendalam.', topics: ['Pra-sejarah', 'Kerajaan Nusantara', 'Kolonialisme', 'Kemerdekaan', 'Sejarah Dunia'] },
      { icon: '🇬🇧', name: 'Bahasa Inggris', desc: 'TOEFL preparation, academic writing, advanced grammar, dan reading comprehension.', topics: ['TOEFL Prep', 'Academic Writing', 'Advanced Grammar', 'Critical Reading', 'Presentation'] },
    ],
  },
]

function SubjectCard({ subject }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{
      background: 'var(--white)', borderRadius: 16,
      padding: 24, border: '2px solid transparent',
      transition: 'all 0.3s', boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--gold)'
        e.currentTarget.style.boxShadow = 'var(--shadow-gold)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'transparent'
        e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
        <span style={{
          fontSize: '2rem', width: 52, height: 52,
          background: 'var(--gold-pale)', borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>{subject.icon}</span>
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>
            {subject.name}
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
            {subject.desc}
          </p>
        </div>
      </div>

      <button onClick={() => setExpanded(!expanded)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600,
          fontFamily: 'DM Sans, sans-serif', padding: '4px 0',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
        {expanded ? 'Sembunyikan Topik ▲' : 'Lihat Topik yang Dipelajari ▼'}
      </button>

      {expanded && (
        <div style={{
          marginTop: 12, padding: 16,
          background: 'var(--cream)', borderRadius: 10,
        }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', marginBottom: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Topik Utama
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {subject.topics.map(topic => (
              <span key={topic} style={{
                background: 'var(--white)', color: 'var(--text-mid)',
                fontSize: '0.78rem', fontWeight: 500,
                padding: '4px 12px', borderRadius: 50,
                border: '1px solid rgba(0,0,0,0.08)',
              }}>{topic}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function SubjectsPage() {
  const [activeLevel, setActiveLevel] = useState('sd')
  const current = levels.find(l => l.id === activeLevel)

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
          top: -100, left: -100, pointerEvents: 'none',
        }} />
        <span style={{
          display: 'inline-block', background: 'rgba(0,180,216,0.15)',
          color: 'var(--gold-light)', fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '6px 16px', borderRadius: 50, marginBottom: 16,
        }}>Mata Pelajaran</span>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 900, color: 'white', marginBottom: 16,
        }}>
          Semua Mata Pelajaran <span style={{ color: 'var(--gold)' }}>Tersedia</span>
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto' }}>
          Dari SD hingga SMA, kami siap mendampingi perjalanan belajar dengan kurikulum yang terstruktur
        </p>
      </section>

      {/* Level Selector */}
      <section style={{ padding: '60px 40px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Level Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16, marginBottom: 48,
          }}>
            {levels.map(level => (
              <button key={level.id} onClick={() => setActiveLevel(level.id)}
                style={{
                  background: activeLevel === level.id ? 'var(--navy)' : 'var(--white)',
                  color: activeLevel === level.id ? 'var(--gold)' : 'var(--text-mid)',
                  border: `2px solid ${activeLevel === level.id ? 'var(--gold)' : 'transparent'}`,
                  borderRadius: 16, padding: '20px 16px',
                  cursor: 'pointer', transition: 'all 0.3s',
                  fontFamily: 'DM Sans, sans-serif',
                  boxShadow: activeLevel === level.id ? 'var(--shadow-gold)' : 'var(--shadow)',
                  textAlign: 'center',
                }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: 8 }}>
                  {level.label.split(' ')[0]}
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>
                  {level.label.split(' ').slice(1).join(' ')}
                </span>
              </button>
            ))}
          </div>

          {/* Level Info */}
          <div style={{
            background: 'var(--navy)', borderRadius: 16,
            padding: '32px 40px', marginBottom: 40,
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          }}>
            <div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.6rem', fontWeight: 700,
                color: 'white', marginBottom: 8,
              }}>{current.title}</h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', maxWidth: 500 }}>
                {current.desc}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{
                  display: 'block', fontFamily: 'Playfair Display, serif',
                  fontSize: '2rem', fontWeight: 700, color: 'var(--gold)',
                }}>{current.subjects.length}</span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>Mata Pelajaran</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{
                  display: 'block', fontFamily: 'Playfair Display, serif',
                  fontSize: '2rem', fontWeight: 700, color: 'var(--gold)',
                }}>
                  {current.subjects.reduce((acc, s) => acc + s.topics.length, 0)}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>Total Topik</span>
              </div>
            </div>
          </div>

          {/* Subject Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 24, marginBottom: 48,
          }}>
            {current.subjects.map(subject => (
              <SubjectCard key={subject.name} subject={subject} />
            ))}
          </div>

          {/* CTA */}
          <div style={{
            textAlign: 'center', background: 'var(--white)',
            borderRadius: 16, padding: '48px 40px',
            boxShadow: 'var(--shadow)',
          }}>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.5rem', fontWeight: 700,
              color: 'var(--navy)', marginBottom: 12,
            }}>
              Tidak menemukan mata pelajaran yang kamu cari?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginBottom: 28 }}>
              Hubungi kami! Kami akan berusaha menyediakan tutor sesuai kebutuhanmu.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                style={{
                  background: 'var(--navy)', color: 'var(--gold)',
                  fontWeight: 700, fontSize: '0.95rem',
                  padding: '14px 32px', borderRadius: 50,
                  transition: 'all 0.3s',
                }}>
                💬 Hubungi via WhatsApp
              </a>
              <Link href="/tutors"
                style={{
                  border: '2px solid var(--navy)', color: 'var(--navy)',
                  fontWeight: 600, fontSize: '0.95rem',
                  padding: '14px 32px', borderRadius: 50,
                  transition: 'all 0.3s',
                }}>
                Lihat Semua Tutor →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}