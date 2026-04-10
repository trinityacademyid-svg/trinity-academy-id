'use client'

import Link from 'next/link'
import { Star, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function SignaturePage() {
  return (
    <main style={{ background: 'var(--navy)', color: 'white', minHeight: '100vh' }}>
      
      {/* --- HERO SECTION --- */}
      <section style={{
        padding: '120px 24px 60px',
        textAlign: 'center',
        background: 'radial-gradient(circle at top, #1E3A5F 0%, #0A1628 70%)'
      }}>
        <div className="reveal">
          <span style={{
            color: 'var(--gold)',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            display: 'block',
            marginBottom: '16px'
          }}>
            Program Eksklusif
          </span>
          <h1 className="display" style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            marginBottom: '20px',
            lineHeight: 1.1
          }}>
            Trinity <span style={{ color: 'var(--gold)' }}>Signature</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.1rem',
            maxWidth: '500px',
            margin: '0 auto 40px',
            lineHeight: 1.6
          }}>
            Layanan mentoring premium dengan kurikulum yang dipersonalisasi sepenuhnya untuk hasil maksimal.
          </p>
          <Link href="/register" className="btn-gold" style={{ padding: '16px 40px', fontSize: '1rem' }}>
            Daftar Sekarang <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* --- KEUNGGULAN SECTION --- */}
      <section style={{ padding: '60px 24px', background: 'var(--off-white)', color: 'var(--navy)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="display" style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2rem' }}>
            Mengapa Memilih <span style={{ color: 'var(--gold)' }}>Signature?</span>
          </h2>

          {/* Grid ini akan 1 kolom di mobile, dan otomatis jadi 3 kolom di desktop */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              { 
                icon: <Star color="var(--gold)" />, 
                title: 'Tutor Pilihan Utama', 
                desc: 'Hanya tutor dengan rating tertinggi dan pengalaman lebih dari 5 tahun.' 
              },
              { 
                icon: <ShieldCheck color="var(--gold)" />, 
                title: 'Kurikulum Khusus', 
                desc: 'Materi disusun khusus berdasarkan kekuatan dan kelemahan siswa.' 
              },
              { 
                icon: <Zap color="var(--gold)" />, 
                title: 'Laporan Progres Mingguan', 
                desc: 'Pantau perkembangan belajar dengan data detail setiap minggunya.' 
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: 'white',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div style={{ marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DESKTOP EXPERIENCE HINT --- */}
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            padding: 140px 0 100px !important;
          }
          .display {
            font-size: 5rem !important;
          }
        }
      `}</style>
    </main>
  )
}