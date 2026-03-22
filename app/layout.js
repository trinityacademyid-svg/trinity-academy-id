import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Trinity Academy — From Ambon, Built for Better Learning',
  description: 'Trinity Academy adalah platform bimbingan belajar online dan home visit untuk siswa SD, SMP, dan SMA di Ambon. Program terstruktur, tutor terseleksi, hasil terukur.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}