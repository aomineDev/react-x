import React, { useState, useEffect } from 'react'
import { AvatarMenu } from '../../AvatarMenu'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link to="/">
          <img src="/src/assets/images/logo/logo-reactX.png" alt="ReactX" className="h-8" />
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <AvatarMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
