import { useEffect, useState } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.css'
import banner from './images/banner.jpg'
import Logo from './images/Logo.png'
import About from './images/about.gif'

import { GoArrowRight } from 'react-icons/go'
import { RiDiscussLine } from 'react-icons/ri'
import { PiStackPlusLight } from 'react-icons/pi'

import Customers from './pages/Customers'
import TeamSection from './pages/Team'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team', 'contact']
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

          <button className="bg-blue-500 font-semibold text-lg rounded-md p-2 text-white">
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
            <button className="bg-blue-500 font-semibold text-lg rounded-md p-2 text-white mt-8">
              Get Started
            </button>
          </div>
        )}
      </nav>
      {/* Body */}
      <main
        id="home"
        className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 mt-8 px-4 py-8 z-0 shadow-sm scroll-animate"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-blue-700 text-3xl md:text-4xl lg:text-5xl">
            Africode Consultancy Ltd
          </h1>
          <p className="mt-4 leading-8 text-slate-600 text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            corrupti maiores sint soluta accusantium, saepe deleniti. Quaerat,
            facere aliquam voluptatibus ullam ipsum delectus pariatur voluptatem
            eius non laborum itaque, possimus optio quas atque harum minima
            porro vel tenetur quos eveniet obcaecati placeat dicta! Dignissimos
            accusantium deserunt numquam sed, eligendi et?
          </p>
          <div className="text-center md:text-left mt-8">
            <button className="flex items-center justify-center text-white bg-blue-700 font-semibold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-800">
              Get Started
              <span className="ml-2 flex items-center">
                <GoArrowRight className="text-white" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={banner}
            alt="Banner image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </main>

      <main
        id="about"
        className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 mt-8 px-4 py-8 scroll-animate"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-custom-blue text-3xl md:text-4xl lg:text-5xl">
            Who We Are
          </h1>
          <p className="mt-4 leading-8 text-slate-600 text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            corrupti maiores sint soluta accusantium, saepe deleniti. Quaerat,
            facere aliquam voluptatibus ullam ipsum delectus pariatur voluptatem
            eius non laborum itaque, possimus optio quas atque harum minima
            porro vel tenetur quos eveniet obcaecati placeat dicta! Dignissimos
            accusantium deserunt numquam sed, eligendi et?
          </p>
          <div className="text-center md:text-left mt-8">
            <button className="flex items-center justify-center text-white bg-blue-700 font-semibold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-800">
              Read More
              <span className="ml-2 flex items-center">
                <GoArrowRight className="text-white" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={About}
            alt="About image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </main>

      {/* Services Section */}
      <section>
        <main id="services" className="mx-9 scroll-animate mb-20">
          <h1 className="font-bold text-custom-blue text-4xl text-center mb-10">
            Digital Experiences that Define Our Consultancy
          </h1>
          <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-10">
            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5 rounded-full" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  Quality Insurance Services
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>

            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  Data Engineering
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>

            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  Project Management
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>

            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  Management Information Systems
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>
          </div>
        </main>

        <main className="mx-9">
          <h1 className="font-bold text-custom-blue text-4xl text-center mb-10">
            Elevate Online Presence with Our Development Services
          </h1>
          <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
            <div className="relative shadow py-10 rounded-md px-6 bg-white hover:bg-custom-light-blue transition-colors duration-300 group pb-12">
              <div className="text-center flex flex-col items-center">
                <RiDiscussLine className="text-5xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
                <h1 className="text-custom-blue text-2xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                  T24 Integration
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
              <div className="text-center flex flex-col items-center">
                <button className="flex items-center text-custom-light-blue bg-transparent border-none text-xl font-semibold mt-8 cursor-pointer py-2 px-4 group-hover:text-white transition-colors duration-300">
                  Read more
                  <span className="ml-2 flex items-center">
                    <GoArrowRight className="text-custom-light-blue group-hover:text-white transition-colors duration-300" />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative shadow py-10 rounded-md px-6 bg-white hover:bg-custom-orange transition-colors duration-300 group pb-12">
              <div className="text-center flex flex-col items-center">
                <RiDiscussLine className="text-5xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
                <h1 className="text-custom-blue text-2xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                  CBS Implementation
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
              <div className="text-center flex flex-col items-center">
                <button className="flex items-center text-custom-orange bg-transparent border-none text-xl font-semibold mt-8 cursor-pointer py-2 px-4 group-hover:text-white transition-colors duration-300">
                  Read more
                  <span className="ml-2 flex items-center">
                    <GoArrowRight className="text-custom-orange group-hover:text-white transition-colors duration-300" />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative shadow py-10 rounded-md px-6 bg-white hover:bg-custom-purple transition-colors duration-300 group pb-12">
              <div className="text-center flex flex-col items-center">
                <RiDiscussLine className="text-5xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
                <h1 className="text-custom-blue text-2xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                  Process Optimization
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
              <div className="text-center flex flex-col items-center">
                <button className="flex items-center text-custom-purple bg-transparent border-none text-xl font-semibold mt-8 cursor-pointer py-2 px-4 group-hover:text-white transition-colors duration-300">
                  Read more
                  <span className="ml-2 flex items-center">
                    <GoArrowRight className="text-custom-purple group-hover:text-white transition-colors duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Customers */}

      <Customers />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Us Section */}

      <Contact />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
