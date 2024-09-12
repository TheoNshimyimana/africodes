import Logo from '../images/Logo.png'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

function Footer() {
  const handleScroll = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <footer className="bg-slate-200 text-slate-900 py-10 md:py-12 px-4 md:px-8 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 my-10">
        {/* Logo and Description */}
        <div className="lg:w-2/5 flex flex-col items-center lg:items-start mb-10 lg:mb-0">
          <img src={Logo} alt="Company Logo" className="w-32 md:w-48 mb-4" />
          <p className="text-center lg:text-left mb-4">
            Africode Consultancy Ltd provides top-notch solutions for businesses
            to thrive in the digital age.
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-slate-900"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-slate-900"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-slate-900"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-slate-900"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-custom-blue">
            Useful Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, '#home')}
                className="hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="hover:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, '#products')}
                className="hover:underline"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#team"
                onClick={(e) => handleScroll(e, '#team')}
                className="hover:underline"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-custom-blue">
            Our Services
          </h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="hover:underline"
              >
                T24 Integration
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="hover:underline"
              >
                T24 Implementations and Upgrades
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="hover:underline"
              >
                Project Management
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="hover:underline"
              >
                Software Development
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="hover:underline"
              >
                Data Mining
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="hover:underline"
              >
                Business Continuity Management Consulting
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="hover:underline"
              >
                Advisory Services and Capacity Building
              </a>
            </li>
          </ul>
        </div>

        {/* Our Products */}
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-custom-blue">
            Our Products
          </h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, '#products')}
                className="hover:underline"
              >
                Afronet
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, '#products')}
                className="hover:underline"
              >
                E-Statements Solution
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, '#products')}
                className="hover:underline"
              >
                Dormant Accounts Management
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, '#products')}
                className="hover:underline"
              >
                Direct Daily T24 Transactions and Contracts Streaming
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 md:mt-8 pt-4 text-center text-slate-900">
        &copy; {new Date().getFullYear()} Africode Consultancy Ltd. All rights
        reserved.
      </div>
    </footer>
  )
}

export default Footer
