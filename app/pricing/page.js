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
  Users, BookOpen, Target, Layers,
  Crown, Home as HomeIcon, MessageCircle,
  Check, Star, Calendar, UserCheck
} from 'lucide-react'

const includedAll = [
  'Tutor berpengalaman di bidangnya',
  'E-Certificate sebagai bukti penyelesaian program',
  'Evaluasi / test berkala untuk mengukur pemahaman siswa',
]

const onlinePrograms = [
  {
    id: 'baguala',
    name: 'Baguala Prime',
    type: 'Basic Program',
    schedule: '4 sesi / bulan',
    format: 'Grup (3–5 siswa)',
    normalPrice: 'Rp100.000',
    promoPrice: 'Rp50.000',
    popular: false, exclusive: false,
    icon: <Users size={20} strokeWidth={1.75} />,
    benefits: [
      'Materi mengikuti pelajaran sekolah',
      'Lingkungan belajar bersama yang interaktif',
      'Evaluasi sederhana setiap sesi',
      'E-Certificate penyelesaian program',
    ],
  },
  {
    id: 'latuhalat',
    name: 'Latuhalat Prime',
    type: 'Basic Program',
    schedule: '8 sesi / bulan',
    format: 'Small group / semi-private',
    normalPrice: 'Rp200.000',
    promoPrice: 'Rp100.000',
    popular: false, exclusive: false,
    icon: <BookOpen size={20} strokeWidth={1.75} />,
    benefits: [
      'Materi terarah sesuai kebutuhan sekolah',
      'Latihan soal di setiap sesi',
      'Pendampingan lebih intens',
      'E-Certificate penyelesaian program',
    ],
  },
  {
    id: 'hative',
    name: 'Hative Prime',
    type: 'Basic Program',
    schedule: '8 sesi / bulan',
    format: 'Private (1-on-1, online)',
    normalPrice: 'Rp250.000',
    promoPrice: 'Rp125.000',
    popular: true, exclusive: false,
    icon: <Target size={20} strokeWidth={1.75} />,
    benefits: [
      'Sesi belajar personal (1-on-1)',
      'Orang tua dapat memilih tutor',
      'Materi disesuaikan kebutuhan anak',
      'Konsultasi PR di luar sesi',
      'Evaluasi perkembangan berkala',
      'E-Certificate penyelesaian program',
    ],
  },
  {
    id: 'passo',
    name: 'Passo Prime',
    type: 'Basic Program',
    schedule: '8 sesi / bulan',
    format: 'Private / semi-private',
    normalPrice: 'Rp275.000',
    promoPrice: 'Rp135.000',
    popular: false, exclusive: false,
    icon: <Layers size={20} strokeWidth={1.75} />,
    benefits: [
      'Modul belajar terstruktur',
      'Latihan dan pembahasan intensif',
      'Evaluasi dan test berkala',
      'E-Certificate penyelesaian program',
    ],
  },
]

const exclusivePrograms = [
  {
    id: 'lelemuku',
    name: 'Lelemuku Prime',
    type: 'Exclusive Intensive Program',
    schedule: '12 sesi / bulan',
    format: 'Private (1-on-1, online)',
    normalPrice: 'Rp300.000',
    promoPrice: 'Rp150.000',
    popular: false, exclusive: true,
    icon: <Crown size={20} strokeWidth={1.75} />,
    benefits: [
      'Fleksibilitas jadwal penuh',
      'Pilihan tutor sesuai kebutuhan',
      'Program belajar personal',
      'Latihan dan pembahasan intensif',
      'Konsultasi PR & diskusi tambahan',
      'Evaluasi dan test berkala',
      'Trinity Learning Report',
      'E-Certificate penyelesaian program',
    ],
  },
  {
    id: 'siwalima',
    name: 'Siwalima Prime',
    type: 'Exclusive Intensive Program',
    schedule: '16 sesi / bulan',
    format: 'Private (tutor ke rumah)',
    normalPrice: 'Rp350.000',
    promoPrice: 'Rp175.000',
    popular: false, exclusive: true,
    icon: <HomeIcon size={20} strokeWidth={1.75} />,
    benefits: [
      'Tutor datang langsung ke rumah',
      'Pilihan tutor sesuai kebutuhan',
      'Jadwal fleksibel',
      'Bantuan PR langsung saat sesi',
      'Evaluasi dan test berkala',
      'Trinity Learning Report',
      'Konsultasi orang tua',
      'E-Certificate penyelesaian program',
    ],
  },
]

