'use client'

import { useEffect, useState, useRef } from 'react'
import navLinks from '../constants/navLinks'
import { FaWhatsapp } from 'react-icons/fa'
import { HiBars2 } from 'react-icons/hi2'
import { CgClose } from 'react-icons/cg'

function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isBottom, setIsBottom] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const rafRef = useRef<number | null>(null)

  const handleClick = () =>
    window.open(
      'https://wa.me/6281298298245?text=Halo%20Asep%2C%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website%20untuk%20bisnis%20saya.%20Boleh%20konsultasi%3F',
      '_blank',
    )

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const checkBreakpoint = () => {
      const w = window.innerWidth
      setIsMobile(w < 640)
      setIsTablet(w >= 640 && w < 1024)
    }
    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const windowHeight = window.innerHeight
        const fullHeight = document.documentElement.scrollHeight
        const progress = Math.min(scrollTop / 120, 1)
        setScrollProgress(progress)
        setIsBottom(scrollTop + windowHeight >= fullHeight - 10)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    const checkBreakpoint = () => {
      const w = window.innerWidth
      const mobile = w < 640
      const tablet = w >= 640 && w < 1024
      setIsMobile(mobile)
      setIsTablet(tablet)
      if (!mobile && !tablet) setIsMenuOpen(false) // ✅ di sini, bukan useEffect terpisah
    }
    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [])

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t
  const isSmallNav = isMobile || isTablet
  const bgColor = `rgba(254,254,242,${scrollProgress})`
  const shadow = `0 ${lerp(0, 8, scrollProgress)}px ${lerp(0, 32, scrollProgress)}px rgba(0,0,0,${lerp(0, 0.15, scrollProgress)})`

  const desktopStyles = !isSmallNav
    ? {
        width: `${lerp(100, 28, scrollProgress)}%`,
        top: `${lerp(0, 16, scrollProgress)}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        paddingLeft: `${lerp(16, 24, scrollProgress)}px`,
        paddingRight: `${lerp(16, 16, scrollProgress)}px`,
        paddingTop: '16px',
        paddingBottom: '16px',
        borderRadius: '3rem',
        backgroundColor: bgColor,
        boxShadow: shadow,
      }
    : {}

  const tabletStyles = isTablet
    ? {
        width: `${lerp(100, 40, scrollProgress)}%`,
        top: `${lerp(0, 12, scrollProgress)}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        paddingLeft: `${lerp(16, 24, scrollProgress)}px`,
        paddingRight: `${lerp(16, 16, scrollProgress)}px`,
        paddingTop: '16px',
        paddingBottom: '16px',
        borderRadius: '3rem',
        backgroundColor: bgColor,
        boxShadow: shadow,
      }
    : {}

  const mobileStyles = isMobile
    ? {
        width: `${lerp(100, 94, scrollProgress)}%`,
        top: `${lerp(4, 12, scrollProgress)}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '3rem',
        backgroundColor: `rgba(254,254,242,${isMenuOpen ? 1 : scrollProgress})`, // ✅
        paddingLeft: `${lerp(16, 24, scrollProgress)}px`,
        paddingRight: `${lerp(16, 16, scrollProgress)}px`,
        paddingTop: '16px',
        paddingBottom: '16px',
        boxShadow: shadow,
      }
    : {}

  const navStyle = isMobile
    ? mobileStyles
    : isTablet
      ? tabletStyles
      : desktopStyles
  const fullNavOpacity = isSmallNav ? 0 : Math.max(0, 1 - scrollProgress * 2.5)
  const pillNavOpacity = isSmallNav ? 1 : Math.max(0, scrollProgress * 2.5 - 1)

  return (
    <div>
      <nav style={{ position: 'fixed', zIndex: 50, ...navStyle }}>
        <div className="flex justify-between items-center w-full relative">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="cursor-pointer text-xl md:text-2xl font-extrabold shrink-0 z-10 text-foreground"
            style={{
              color:
                isMobile && scrollProgress < 0.5 && !isMenuOpen
                  ? '#fefef2'
                  : undefined,
            }}
          >
            DailyGround
          </a>

          {/* Desktop: Nav links tengah */}
          {!isSmallNav && (
            <div
              style={{
                opacity: fullNavOpacity,
                pointerEvents: fullNavOpacity < 0.05 ? 'none' : 'auto',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                whiteSpace: 'nowrap',
              }}
            >
              <ul className="flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="cursor-pointer relative md:text-base text-neutral-800
                        before:content-[''] before:absolute before:-bottom-1.5 before:left-0
                        before:w-0 before:h-0.5 before:bg-foreground
                        hover:before:w-full before:transition-all before:duration-300"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Desktop: CTA + Hamburger */}
          {!isSmallNav && (
            <div className="flex items-center z-10">
              {/* CTA fade out */}
              <div
                style={{
                  opacity: fullNavOpacity,
                  pointerEvents: fullNavOpacity < 0.05 ? 'none' : 'auto',
                  position: fullNavOpacity < 0.05 ? 'absolute' : 'relative',
                }}
              >
                <button
                  onClick={handleClick}
                  className={`cursor-pointer py-3 flex gap-1 items-center px-6 font-semibold rounded-full
                    hover:scale-105 transition-all duration-150 border-2 border-foreground text-foreground hover:bg-foreground hover:text-cream active:scale-95`}
                >
                  <FaWhatsapp className="text-xl" />
                  Booking Meja
                </button>
              </div>

              {/* Hamburger fade in */}
              <div
                style={{
                  opacity: pillNavOpacity,
                  pointerEvents: pillNavOpacity < 0.05 ? 'none' : 'auto',
                  position: pillNavOpacity < 0.05 ? 'absolute' : 'relative',
                }}
              >
                <button
                  className="cursor-pointer p-1"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <CgClose className="text-3xl text-black" />
                  ) : (
                    <HiBars2 className="text-3xl text-black" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Mobile & Tablet: Hamburger */}
          {isSmallNav && (
            <button
              className="cursor-pointer p-1"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <CgClose
                  className="text-3xl"
                  style={{
                    color:
                      isMobile && scrollProgress < 0.5 && !isMenuOpen
                        ? '#fefef2'
                        : undefined,
                  }}
                />
              ) : (
                <HiBars2
                  className="text-3xl"
                  style={{
                    color:
                      isMobile && scrollProgress < 0.5 && !isMenuOpen
                        ? '#fefef2'
                        : undefined,
                  }}
                />
              )}
            </button>
          )}
        </div>

        {/* Dropdown menu */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: isMenuOpen ? '400px' : '0px',
            opacity: isMenuOpen ? 1 : 0,
            marginTop: isMenuOpen ? '16px' : '0px',
            transition:
              'max-height 0.4s ease, opacity 0.3s ease, margin-top 0.3s ease',
          }}
        >
          <hr className="border-black/20 mb-4" />
          <ul className="flex flex-col gap-3 mb-4">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                style={{
                  transitionProperty: 'transform, opacity',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'ease',
                  transitionDelay: isMenuOpen ? `${i * 60}ms` : '0ms',
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="cursor-pointer relative text-black
                    before:content-[''] before:absolute before:-bottom-1 before:left-0
                    before:w-0 before:h-0.5 before:bg-black
                    hover:before:w-full before:transition-all before:duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={handleClick}
            className={`cursor-pointer w-full py-3 flex gap-2 items-center justify-center
              font-semibold rounded-full transition-all duration-150 border-2 border-foreground text-foreground hover:bg-foreground hover:text-cream active:scale-95`}
          >
            <FaWhatsapp className="text-xl" />
            Booking Meja
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
