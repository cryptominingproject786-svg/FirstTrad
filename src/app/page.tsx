'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Hero from './_component/Home/Hero'
import King from './_component/Home/King'
function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className='w-full bg-white sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20 md:h-24'>
            {/* Left Section - Logo and Brand */}
            <div className='flex items-center gap-2 sm:gap-3'>
              <div className='relative'>
                <Image
                  src='/Logo.jpg'
                  alt='Treasure Fun Logo'
                  width={40}
                  height={40}
                  priority
                  className='object-contain rounded-lg w-10 h-10 sm:w-12 sm:h-12'
                />
              </div>
              <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight whitespace-nowrap'>
                Treasure <span className='font-extrabold'>Fun</span>
              </h1>
            </div>

            {/* Desktop Middle Section - Navigation Links */}
            <div className='hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2'>
              <NavLink href='/explore'>Explore</NavLink>
              <NavLink href='/earn'>Earn</NavLink>
              <NavLink href='/reserve'>Reserve</NavLink>
            </div>

            {/* Right Section - Action Buttons */}
            <div className='flex items-center gap-2 sm:gap-4'>
              {/* Airdrop Button */}
              <button className='hidden sm:flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group'>
                <Image
                  src='https://image.treasurenft.xyz/icon/icon_notice_02.png'
                  alt='Airdrop Notification'
                  width={20}
                  height={20}
                  loading='lazy'
                  className='group-hover:animate-bounce'
                />
                <span className='text-sm whitespace-nowrap'>Airdrop</span>
              </button>

              {/* App Download Button */}
              <button className='hidden md:flex items-center px-3 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105'>
                <Image
                  src='https://image.treasurenft.xyz/NewVer2212/btn/btn_downloadapp_01_pc.png'
                  alt='Download App'
                  width={20}
                  height={20}
                  loading='lazy'
                />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='lg:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors'
                aria-label='Toggle menu'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  {isMenuOpen ? (
                    <path d='M6 18L18 6M6 6l12 12' />
                  ) : (
                    <path d='M4 6h16M4 12h16M4 18h16' />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className='lg:hidden border-t border-gray-100 py-4 mobile-menu bg-white'>
              <div className='flex flex-col space-y-3 px-4'>
                {/* Mobile Action Buttons */}
                <div className='flex items-center gap-3 pb-3 border-b border-gray-200'>
                  <button className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white font-bold rounded-lg flex-1 justify-center hover:shadow-lg transition-all'>
                    <Image
                      src='https://image.treasurenft.xyz/icon/icon_notice_02.png'
                      alt='Airdrop Notification'
                      width={20}
                      height={20}
                      loading='lazy'
                    />
                    <span>Airdrop</span>
                  </button>
                  <button className='flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all'>
                    <Image
                      src='https://image.treasurenft.xyz/NewVer2212/btn/btn_downloadapp_01_pc.png'
                      alt='Download App'
                      width={20}
                      height={20}
                      loading='lazy'
                    />
                  </button>
                </div>
                {/* Mobile Nav Links */}
                <div className='flex flex-col space-y-2 pt-2'>
                  <MobileNavLink href='/explore'>Explore</MobileNavLink>
                  <MobileNavLink href='/earn'>Earn</MobileNavLink>
                  <MobileNavLink href='/reserve'>Reserve</MobileNavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Hero />
      <King />
    </>


  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      prefetch={true}
      className='text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors duration-200 relative group'
    >
      {children}
      <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      prefetch={true}
      className='block px-4 py-3 text-gray-900 font-bold text-lg rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors'
    >
      {children}
    </Link>
  )


}

export default Home