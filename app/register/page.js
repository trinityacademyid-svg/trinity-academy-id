'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { User, BookOpen, Calendar, CheckCircle, MessageCircle } from 'lucide-react'

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

const steps = [
  { id: 1, label: 'Data Diri', icon: <User size={18} strokeWidth={1.75} /> },
  { id: 2, label: 'Kebutuhan Belajar', icon: <BookOpen size={18} strokeWidth={1.75} /> },
  { id: 3, label: 'Jadwal', icon: <Calendar size={18} strokeWidth={1.75} /> },
  { id: 4, label: 'Konfirmasi', icon: <CheckCircle size={18} strokeWidth={1.75} /> },
]

const subjects = [
  'Matematika', 'Bahasa Inggris', 'Fisika', 'Kimia',
  'Biologi', 'IPA', 'IPS', 'Ekonomi',
  'Geografi', 'Sosiologi', 'Sejarah', 'Calistung',
]

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
const times = ['07.00–08.00', '08.00–09.00', '09.00–10.00', '13.00–14.00', '14.00–15.00', '15.00–16.00', '16.00–17.00', '19.00–20.00', '20.00–21.00']

export default function RegisterPage() {
  useReveal()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    // Step 1
    name: '',
    phone: '',
    email: '',
    role: '',
    // Step 2
    studentName: '',
    level: '',
    selectedSubjects: [],
    package: '',
    notes: '',
    // Step 3
    selectedDays: [],
    selectedTime: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const toggleSubject = (subject) => {
    setForm(prev => ({
      ...prev,
      selectedSubjects: prev.selectedSubjects.includes(subject)
        ? prev.selectedSubjects.filter(s => s !== subject)
        : [...prev.selectedSubjects, subject],
    }))
  }

  const toggleDay = (day) => {
    setForm(prev => ({
      ...prev,
      selectedDays: prev.selectedDays.includes(day)
        ? prev.selectedDays.filter(d => d !== day)
        : [...prev.selectedDays, day],
    }))
  }

  const canNext = () => {
    if (step === 1) return form.name && form.phone && form.role
    if (step === 2) return form.level && form.selectedSubjects.length > 0 && form.package
    if (step === 3) return form.selectedDays.length > 0 && form.selectedTime
    return true
  }

  const handleSubmit = () => {
    const msg = `Halo Trinity Academy ID! Saya ingin mendaftar les private.

*Data Pendaftar:*
Nama: ${form.name}
No. HP: ${form.phone}
Email: ${form.email || '-'}
Sebagai: ${form.role}

*Kebutuhan Belajar:*
Nama Siswa: ${form.studentName || form.name}
Jenjang: ${form.level}
Mata Pelajaran: ${form.selectedSubjects.join(', ')}
Paket: ${form.package}
Catatan: ${form.notes || '-'}

*Jadwal yang Diinginkan:*
Hari: ${form.selectedDays.join(', ')}
Waktu: ${form.selectedTime} WIB

Terima kasih!`

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  const inputStyle = {
    fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem',
    color: 'var(--text-dark)', background: 'var(--white)',
    border: '2px solid rgba(0,0,0,0.08)', borderRadius: 10,
    padding: '12px 16px', outline: 'none',
    transition: 'border-color 0.3s', width: '100%',
  }

  if (submitted) {
    return (
      <main style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: 480, padding: '0 24px' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'var(--gold-pale)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
            color: 'var(--gold)',
          }}>
            <CheckCircle size={36} strokeWidth={1.75} />
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '2rem', fontWeight: 700,
            color: 'var(--navy)', marginBottom: 16,
          }}>Pendaftaran Berhasil!</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 32 }}>
            Data kamu sudah terkirim ke WhatsApp kami. Tim Trinity Academy ID akan segera menghubungimu untuk konfirmasi jadwal dan tutor.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{
              background: 'var(--navy)', color: 'var(--gold)',
              fontWeight: 700, padding: '14px 32px', borderRadius: 50,
            }}>Kembali ke Beranda</Link>
            <Link href="/tutors" style={{
              border: '2px solid var(--navy)', color: 'var(--navy)',
              fontWeight: 600, padding: '14px 32px', borderRadius: 50,
            }}>Lihat Tutor</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--cream)' }}>

      {/* Hero */}
      <section style={{
        background: 'var(--navy)', padding: '60px 40px',
        textAlign: 'center',
      }}>
        <div className="reveal">
        <span style={{
          display: 'inline-block', background: 'rgba(0,180,216,0.15)',
          color: 'var(--gold-light)', fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '6px 16px', borderRadius: 50, marginBottom: 16,
        }}>Daftar Sekarang</span>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 900, color: 'white', marginBottom: 12,
        }}>
          Mulai Perjalanan <span style={{ color: 'var(--gold)' }}>Belajarmu</span>
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}>
          Isi formulir di bawah — gratis, mudah, dan hanya 3 menit!
        </p>        </div>      </section>

      {/* Stepper */}
      <div style={{ background: 'var(--white)', padding: '32px 40px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="stagger-children" style={{
          maxWidth: 560, margin: '0 auto',
          display: 'flex', alignItems: 'flex-start',
        }}>
          {steps.map((s, i) => (
            <div key={s.id} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: step >= s.id ? 'var(--navy)' : 'var(--cream)',
                  border: `2px solid ${step >= s.id ? 'var(--gold)' : 'rgba(0,0,0,0.1)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: step > s.id ? '1rem' : '1.2rem',
                  transition: 'all 0.3s',
                  color: step >= s.id ? 'var(--gold)' : 'var(--text-light)',
                  fontWeight: 700,
                }}>
                  {step > s.id ? <CheckCircle size={18} strokeWidth={2} /> : s.icon}
                </div>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 600,
                  color: step >= s.id ? 'var(--navy)' : 'var(--text-light)',
                  whiteSpace: 'nowrap',
                }}>{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div style={{
                  flex: 1, height: 1, margin: '0 12px', marginBottom: 24,
                  background: step > s.id ? 'var(--gold)' : 'var(--border)',
                  transition: 'background 0.3s',
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ background: 'var(--white)', borderRadius: 20, padding: '40px', boxShadow: 'var(--shadow)' }}>

          {/* ── STEP 1: Data Diri ── */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>
                Data Diri
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: 28 }}>
                Siapa yang mendaftar? Orang tua atau siswa langsung?
              </p>

              <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                {['Orang Tua', 'Siswa', 'Wali'].map(r => (
                  <button key={r} onClick={() => update('role', r)}
                    style={{
                      flex: 1, padding: '12px 8px', borderRadius: 10,
                      border: `2px solid ${form.role === r ? 'var(--gold)' : 'rgba(0,0,0,0.08)'}`,
                      background: form.role === r ? 'var(--gold-pale)' : 'var(--cream)',
                      color: form.role === r ? 'var(--navy)' : 'var(--text-mid)',
                      fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem',
                      fontWeight: form.role === r ? 700 : 400,
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}>
                    {r}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>
                    Nama Lengkap <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input style={inputStyle} placeholder="Nama lengkap kamu..."
                    value={form.name} onChange={e => update('name', e.target.value)} />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>
                    No. WhatsApp <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input style={inputStyle} placeholder="08xxxxxxxxxx"
                    value={form.phone} onChange={e => update('phone', e.target.value)} />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>
                    Email <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>(opsional)</span>
                  </label>
                  <input style={inputStyle} placeholder="email@contoh.com" type="email"
                    value={form.email} onChange={e => update('email', e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 2: Kebutuhan Belajar ── */}
          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>
                Kebutuhan Belajar
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: 28 }}>
                Ceritakan kebutuhan belajar siswa agar kami bisa siapkan tutor terbaik.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>
                    Nama Siswa
                  </label>
                  <input style={inputStyle} placeholder="Nama siswa yang akan les..."
                    value={form.studentName} onChange={e => update('studentName', e.target.value)} />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>
                    Jenjang Pendidikan <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {['SD', 'SMP', 'SMA IPA', 'SMA IPS'].map(l => (
                      <button key={l} onClick={() => update('level', l)}
                        style={{
                          padding: '12px', borderRadius: 10,
                          border: `2px solid ${form.level === l ? 'var(--gold)' : 'rgba(0,0,0,0.08)'}`,
                          background: form.level === l ? 'var(--gold-pale)' : 'var(--cream)',
                          color: form.level === l ? 'var(--navy)' : 'var(--text-mid)',
                          fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem',
                          fontWeight: form.level === l ? 700 : 400,
                          cursor: 'pointer', transition: 'all 0.2s',
                        }}>
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>
                    Mata Pelajaran <span style={{ color: 'red' }}>*</span>
                    <span style={{ color: 'var(--text-light)', fontWeight: 400 }}> (bisa pilih lebih dari 1)</span>
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {subjects.map(s => (
                      <button key={s} onClick={() => toggleSubject(s)}
                        style={{
                          padding: '8px 16px', borderRadius: 50,
                          border: `2px solid ${form.selectedSubjects.includes(s) ? 'var(--gold)' : 'rgba(0,0,0,0.08)'}`,
                          background: form.selectedSubjects.includes(s) ? 'var(--gold-pale)' : 'var(--cream)',
                          color: form.selectedSubjects.includes(s) ? 'var(--navy)' : 'var(--text-mid)',
                          fontFamily: 'DM Sans, sans-serif', fontSize: '0.83rem',
                          fontWeight: form.selectedSubjects.includes(s) ? 700 : 400,
                          cursor: 'pointer', transition: 'all 0.2s',
                        }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>
                    Paket Les <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      { id: 'baguala', label: 'Baguala Start', desc: 'Grup • 1x/minggu' },
                      { id: 'latuhalat', label: 'Latuhalat Prime', desc: 'Semi-private • 1–2x/minggu' },
                      { id: 'hative', label: 'Hative Prime', desc: 'Private 1-on-1 • Online' },
                      { id: 'passo', label: 'Passo Prime', desc: 'Private • 2x/minggu' },
                      { id: 'lelemuku', label: 'Lelemuku Prime', desc: 'Exclusive • Online Private' },
                      { id: 'siwalima', label: 'Siwalima Prime', desc: 'Exclusive • Home Visit' },
                    ].map(p => (
                      <button key={p.id} onClick={() => update('package', p.id)}
                        style={{
                          padding: '14px 16px', borderRadius: 10, textAlign: 'left',
                          border: `2px solid ${form.package === p.id ? 'var(--gold)' : 'rgba(0,0,0,0.08)'}`,
                          background: form.package === p.id ? 'var(--gold-pale)' : 'var(--cream)',
                          cursor: 'pointer', transition: 'all 0.2s',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          fontFamily: 'DM Sans, sans-serif',
                        }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy)' }}>{p.label}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{p.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 8 }}>
                    Catatan Tambahan <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>(opsional)</span>
                  </label>
                  <textarea style={{ ...inputStyle, resize: 'vertical' }} rows={3}
                    placeholder="Contoh: Fokus persiapan UN, kesulitan di bab tertentu, dll..."
                    value={form.notes} onChange={e => update('notes', e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 3: Jadwal ── */}
          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>
                Pilih Jadwal
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: 28 }}>
                Pilih hari dan waktu yang paling cocok untuk belajar.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 12 }}>
                    Hari Belajar <span style={{ color: 'red' }}>*</span>
                    <span style={{ color: 'var(--text-light)', fontWeight: 400 }}> (bisa lebih dari 1)</span>
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {days.map(d => (
                      <button key={d} onClick={() => toggleDay(d)}
                        style={{
                          padding: '10px 18px', borderRadius: 50,
                          border: `2px solid ${form.selectedDays.includes(d) ? 'var(--gold)' : 'rgba(0,0,0,0.08)'}`,
                          background: form.selectedDays.includes(d) ? 'var(--gold-pale)' : 'var(--cream)',
                          color: form.selectedDays.includes(d) ? 'var(--navy)' : 'var(--text-mid)',
                          fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem',
                          fontWeight: form.selectedDays.includes(d) ? 700 : 400,
                          cursor: 'pointer', transition: 'all 0.2s',
                        }}>
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 12 }}>
                    Waktu Belajar <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 10 }}>
                    {times.map(t => (
                      <button key={t} onClick={() => update('selectedTime', t)}
                        style={{
                          padding: '10px 8px', borderRadius: 10,
                          border: `2px solid ${form.selectedTime === t ? 'var(--gold)' : 'rgba(0,0,0,0.08)'}`,
                          background: form.selectedTime === t ? 'var(--gold-pale)' : 'var(--cream)',
                          color: form.selectedTime === t ? 'var(--navy)' : 'var(--text-mid)',
                          fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem',
                          fontWeight: form.selectedTime === t ? 700 : 400,
                          cursor: 'pointer', transition: 'all 0.2s',
                        }}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 4: Konfirmasi ── */}
          {step === 4 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>
                Konfirmasi Data
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: 28 }}>
                Pastikan semua data sudah benar sebelum mengirim.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  {
                    label: 'Data Diri', items: [
                      { key: 'Nama', val: form.name },
                      { key: 'No. WhatsApp', val: form.phone },
                      { key: 'Email', val: form.email || '-' },
                      { key: 'Sebagai', val: form.role },
                    ]
                  },
                  {
                    label: 'Kebutuhan Belajar', items: [
                      { key: 'Nama Siswa', val: form.studentName || form.name },
                      { key: 'Jenjang', val: form.level },
                      { key: 'Mata Pelajaran', val: form.selectedSubjects.join(', ') },
                      { key: 'Paket', val: form.package },
                      { key: 'Catatan', val: form.notes || '-' },
                    ]
                  },
                  {
                    label: 'Jadwal', items: [
                      { key: 'Hari', val: form.selectedDays.join(', ') },
                      { key: 'Waktu', val: form.selectedTime + ' WIB' },
                    ]
                  },
                ].map(section => (
                  <div key={section.label} style={{
                    background: 'var(--cream)', borderRadius: 12, overflow: 'hidden',
                  }}>
                    <div style={{
                      background: 'var(--navy)', padding: '12px 16px',
                      fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold)',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>{section.label}</div>
                    <div style={{ padding: 16 }}>
                      {section.items.map(item => (
                        <div key={item.key} style={{
                          display: 'flex', gap: 12, marginBottom: 8,
                          fontSize: '0.875rem',
                        }}>
                          <span style={{ color: 'var(--text-light)', minWidth: 130 }}>{item.key}</span>
                          <span style={{ color: 'var(--navy)', fontWeight: 500 }}>{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 20, padding: 16,
                background: 'var(--gold-pale)',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: 10,
                fontSize: '0.85rem', color: 'var(--text-mid)',
                lineHeight: 1.6,
              }}>
                Setelah klik <strong>"Kirim via WhatsApp"</strong>, kamu akan diarahkan ke WhatsApp untuk konfirmasi langsung dengan tim kami.
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="reveal" style={{
            display: 'flex', justifyContent: 'space-between',
            marginTop: 32, gap: 12,
          }}>
            {step > 1 ? (
              <button onClick={() => setStep(s => s - 1)}
                style={{
                  background: 'var(--cream)', color: 'var(--text-mid)',
                  border: '2px solid rgba(0,0,0,0.08)',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem',
                  fontWeight: 600, padding: '13px 28px',
                  borderRadius: 50, cursor: 'pointer',
                }}>
                ← Kembali
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button onClick={() => setStep(s => s + 1)}
                disabled={!canNext()}
                style={{
                  background: canNext() ? 'var(--navy)' : 'rgba(0,0,0,0.1)',
                  color: canNext() ? 'var(--gold)' : 'var(--text-light)',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem',
                  fontWeight: 700, padding: '13px 32px',
                  borderRadius: 50, border: 'none',
                  cursor: canNext() ? 'pointer' : 'not-allowed',
                  transition: 'all 0.3s',
                }}>
                Lanjut →
              </button>
            ) : (
              <button onClick={handleSubmit}
                style={{
                  background: '#25D366', color: 'white',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
                  fontWeight: 700, padding: '13px 32px',
                  borderRadius: 50, border: 'none', cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
                }}>
                Kirim via WhatsApp
              </button>
            )}
          </div>

        </div>
      </div>
    </main>
  )
}