const faqs = [
  { q: 'Bagaimana cara mendaftar?', a: 'Hubungi kami via WhatsApp atau isi form pendaftaran di website. Tim kami akan menghubungi kamu untuk konsultasi awal.' },
  { q: 'Apakah ada biaya pendaftaran?', a: 'Tidak ada! Konsultasi awal 100% gratis. Kamu hanya membayar program yang dipilih.' },
  { q: 'Apa itu Trinity Learning Report?', a: 'Laporan perkembangan belajar siswa yang diberikan secara berkala, berisi evaluasi pemahaman, catatan tutor, dan rekomendasi ke depan. Tersedia untuk program exclusive.' },
  { q: 'Apakah bisa memilih tutor sendiri?', a: 'Ya! Untuk program private, orang tua bisa memilih tutor melalui Trinity Tutor Book yang berisi profil lengkap setiap tutor.' },
  { q: 'Apa perbedaan Online Program dan Private Program?', a: 'Online Program cocok untuk dukungan pelajaran sekolah dengan harga lebih terjangkau. Private Program (Exclusive) menawarkan pengalaman belajar yang lebih personal dan komprehensif.' },
  { q: 'Apakah tersedia untuk semua jenjang?', a: 'Ya! Kami melayani siswa SD, SMP, dan SMA untuk semua mata pelajaran utama.' },
]

