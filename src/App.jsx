import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.css'
import banner from './images/banner.jpg'
import Logo from './images/Logo.png'
import About from './images/about.gif'

import { FaWhatsapp } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { IoIosCall } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'
import { GoArrowRight } from 'react-icons/go'
import { RiDiscussLine } from 'react-icons/ri'
import { PiStackPlusLight } from 'react-icons/pi'

import Frai from './images/farai2.jpg'
import Dereck from './images/dereck.png'
import Bless from './images/blissful.jpg'
import Kenny from './images/kenny.jpg'
import Boudoun from './images/nkru.jpg'
import Tinashe from './images/nzdwe.jpg'
import Musoni from './images/musni.jpg'
import Manzi from './images/manzi.jpg'
import Customers from './pages/Customers'

const teamMembers = [
  {
    name: 'Farai Mangwanda',
    role: 'Pinciple Consultant',
    image: Frai,
  },
  {
    name: 'Dereck Charimba',
    role: 'Senior Consultant',
    image: Dereck,
  },
  {
    name: 'Blessfull Dzimiri',
    role: 'Business Consultant',
    image: Bless,
  },
  {
    name: 'Kenny Munyaneza',
    role: 'Technical Consultant',
    image: Kenny,
  },
  {
    name: 'Boudoun Nkurunza',
    role: 'Technical Consultant',
    image: Boudoun,
  },
  {
    name: 'Tinashe Nedziwe',
    role: 'Senior Consultant',
    image: Tinashe,
  },
  {
    name: 'Felicien Musoni',
    role: 'Technical Consultant',
    image: Musoni,
  },
  {
    name: 'Frank Manzi',
    role: 'Technical Consultant',
    image: Manzi,
  },
]

