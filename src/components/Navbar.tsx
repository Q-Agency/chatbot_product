'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Benefits', href: '#benefits' },
  { name: 'Implementation', href: '#implementation' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-xl" />
      <div className="relative border-b border-slate-900/10">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="/images/clients/q-logo.svg" 
                  alt="Q Logo" 
                  width={35} 
                  height={35} 
                  className="w-auto h-8"
                />
                <span className="text-xl font-bold text-slate-900">Chatbot</span>
              </Link>
              <div className="hidden md:flex gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link text-sm font-medium ${
                      activeSection === item.href.replace('#', '') ? 'active' : 'text-slate-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <button
                type="button"
                className="md:hidden text-slate-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="relative md:hidden bg-white border-b border-slate-900/10">
          <div className="container-custom py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link block text-sm font-medium ${
                  activeSection === item.href.replace('#', '') ? 'active' : 'text-slate-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
} 