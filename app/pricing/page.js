'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      icon: '🌱',
      name: 'Paket Starter',
      desc: 'Cocok untuk coba-coba',
      price: '75.000',
      period: '/ sesi',
      features: [
        { text: '1 sesi (60 menit)', active: true },
        { text: '1 mata pelajaran', active: true },
        { text: 'Via Zoom / Google Meet', active: true },
        { text: 'Materi sesuai kebutuhan', active: true },
        { text: 'Laporan perkembangan', active: false },
        { text: 'Prioritas jadwal', active: false },
      ],
      popular: false,
    },
    {
      icon: '🚀',
      name: 'Paket Reguler',
      desc: 'Paling banyak dipilih',
      price: '280.000',
      period: '/ 4 sesi',
      features: [
        { text: '4 sesi (60 menit/sesi)', active: true },
        { text: '1 mata pelajaran', active: true },
        { text: 'Via Zoom / Google Meet', active: true },
        { text: 'Materi disesuaikan', active: true },
        { text: 'Laporan perkembangan', active: true },
        { text: 'Prioritas jadwal', active: false },
      ],
      popular: true,
    },
    {
      icon: '🏆',
      name: 'Paket Intensif',
      desc: 'Untuk hasil maksimal',
      price: '500.000',
      period: '/ 8 sesi',
      features: [
        { text: '8 sesi (60 menit/sesi)', active: true },
        { text: 'Hingga 2 mata pelajaran', active: true },
        { text: 'Via Zoom / Google Meet', active: true },
        { text: 'Materi disesuaikan', active: true },
        { text: 'Laporan perkembangan', active: true },
        { text: 'Prioritas jadwal', active: true },
      ],
      popular: false,
    },
  ]

  const faqs = [
    { q: 'Bagaimana cara mendaftar?', a: 'Cukup hubungi kami via WhatsApp dan kami akan bantu proses pendaftaran serta pemilihan tutor yang sesuai.' },
    { q: 'Apakah ada biaya pendaftaran?', a: 'Tidak ada! Konsultasi dan pendaftaran 100% gratis. Kamu hanya membayar paket les yang dipilih.' },
    { q: 'Bagaimana jika ingin ganti tutor?', a: 'Kamu bisa request ganti tutor kapan saja dengan menghubungi kami. Kepuasan siswa adalah prioritas kami.' },
    { q: 'Apakah bisa request jadwal?', a: 'Tentu! Jadwal belajar sangat fleksibel dan dapat disesuaikan dengan kesibukan siswa maupun orang tua.' },
    { q: 'Metode pembayaran apa yang tersedia?', a: 'Kami menerima transfer bank, GoPay, OVO, dan Dana. Detail pembayaran akan diberikan saat pendaftaran.' },
    { q: 'Apakah ada garansi uang kembali?', a: 'Jika tidak puas dengan sesi pertama, kami akan carikan tutor pengganti atau refund sesuai kesepakatan.' },
  ]

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
        }}>Harga & Paket</span>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 900, color: 'white', marginBottom: 16,
        }}>
          Pilih Paket yang <span style={{ color: 'var(--gold)' }}>Sesuai Kebutuhanmu</span>
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto' }}>
          Harga transparan, tidak ada biaya tersembunyi. Konsultasi gratis sebelum memulai!
        </p>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24, alignItems: 'start',
          }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                background: plan.popular ? 'var(--navy)' : 'var(--white)',
                borderRadius: 16, padding: '36px 28px',
                border: plan.popular ? '2px solid var(--gold)' : '2px solid transparent',
                transform: plan.popular ? 'scale(1.04)' : 'scale(1)',
                boxShadow: plan.popular ? 'var(--shadow-gold)' : 'var(--shadow)',
                transition: 'all 0.3s', position: 'relative',
              }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    background: 'var(--gold)', color: 'var(--navy)',
                    fontSize: '0.72rem', fontWeight: 700,
                    padding: '4px 12px', borderRadius: 50,
                  }}>⭐ Terpopuler</div>
                )}
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}>{plan.icon}</span>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif', fontSize: '1.3rem',
                  fontWeight: 700, color: plan.popular ? 'white' : 'var(--navy)',
                  marginBottom: 4,
                }}>{plan.name}</h3>
                <p style={{ fontSize: '0.83rem', color: plan.popular ? 'rgba(255,255,255,0.5)' : 'var(--text-light)', marginBottom: 20 }}>
                  {plan.desc}
                </p>
                <div style={{
                  display: 'flex', alignItems: 'baseline', gap: 4,
                  marginBottom: 24, paddingBottom: 20,
                  borderBottom: `1px solid ${plan.popular ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'}`,
                }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--gold)', fontWeight: 600 }}>Rp</span>
                  <span style={{
                    fontFamily: 'Playfair Display, serif', fontSize: '2rem',
                    fontWeight: 700, color: plan.popular ? 'white' : 'var(--navy)',
                  }}>{plan.price}</span>
                  <span style={{ fontSize: '0.83rem', color: plan.popular ? 'rgba(255,255,255,0.5)' : 'var(--text-light)' }}>
                    {plan.period}
                  </span>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {plan.features.map(f => (
                    <li key={f.text} style={{
                      fontSize: '0.875rem',
                      color: f.active
                        ? (plan.popular ? 'rgba(255,255,255,0.85)' : 'var(--text-mid)')
                        : (plan.popular ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)'),
                      textDecoration: f.active ? 'none' : 'line-through',
                    }}>
                      {f.active ? '✦' : '✗'} {f.text}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                  style={{
                    display: 'block', textAlign: 'center',
                    background: plan.popular ? 'var(--gold)' : 'var(--navy)',
                    color: plan.popular ? 'var(--navy)' : 'var(--gold)',
                    fontWeight: 700, fontSize: '0.9rem',
                    padding: 13, borderRadius: 50, transition: 'all 0.3s',
                  }}>
                  Pilih Paket 💬
                </a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-light)', marginTop: 32 }}>
            💡 Harga dapat berubah sewaktu-waktu. Hubungi kami untuk info terbaru & promo spesial!
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 40px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map(faq => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 40px', background: 'var(--navy)', textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 700, color: 'white', marginBottom: 16,
        }}>
          Masih Bingung Pilih Paket?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: '1rem' }}>
          Konsultasi gratis dengan tim kami dan kami akan bantu pilihkan paket terbaik untukmu!
        </p>
        <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
          style={{
            display: 'inline-block',
            background: 'var(--gold)', color: 'var(--navy)',
            fontWeight: 700, fontSize: '1rem',
            padding: '16px 40px', borderRadius: 50,
            boxShadow: 'var(--shadow-gold)',
          }}>
          💬 Konsultasi Gratis Sekarang
        </a>
      </section>

    </main>
  )
}

// FAQ Accordion Item
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      background: 'var(--cream)', borderRadius: 12,
      border: `2px solid ${open ? 'var(--gold)' : 'transparent'}`,
      overflow: 'hidden', transition: 'all 0.3s',
    }}>
      <button onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 24px', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}>
        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy)' }}>{q}</span>
        <span style={{
          fontSize: '1.2rem', color: 'var(--gold)',
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
          transition: 'transform 0.3s', flexShrink: 0,
        }}>▾</span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 20px' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{a}</p>
        </div>
      )}
    </div>
  )
}