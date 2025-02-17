import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaDribbble, FaYoutube, FaAward, FaGlobe } from 'react-icons/fa'

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ],
  company: [
    { name: 'About', href: 'https://q.agency/about-us/' },
    { name: 'Blog', href: 'https://q.agency/blogs/' },
    { name: 'Careers', href: 'https://q.agency/careers/' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy', href: 'https://q.agency/privacy-policy/' },
    { name: 'Legal Info', href: 'https://q.agency/legal/' },
    { name: 'Security', href: 'https://q.agency/security' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://x.com/whatever_the_q',
      icon: FaTwitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://hr.linkedin.com/company/q_agency',
      icon: FaLinkedin,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/WhateverTheQ/',
      icon: FaFacebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/q_agency_ltd/',
      icon: FaInstagram,
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com/qagency',
      icon: FaDribbble,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/c/QAgency',
      icon: FaYoutube,
    },
    {
      name: 'Clutch',
      href: 'https://clutch.co/profile/q-agency',
      icon: FaAward,
    },
    {
      name: 'Pangea',
      href: 'https://www.pangea.ai/vendors/q-agency/#about',
      icon: FaGlobe,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Q Chatbot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 