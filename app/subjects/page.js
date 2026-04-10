'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
import {
  Calculator, BookOpen, FlaskConical, PenLine,
  Globe, Zap, Microscope, DollarSign,
  Map, Network, Clock, Layers, ChevronDown, ChevronUp
} from 'lucide-react'

const levels = [
  {
    id: 'sd',
    label: 'SD',
    title: 'Sekolah Dasar',
    desc: 'Fondasi belajar yang kuat untuk siswa kelas 1–6 SD dengan pendekatan yang menyenangkan.',
    subjects: [
      { icon: <Calculator size={22} strokeWidth={1.75} />, name: 'Matematika', desc: 'Operasi hitung, pecahan, geometri dasar, pengukuran, dan penalaran logika sejak dini.', topics: ['Penjumlahan & Pengurangan', 'Perkalian & Pembagian', 'Pecahan', 'Geometri Dasar', 'Pengukuran'] },
      { icon: <BookOpen size={22} strokeWidth={1.75} />, name: 'Bahasa Inggris', desc: 'Pengenalan kosakata, grammar dasar, percakapan sehari-hari, dan lagu edukatif.', topics: ['Vocabulary', 'Simple Grammar', 'Daily Conversation', 'Reading Dasar', 'Listening'] },
      { icon: <FlaskConical size={22} strokeWidth={1.75} />, name: 'Sains (IPA Dasar)', desc: 'Pengenalan makhluk hidup, lingkungan, energi, dan fenomena alam sekitar.', topics: ['Makhluk Hidup', 'Lingkungan Hidup', 'Energi & Gerak', 'Cuaca & Iklim', 'Tubuh Manusia'] },
      { icon: <PenLine size={22} strokeWidth={1.75} />, name: 'Calistung', desc: 'Program khusus membaca, menulis, dan berhitung untuk siswa yang baru mulai belajar.', topics: ['Mengenal Huruf', 'Membaca Lancar', 'Menulis Rapi', 'Berhitung Dasar', 'Pemahaman Bacaan'] },
    ],
  },
  {
    id: 'smp',
    label: 'SMP',
    title: 'Sekolah Menengah Pertama',
    desc: 'Penguatan materi dan persiapan menghadapi ujian untuk siswa kelas 7–9 SMP.',
    subjects: [
      { icon: <Calculator size={22} strokeWidth={1.75} />, name: 'Matematika', desc: 'Aljabar, geometri, statistika dasar, dan persiapan olimpiade matematika.', topics: ['Aljabar', 'Persamaan Linear', 'Geometri', 'Statistika', 'Peluang'] },
      { icon: <BookOpen size={22} strokeWidth={1.75} />, name: 'Bahasa Inggris', desc: 'Reading comprehension, writing, grammar menengah, dan persiapan ujian nasional.', topics: ['Reading Comprehension', 'Essay Writing', 'Grammar Intermediate', 'Speaking', 'Listening'] },
      { icon: <FlaskConical size={22} strokeWidth={1.75} />, name: 'IPA', desc: 'Fisika, kimia, dan biologi tingkat SMP yang terintegrasi dan mudah dipahami.', topics: ['Fisika Dasar', 'Kimia Dasar', 'Biologi', 'Listrik', 'Ekosistem'] },
      { icon: <Globe size={22} strokeWidth={1.75} />, name: 'IPS', desc: 'Sejarah, geografi, ekonomi, dan sosiologi dasar untuk pemahaman lingkungan sosial.', topics: ['Sejarah Indonesia', 'Geografi', 'Ekonomi Dasar', 'Sosiologi', 'Kewarganegaraan'] },
    ],
  },
  {
    id: 'sma-ipa',
    label: 'SMA IPA',
    title: 'SMA — Jurusan IPA',
    desc: 'Materi mendalam untuk siswa IPA kelas 10–12 dengan persiapan UTBK dan Olimpiade Sains.',
    subjects: [
      { icon: <Calculator size={22} strokeWidth={1.75} />, name: 'Matematika', desc: 'Kalkulus, trigonometri, statistika lanjut, dan persiapan UTBK Matematika.', topics: ['Kalkulus', 'Trigonometri', 'Statistika', 'Matriks', 'Limit & Turunan'] },
      { icon: <Zap size={22} strokeWidth={1.75} />, name: 'Fisika', desc: 'Mekanika, listrik, gelombang, optik, dan persiapan olimpiade fisika.', topics: ['Mekanika', 'Termodinamika', 'Listrik & Magnet', 'Gelombang', 'Optik'] },
      { icon: <FlaskConical size={22} strokeWidth={1.75} />, name: 'Kimia', desc: 'Reaksi kimia, stoikiometri, kimia organik, dan persiapan olimpiade kimia.', topics: ['Stoikiometri', 'Reaksi Kimia', 'Kimia Organik', 'Larutan', 'Termokimia'] },
      { icon: <Microscope size={22} strokeWidth={1.75} />, name: 'Biologi', desc: 'Sel, genetika, ekosistem, evolusi, dan persiapan olimpiade biologi.', topics: ['Sel & Jaringan', 'Genetika', 'Ekosistem', 'Evolusi', 'Anatomi Manusia'] },
      { icon: <BookOpen size={22} strokeWidth={1.75} />, name: 'Bahasa Inggris', desc: 'TOEFL preparation, academic writing, advanced grammar, dan reading comprehension.', topics: ['TOEFL Prep', 'Academic Writing', 'Advanced Grammar', 'Critical Reading', 'Presentation'] },
    ],
  },
  {
    id: 'sma-ips',
    label: 'SMA IPS',
    title: 'SMA — Jurusan IPS',
    desc: 'Materi komprehensif untuk siswa IPS kelas 10–12 dengan persiapan UTBK Soshum.',
    subjects: [
      { icon: <DollarSign size={22} strokeWidth={1.75} />, name: 'Ekonomi', desc: 'Mikroekonomi, makroekonomi, akuntansi dasar, dan persiapan UTBK Ekonomi.', topics: ['Mikroekonomi', 'Makroekonomi', 'Akuntansi', 'Pasar Modal', 'Sistem Ekonomi'] },
      { icon: <Map size={22} strokeWidth={1.75} />, name: 'Geografi', desc: 'Peta, lingkungan hidup, geografi regional, dan persiapan UTBK Geografi.', topics: ['Peta & Pengindraan', 'Geografi Fisik', 'Geografi Manusia', 'Lingkungan Hidup', 'Geografi Regional'] },
      { icon: <Network size={22} strokeWidth={1.75} />, name: 'Sosiologi', desc: 'Struktur sosial, budaya, perubahan sosial, dan persiapan UTBK Sosiologi.', topics: ['Struktur Sosial', 'Interaksi Sosial', 'Budaya', 'Perubahan Sosial', 'Konflik Sosial'] },
      { icon: <Clock size={22} strokeWidth={1.75} />, name: 'Sejarah', desc: 'Sejarah Indonesia, sejarah dunia, dan persiapan UTBK Sejarah secara mendalam.', topics: ['Pra-sejarah', 'Kerajaan Nusantara', 'Kolonialisme', 'Kemerdekaan', 'Sejarah Dunia'] },
      { icon: <BookOpen size={22} strokeWidth={1.75} />, name: 'Bahasa Inggris', desc: 'TOEFL preparation, academic writing, advanced grammar, dan reading comprehension.', topics: ['TOEFL Prep', 'Academic Writing', 'Advanced Grammar', 'Critical Reading', 'Presentation'] },
    ],
  },
]

