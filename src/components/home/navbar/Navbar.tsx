// src/components/landing/navbar/Navbar.tsx
import React from 'react'
import { AvatarMenu } from './AvatarMenu'

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <img src="src/assets/images/logo/logo-reactX.png" alt="ReactX" className="h-8" />

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <AvatarMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