function App() {
  const [activeSection, setActiveSection] = useState('')

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }

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
      <nav className="px-2 flex items-center justify-between h-20 shadow-md sticky top-0 z-50 bg-white">
        <div>
          <img src={Logo} alt="Logo" className="h-20 pl-5" />
        </div>
        <div className="flex items-center justify-end gap-10 mr-10">
          <div className="flex items-center justify-center font-semibold text-custom-blue  gap-7 cursor-pointer">
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
      </nav>

      {/* Body */}
      <main
        id="home"
        className="flex justify-between space-x-4 mt-3 px-4 z-0 shadow-sm scroll-animate"
      >
        <div className="flex-1 mt-28">
          <h1 className="font-bold text-blue-700 text-4xl">
            Africode Consultancy Ltd
          </h1>
          <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            corrupti maiores sint soluta accusantium, saepe deleniti. Quaerat,
            facere aliquam voluptatibus ullam ipsum delectus pariatur voluptatem
            eius non laborum itaque, possimus optio quas atque harum minima
            porro vel tenetur quos eveniet obcaecati placeat dicta! Dignissimos
            accusantium deserunt numquam sed, eligendi et?.
          </p>
          <div className="text-center flex flex-col items-center">
            <button className="flex items-center text-white bg-blue-700  font-semibold mt-8 cursor-pointer py-2 px-4 ">
              Get Started
              <span className="ml-2 flex items-center">
                <GoArrowRight className="text-white " />
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={banner} alt="Banner image" className="w-screen h-screen" />
        </div>
      </main>

      <main
        id="about"
        className="flex justify-between space-x-4 mt-3 px-4  scroll-animate"
      >
        <div className="flex-1 mt-28">
          <h1 className="font-bold text-custom-blue text-center text-4xl">
            Who we are
          </h1>
          <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            corrupti maiores sint soluta accusantium, saepe deleniti. Quaerat,
            facere aliquam voluptatibus ullam ipsum delectus pariatur voluptatem
            eius non laborum itaque, possimus optio quas atque harum minima
            porro vel tenetur quos eveniet obcaecati placeat dicta! Dignissimos
            accusantium deserunt numquam sed, eligendi et?.
          </p>
          <div className="text-center flex flex-col items-center">
            <button className="flex items-center text-white bg-blue-700  font-semibold mt-8 cursor-pointer py-2 px-4 ">
              Read more
              <span className="ml-2 flex items-center">
                <GoArrowRight className="text-white " />
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={About} alt="Banner image" className="w-screen h-screen" />
        </div>
      </main>

      {/* Services Section */}
      <section>
        <main id="services" className="mx-9 scroll-animate mb-20">
          <h1 className="font-bold text-custom-blue text-4xl text-center mb-10 ">
            Digital Experiences that Define Our Consultancy
          </h1>
          <div className=" flex-wrap grid grid-cols-4 mt-4 gap-10 ">
            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5 rounded-full  " />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  Quality Insurance Services
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg ">
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
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg ">
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
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg ">
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
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg ">
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
          <div className="flex-wrap grid grid-cols-3 mt-4 gap-8">
            <div className="relative shadow py-10  rounded-md px-6 bg-white hover:bg-custom-light-blue transition-colors duration-300 group pb-12">
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
                  T24 Integration
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

            <div className="relative shadow py-10 rounded-md px-6 bg-white hover:bg-custom-red transition-colors duration-300 group pb-12">
              <div className="text-center flex flex-col items-center">
                <RiDiscussLine className="text-5xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
                <h1 className="text-custom-blue text-2xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                  Data Migrations
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
              <div className="text-center flex flex-col items-center">
                <button className="flex items-center text-custom-red bg-transparent border-none text-xl font-semibold mt-8 cursor-pointer py-2 px-4 group-hover:text-white transition-colors duration-300">
                  Read more
                  <span className="ml-2 flex items-center">
                    <GoArrowRight className="text-custom-red group-hover:text-white transition-colors duration-300" />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative shadow py-10 rounded-md px-6 bg-white hover:bg-custom-green transition-colors duration-300 group pb-12">
              <div className="text-center flex flex-col items-center">
                <RiDiscussLine className="text-5xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
                <h1 className="text-custom-blue text-2xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                  T24 Training
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
              <div className="text-center flex flex-col items-center">
                <button className="flex items-center text-custom-green bg-transparent border-none text-xl font-semibold mt-8 cursor-pointer py-2 px-4 group-hover:text-white transition-colors duration-300">
                  Read more
                  <span className="ml-2 flex items-center">
                    <GoArrowRight className="text-custom-green group-hover:text-white transition-colors duration-300" />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative shadow py-10 rounded-md px-6 bg-white hover:bg-custom-yellow transition-colors duration-300 group pb-12">
              <div className="text-center flex flex-col items-center">
                <RiDiscussLine className="text-5xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
                <h1 className="text-custom-blue text-2xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                  Process optimisation
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
              <div className="text-center flex flex-col items-center">
                <button className="flex items-center text-custom-yellow bg-transparent border-none text-xl font-semibold mt-8 cursor-pointer py-2 px-4 group-hover:text-white transition-colors duration-300">
                  Read more
                  <span className="ml-2 flex items-center">
                    <GoArrowRight className="text-custom-yellow group-hover:text-white transition-colors duration-300" />
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
      <section id="team" className="mt-3 px-4 scroll-animate mx-3 mb-5">
        <h1 className="font-bold text-custom-blue  text-4xl text-center">
          Our Team
        </h1>
        <Slider {...settings} className="mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-md rounded-lg pb-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover rounded-md"
                />
                <h1 className="font-bold text-blue-700 text-xl mt-7 ml-5 mb-4 text-center">
                  {member.name}
                </h1>
                <p className="text-slate-800 text-base font-bold pb-5 text-center">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="mt-16 px-4 mb-6 mx-8 scroll-animate">
        <h1 className="font-bold text-custom-blue text-4xl text-center">
          Contact Us
        </h1>
        <div className="flex justify-between mt-10 mx-8">
          <div className="flex-wrap grid grid-cols-2 mt-4 gap-10 flex-1">
            <div>
              <IoLocationOutline className="text-5xl text-center text-blue-600" />
              <h1 className="text-blue-500 text-xl font-bold">Address</h1>
              <p>Kigali, Kicukiro</p>
            </div>
            <div>
              <FaWhatsapp className="text-5xl text-center text-blue-600" />
              <h1 className="text-blue-500 text-xl font-bold">Whatsapp</h1>
              <p>0783526677</p>
            </div>
            <div>
              <IoIosCall className="text-5xl text-center text-blue-600" />
              <h1 className="text-blue-500 text-xl font-bold">Call us</h1>
              <p>0786236363667</p>
            </div>
            <div>
              <MdOutlineMail className="text-5xl text-center text-blue-600" />
              <h1 className="text-blue-500 text-xl font-bold">Email us</h1>
              <p>example@gmail.com</p>
            </div>
          </div>

          <div className="flex-1">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-md p-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="rounded-md p-2"
              />
              <textarea
                placeholder="Message"
                className="rounded-md p-2"
              ></textarea>
              <button className="bg-blue-700 font-semibold w-1/4 text-lg rounded-md p-2 mt-7 text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <p className="text-center h-28 bg-slate-300 items-center justify-center flex">
        Copyright ©{new Date().getFullYear()}
        <span>Africode Consultancy.</span> All rights reserved.
      </p>
    </>
  )
}

export default App