function SubjectCard({ subject }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{
      background: 'var(--white)',
      borderRadius: 16,
      border: '1.5px solid var(--border)',
      padding: '24px',
      transition: 'all 0.25s ease',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border-mid)'
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: 'var(--navy-subtle)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--navy)', flexShrink: 0,
        }}>
          {subject.icon}
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{
            fontSize: '1rem', fontWeight: 700,
            color: 'var(--navy)', marginBottom: 6,
          }}>{subject.name}</h4>
          <p style={{
            fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.6,
          }}>{subject.desc}</p>
        </div>
      </div>

      {/* Toggle */}
      <button onClick={() => setExpanded(!expanded)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600,
          fontFamily: 'DM Sans, sans-serif', padding: '4px 0',
          display: 'flex', alignItems: 'center', gap: 6,
          marginTop: 4,
        }}>
        {expanded ? (
          <>Sembunyikan Topik <ChevronUp size={14} /></>
        ) : (
          <>Lihat Topik yang Dipelajari <ChevronDown size={14} /></>
        )}
      </button>

      {/* Topics */}
      {expanded && (
        <div style={{
          marginTop: 14, padding: 16,
          background: 'var(--off-white)',
          borderRadius: 10,
        }}>
          <p style={{
            fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-mid)',
            marginBottom: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>Topik Utama</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {subject.topics.map(topic => (
              <span key={topic} style={{
                background: 'var(--white)', color: 'var(--text-mid)',
                fontSize: '0.78rem', fontWeight: 500,
                padding: '4px 12px', borderRadius: 50,
                border: '1px solid var(--border)',
              }}>{topic}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function SubjectsPage() {
  useReveal()
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
        <div className="reveal" style={{ position: 'relative' }}>
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
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.88)', maxWidth: 520, margin: '0 auto' }}>
          Dari SD hingga SMA, kami siap mendampingi perjalanan belajar dengan kurikulum yang terstruktur
        </p>
        </div>
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
                <span style={{
                  fontSize: '0.95rem', fontWeight: 700,
                  color: activeLevel === level.id ? 'var(--gold)' : 'var(--text-mid)',
                }}>
                  {level.label}
                </span>
              </button>
            ))}
          </div>

          {/* Level Info */}
          <div className="reveal" style={{
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
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.88)', maxWidth: 500 }}>
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
            gap: 20, marginBottom: 48,
            alignItems: 'start',
          }} className="stagger-children">
            {current.subjects.map(subject => (
              <SubjectCard key={subject.name} subject={subject} />
            ))}
          </div>

          {/* CTA */}
          <div style={{
            textAlign: 'center', background: 'var(--white)',
            borderRadius: 16, padding: '48px 40px',
            boxShadow: 'var(--shadow)',
          }} className="reveal">
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
                Hubungi via WhatsApp
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