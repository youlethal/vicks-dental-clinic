"use client"
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}