function ProgramCard({ program }) {
  return (
    <div style={{
      background: program.popular
        ? 'var(--navy)'
        : program.exclusive
          ? 'var(--navy-mid)'
          : 'var(--bg)',
      borderRadius: 20,
      border: program.popular
        ? '2px solid var(--gold)'
        : program.exclusive
          ? '1.5px solid rgba(201,168,76,0.25)'
          : '1.5px solid var(--border)',
      padding: '32px 28px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.25s ease',
      height: '100%',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = program.popular || program.exclusive
          ? '0 16px 48px rgba(0,0,0,0.25)'
          : 'var(--shadow)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Badge */}
      {program.popular && (
        <div style={{
          position: 'absolute', top: 20, right: 20,
          background: 'var(--gold)', color: 'var(--navy)',
          fontSize: '0.65rem', fontWeight: 800,
          padding: '4px 10px', borderRadius: 50,
          letterSpacing: '0.08em',
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <Star size={10} fill="currentColor" /> BEST VALUE
        </div>
      )}
      {program.exclusive && (
        <div style={{
          position: 'absolute', top: 20, right: 20,
          background: 'var(--gold)', color: 'var(--navy)',
          fontSize: '0.65rem', fontWeight: 800,
          padding: '4px 10px', borderRadius: 50,
          letterSpacing: '0.08em',
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <Crown size={10} /> EXCLUSIVE
        </div>
      )}

      {/* Icon */}
      <div style={{
        width: 44, height: 44,
        borderRadius: 12,
        background: program.popular || program.exclusive
          ? 'rgba(201,168,76,0.15)'
          : 'var(--navy-subtle)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: program.popular || program.exclusive ? 'var(--gold)' : 'var(--white)',
        marginBottom: 20,
      }}>
        {program.icon}
      </div>

      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.2rem', fontWeight: 700,
          color: program.popular || program.exclusive ? 'white' : 'var(--white)',
          marginBottom: 6,
        }}>{program.name}</h3>
        <span style={{
          display: 'inline-block',
          background: program.popular || program.exclusive
            ? 'rgba(255,255,255,0.08)'
            : 'var(--navy-subtle)',
          color: program.popular || program.exclusive
            ? 'rgba(255,255,255,0.6)'
            : 'var(--text-mid)',
          fontSize: '0.72rem', fontWeight: 500,
          padding: '3px 10px', borderRadius: 50,
        }}>{program.type}</span>
      </div>

      {/* Schedule & Format */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 8,
        marginBottom: 20,
        paddingBottom: 20,
        borderBottom: `1px solid ${program.popular || program.exclusive
          ? 'rgba(255,255,255,0.08)'
          : 'var(--border)'}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Calendar size={14} strokeWidth={1.75}
            color={program.popular || program.exclusive ? 'rgba(255,255,255,0.4)' : 'var(--text-light)'} />
          <span style={{
            fontSize: '0.8rem',
            color: program.popular || program.exclusive ? 'rgba(255,255,255,0.6)' : 'var(--text-mid)',
          }}>{program.schedule}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <UserCheck size={14} strokeWidth={1.75}
            color={program.popular || program.exclusive ? 'rgba(255,255,255,0.4)' : 'var(--text-light)'} />
          <span style={{
            fontSize: '0.8rem',
            color: program.popular || program.exclusive ? 'rgba(255,255,255,0.6)' : 'var(--text-mid)',
          }}>{program.format}</span>
        </div>
      </div>

      {/* Harga */}
      <div style={{
        background: program.popular || program.exclusive
          ? 'rgba(201,168,76,0.1)'
          : 'var(--navy-subtle)',
        borderRadius: 12,
        padding: '14px 16px',
        marginBottom: 20,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginBottom: 6,
        }}>
          <span style={{
            fontSize: '0.72rem', fontWeight: 600,
            color: program.popular || program.exclusive ? 'rgba(255,255,255,0.4)' : 'var(--text-light)',
            textDecoration: 'line-through',
          }}>Harga Normal: {program.normalPrice}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.5rem', fontWeight: 700,
            color: 'var(--gold)',
          }}>{program.promoPrice}</span>
          <span style={{
            fontSize: '0.75rem',
            color: program.popular || program.exclusive ? 'rgba(255,255,255,0.5)' : 'var(--text-light)',
          }}>/bulan</span>
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          background: '#22c55e20', color: '#16a34a',
          fontSize: '0.68rem', fontWeight: 700,
          padding: '2px 8px', borderRadius: 50,
          marginTop: 6,
        }}>
          <Star size={9} fill="currentColor" /> Soft Opening — Hemat 50%
        </div>
      </div>

      {/* Benefits */}
      <ul style={{
        display: 'flex', flexDirection: 'column', gap: 10,
        marginBottom: 28, flex: 1,
      }}>
        {program.benefits.map(b => (
          <li key={b} style={{
            display: 'flex', alignItems: 'flex-start', gap: 10,
            fontSize: '0.83rem',
            color: program.popular || program.exclusive
              ? 'rgba(255,255,255,0.75)'
              : 'var(--text-mid)',
            lineHeight: 1.5,
          }}>
            <Check size={14} strokeWidth={2}
              style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
            {b}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href={`https://wa.me/6281234567890?text=Halo Trinity Academy! Saya tertarik dengan ${program.name}.`}
        target="_blank" rel="noreferrer"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          background: program.popular
            ? 'var(--gold)'
            : program.exclusive
              ? 'var(--gold)'
              : 'var(--navy)',
          color: program.popular || program.exclusive ? 'var(--navy)' : 'white',
          fontWeight: 600, fontSize: '0.875rem',
          padding: '13px', borderRadius: 50,
          transition: 'all 0.25s', marginTop: 'auto',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.opacity = '0.88'
          e.currentTarget.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.opacity = '1'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <MessageCircle size={15} strokeWidth={1.75} />
        Daftar Program Ini
      </a>
    </div >
  )
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      background: 'var(--cream)', borderRadius: 12,
      border: `2px solid ${open ? 'var(--gold)' : 'transparent'}`,
      overflow: 'hidden', transition: 'all 0.3s',
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 24px', background: 'none', border: 'none',
        cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy)' }}>{q}</span>
        <span style={{
          color: 'var(--gold)', fontSize: '1.2rem',
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
          transition: 'transform 0.3s', flexShrink: 0, marginLeft: 12,
        }}>▾</span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 18px' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function PricingPage() {
  useReveal()
  return (
    <main style={{ paddingTop: 80 }}>

      {/* Hero */}
      <section style={{
        background: 'var(--navy)', padding: '80px 40px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'var(--gold)', opacity: 0.04,
          top: -150, right: -150, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: 'var(--gold)', opacity: 0.04,
          bottom: -100, left: -100, pointerEvents: 'none',
        }} />
        <div className="reveal">
        <span style={{
          display: 'inline-block', background: 'rgba(201,168,76,0.15)',
          color: 'var(--gold-light)', fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '6px 16px', borderRadius: 50, marginBottom: 16,
        }}>Program & Harga</span>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 900, color: 'white', marginBottom: 16,
        }}>
          Trinity Academy <span style={{ color: 'var(--gold)' }}>Program</span>
        </h1>
        <p style={{
          fontSize: '1rem', color: 'rgba(255,255,255,0.88)',
          maxWidth: 520, margin: '0 auto 8px',
        }}>
          From Ambon, built for better learning.
        </p>
        <p style={{
          fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)',
          maxWidth: 520, margin: '0 auto',
        }}>
          Konsultasi gratis — hubungi kami untuk info harga terbaru
        </p>
        </div>
      </section>

      {/* Included in All */}
      <section style={{ padding: '48px 40px', background: 'var(--gold)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'flex', alignItems: 'center',
            flexWrap: 'wrap', gap: 24,
          }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1rem', fontWeight: 700,
              color: 'var(--navy)', whiteSpace: 'nowrap',
            }}>Semua Program Termasuk:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, flex: 1 }}>
              {includedAll.map(item => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(10,22,40,0.12)',
                  padding: '8px 16px', borderRadius: 50,
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold)', display: 'flex', alignItems: 'center' }}><Check size={12} strokeWidth={2} /></span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Online Programs */}
      <section style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{
              display: 'inline-block', background: 'var(--gold-pale)',
              color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '6px 16px', borderRadius: 50, marginBottom: 16,
            }}>Online Program</span>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700, color: 'var(--white)',
            }}>
              Belajar dari <span style={{ color: 'var(--gold)' }}>Mana Saja</span>
            </h2>
          </div>
          <div className="pricing-online-grid stagger-children" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            alignItems: 'stretch',
          }}>
            {onlinePrograms.map(p => <ProgramCard key={p.id} program={p} />)}
          </div>
        </div>
      </section>

      {/* Exclusive Programs */}
      <section style={{ padding: '80px 40px', background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at top right, rgba(201,168,76,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{
              display: 'inline-block', background: 'rgba(201,168,76,0.15)',
              color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '6px 16px', borderRadius: 50, marginBottom: 16,
            }}>Private Program</span>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700, color: 'white',
            }}>
              Exclusive <span style={{ color: 'var(--gold)' }}>Experience</span>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>
              Program premium dengan pengalaman belajar paling personal
            </p>
          </div>
          <div className="pricing-exclusive-grid stagger-children" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
            alignItems: 'stretch',
            maxWidth: 800, margin: '0 auto',
          }}>
            {exclusivePrograms.map(p => <ProgramCard key={p.id} program={p} />)}
          </div>
        </div>
      </section>

      {/* Learning Flow */}
      <section style={{ padding: '80px 40px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }} className="reveal">
            <span style={{
              display: 'inline-block', background: 'var(--gold-pale)',
              color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '6px 16px', borderRadius: 50, marginBottom: 16,
            }}>Learning Flow</span>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700, color: 'var(--navy)',
            }}>
              Trinity Academy <span style={{ color: 'var(--gold)' }}>Learning Flow</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }} className="stagger-children">
            {[
              { num: '01', title: 'Konsultasi Awal', desc: 'Hubungi kami via WhatsApp atau form. Tentukan kebutuhan belajar, pilih program dan metode (online/offline).' },
              { num: '02', title: 'Pemilihan Tutor', desc: 'Khusus program private — orang tua mendapat akses Trinity Tutor Book untuk memilih tutor yang paling sesuai.' },
              { num: '03', title: 'Penjadwalan Sesi', desc: 'Tentukan jadwal belajar yang disesuaikan dengan waktu anak dan orang tua. Fleksibel untuk program private.' },
              { num: '04', title: 'Konfirmasi & Pembayaran', desc: 'Lakukan pembayaran paket. Jadwal dan tutor dikonfirmasi. Sesi siap dimulai!' },
              { num: '05', title: 'Sesi Pembelajaran', desc: 'Proses belajar dimulai — online (Zoom) atau offline (ke rumah), sesuai program yang dipilih.' },
              { num: '06', title: 'Latihan & Pendampingan', desc: 'Anak mengerjakan latihan/PR. Tutor memberikan arahan dan pembahasan. Konsultasi tersedia untuk paket tertentu.' },
              { num: '07', title: 'Evaluasi & Test', desc: 'Dilakukan secara berkala untuk mengukur pemahaman dan menjadi dasar peningkatan belajar.' },
              { num: '08', title: 'Trinity Learning Report', desc: 'Khusus program exclusive — laporan perkembangan anak berisi evaluasi, catatan tutor, dan rekomendasi ke depan.' },
              { num: '09', title: 'Konsultasi Orang Tua', desc: 'Khusus exclusive — diskusi perkembangan anak, saran strategi belajar, dan penyesuaian program.' },
            ].map((step, i) => (
              <div key={step.num} style={{
                display: 'flex', gap: 24, alignItems: 'flex-start',
                paddingBottom: i < 8 ? 32 : 0,
                position: 'relative',
              }}>
                {/* Line */}
                {i < 8 && (
                  <div style={{
                    position: 'absolute',
                    left: 19, top: 44,
                    width: 2, height: 'calc(100% - 12px)',
                    background: 'linear-gradient(to bottom, var(--gold), transparent)',
                    opacity: 0.3,
                  }} />
                )}
                {/* Number */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--navy)', color: 'var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.78rem', fontWeight: 800, flexShrink: 0,
                  border: '2px solid rgba(201,168,76,0.3)',
                }}>{step.num}</div>
                {/* Content */}
                <div style={{ flex: 1, paddingTop: 8 }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }} className="reveal">
            <span style={{
              display: 'inline-block', background: 'var(--gold-pale)',
              color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '6px 16px', borderRadius: 50, marginBottom: 16,
            }}>FAQ</span>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700, color: 'var(--navy)',
            }}>
              Pertanyaan yang <span style={{ color: 'var(--gold)' }}>Sering Ditanyakan</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} className="stagger-children">
            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: 'var(--navy)', textAlign: 'center' }}>
        <div className="reveal">
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 700, color: 'white', marginBottom: 12,
        }}>
          Siap Mulai Perjalanan Belajarmu?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 32, fontSize: '1rem' }}>
          Konsultasi gratis — kami bantu pilih program terbaik untuk anakmu.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="https://wa.me/6281234567890?text=Halo Trinity Academy ID! Saya ingin konsultasi program belajar."
            target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--gold)', color: 'var(--navy)',
              fontWeight: 700, fontSize: '0.95rem',
              padding: '14px 32px', borderRadius: 50,
              boxShadow: 'var(--shadow-gold)',
            }}>
            <MessageCircle size={15} strokeWidth={1.75} />
            Konsultasi Gratis
          </a>
          <Link href="/register" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '2px solid rgba(255,255,255,0.2)', color: 'white',
            fontWeight: 600, fontSize: '0.95rem',
            padding: '14px 32px', borderRadius: 50,
          }}>
            Daftar Sekarang →
          </Link>
        </div>
        </div>
      </section>
      <style>{`
  @media (max-width: 1024px) {
    .pricing-online-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (max-width: 640px) {
    .pricing-online-grid { grid-template-columns: 1fr !important; }
    .pricing-exclusive-grid { grid-template-columns: 1fr !important; }
  }
`}</style>
    </main>
  )
}