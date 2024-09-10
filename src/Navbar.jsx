import { useEffect, useState } from 'react'
import './App.css'
import Logo from './images/Logo.png'
import GetAppointment from './pages/GetAppointment'


function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAppointmentModal, setShowAppointmentModal] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen)

  const toggleAppointmentModal = () => {
    setShowAppointmentModal(!showAppointmentModal)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services','products', 'team', 'contact']
      let currentSection = ''

      sections.forEach((section) => {
        const element = document.getElementById(section)
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top <= 150 && rect.bottom >= 150
        if (isVisible) {
          currentSection = section
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-zoom-in-up')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Navbar */}
      <nav className="px-4 sm:px-6 md:px-8 flex items-center justify-between h-20 shadow-md sticky top-0 z-50 bg-white">
        <div>
          <img src={Logo} alt="Logo" className="h-12 sm:h-16 pl-2 sm:pl-4" />
        </div>
        <div className="hidden md:flex items-center justify-end gap-10 mr-10">
          <div className="flex items-center justify-center font-semibold text-custom-blue gap-7 cursor-pointer">
            <ul>
              <li
                className={`${
                  activeSection === 'home' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </li>
            </ul>
            <ul>
              <li
                className={`${
                  activeSection === 'about' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => scrollToSection('about')}
              >
                About
              </li>
            </ul>
            <ul>
              <li
                className={`${
                  activeSection === 'services' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => scrollToSection('services')}
              >
                Services
              </li>
            </ul>
            <ul>
              <li
                className={`${
                  activeSection === 'products' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => scrollToSection('products')}
              >
                Products
              </li>
            </ul>
            <ul>
              <li
                className={`${
                  activeSection === 'team' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => scrollToSection('team')}
              >
                Team
              </li>
            </ul>
            <ul>
              <li
                className={`${
                  activeSection === 'contact' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </li>
            </ul>
          </div>

          <button
            onClick={toggleAppointmentModal}
            className="bg-blue-500 text-white font-semibold text-lg rounded-md px-2 py-1 transition-transform duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Get Started
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 right-0 bg-white w-3/4 h-full z-40 shadow-lg md:hidden flex flex-col items-center pt-16">
            <button
              className="self-end text-2xl p-4"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              ✖
            </button>
            <ul className="flex flex-col items-center gap-8">
              <li
                className={`${
                  activeSection === 'home' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => {
                  scrollToSection('home')
                  toggleMobileMenu()
                }}
              >
                Home
              </li>
              <li
                className={`${
                  activeSection === 'about' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => {
                  scrollToSection('about')
                  toggleMobileMenu()
                }}
              >
                About
              </li>
              <li
                className={`${
                  activeSection === 'services' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => {
                  scrollToSection('services')
                  toggleMobileMenu()
                }}
              >
                Services
              </li>
              <li
                className={`${
                  activeSection === 'products' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => {
                  scrollToSection('product')
                  toggleMobileMenu()
                }}
              >
                Products
              </li>
              <li
                className={`${
                  activeSection === 'team' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => {
                  scrollToSection('team')
                  toggleMobileMenu()
                }}
              >
                Team
              </li>
              <li
                className={`${
                  activeSection === 'contact' ? 'text-blue-700 font-bold' : ''
                }`}
                onClick={() => {
                  scrollToSection('contact')
                  toggleMobileMenu()
                }}
              >
                Contact
              </li>
            </ul>
            <button
              onClick={toggleAppointmentModal}
              className="bg-custom-blue font-semibold text-lg rounded-md p-2 text-white mt-8"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Modal for GetAppointment */}
      {showAppointmentModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleAppointmentModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full h-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-slate-700 px-3 py-1 text-4xl  hover:text-gray-800"
              onClick={toggleAppointmentModal}
            >
              ×
            </button>
            <GetAppointment />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

