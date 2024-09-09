import Logo from '../images/Logo.png' 
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'
import { MdEmail, MdOutlineMail } from 'react-icons/md'

function Footer() {
  return (
    <footer className="bg-slate-200 text-white py-12 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
        {/* Logo and Description (Larger Width) */}
        <div className="flex flex-col lg:w-2/5 mb-8 lg:mb-0">
          <img src={Logo} alt="Company Logo" className="w-full mb-4" />
          <p className="text-slate-900 mb-4">
            Africode Consultancy Ltd provides top-notch solutions for businesses
            to thrive in the digital age. Our expert team offers tailored
            strategies and support to meet your needs and drive growth.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex-1 ml-5 mb-8 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-custom-blue">
            Useful Links
          </h2>
          <ul className="space-y-2 text-slate-900">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#team" className="hover:underline">
                Our Team
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-custom-blue">
            Our Services
          </h2>
          <ul className="space-y-2 text-slate-900">
            <li>
              <a href="#consulting" className="hover:underline">
                Consulting
              </a>
            </li>
            <li>
              <a href="#strategy" className="hover:underline">
                Strategy
              </a>
            </li>
            <li>
              <a href="#implementation" className="hover:underline">
                Implementation
              </a>
            </li>
            <li>
              <a href="#support" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h2 className="text-lg mb-4 text-custom-blue font-bold">
            Contact Us
          </h2>
          <ul className="space-y-2 text-slate-900">
            <li className="flex items-center">
              <span className="text-blue-400 mr-2">
              <MdOutlineMail className="text-lg text-blue-500 mx-auto" />
              </span>
              <a href="mailto:example@gmail.com" className="hover:underline">
                example@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-2">
                <IoIosCall className="text-lg text-blue-500 mx-auto" />
              </span>
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-2">
                <IoLocationOutline className="text-lg text-blue-500 mx-auto" />
              </span>
              <span>Kigali, Kicukiro</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8  pt-4 text-center text-slate-900">
        &copy; {new Date().getFullYear()} Africode Consultancy Ltd. All rights
        reserved.
      </div>
    </footer>
  )
}

export default Footer
