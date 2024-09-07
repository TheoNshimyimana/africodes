import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.css'
import banner from './images/banner.jpg'
import Logo from './images/Logo.jpg'

import { FaWhatsapp } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { IoIosCall } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'
import { AiFillFacebook } from 'react-icons/ai'

import Frai from './images/farai2.jpg'
import Dereck from './images/dereck.png'
import Bless from './images/blissful.jpg'
import Kenny from './images/kenny.jpg'
import Boudoun from './images/nkru.jpg'
import Tinashe from './images/nzdwe.jpg'
import Musoni from './images/musni.jpg'
import Manzi from './images/manzi.jpg'

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <>
      {/* Navbar  */}
      <nav className=" px-2 flex items-center justify-between h-16 shadow-md sticky z-50">
        <div>
          <img src={Logo} alt="Logo" className="h-16 pl-5" />
        </div>
        <div className="flex items-center justify-end gap-10 mr-10">
          <div className="flex items-center justify-center font-semibold text-blue-500 gap-7">
            <ul>
              <li>Home</li>
            </ul>
            <ul>
              <li>About</li>
            </ul>
            <ul>
              <li>Services</li>
            </ul>
            <ul>
              <li>Team</li>
            </ul>
            <ul>
              <li>Contact</li>
            </ul>
          </div>

          <button className="bg-blue-500 font-semibold text-lg rounded-md p-2 text-white ">
            Get Started
          </button>
        </div>
      </nav>

      {/* body */}

      <main className="flex justify-between space-x-4  mt-3 px-4 z-0">
        <div className="flex-1 mt-28">
          <h1 className="font-bold text-blue-700 text-4xl ">
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
          <button className="bg-blue-700 font-semibold text-lg rounded-md py-2 px-8 mt-7  text-white">
            Get Started
          </button>
        </div>
        <div className="flex-1">
          <img src={banner} alt="Banner image" className="w-screen h-screen" />
        </div>
      </main>

      {/* Team */}
      <section className="mt-3 px-4 ">
        <h1 className="font-bold text-blue-700 text-4xl text-center">
          Our Team
        </h1>
        <Slider {...settings} className="mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 ">
              <div className="bg-white shadow-md rounded-md hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover rounded-sm"
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

      {/* Contact us */}

      <section className="mt-3 px-4 mb-6 ">
        <h1 className="font-bold text-blue-700 text-4xl text-center">
          Contact Us
        </h1>
        <div className="flex justify-between mt-10 mx-8">
          <div className="flex-wrap grid grid-cols-2 mt-4  gap-10 flex-1 ">
            <div>
              <IoLocationOutline className="text-5xl text-center  text-blue-600" />

              <h1 className="text-blue-500 text-xl font-bold">Address</h1>
              <p>Kigali, Kicukiro</p>
            </div>
            <div>
              <FaWhatsapp className="text-5xl text-center  text-blue-600" />

              <h1 className="text-blue-500 text-xl font-bold">Whatsapp</h1>
              <p>0783526677</p>
            </div>
            <div>
              <IoIosCall className="text-5xl text-center  text-blue-600" />
              <h1 className="text-blue-500 text-xl font-bold">Call us</h1>
              <p>0786236363667</p>
            </div>
            <div>
              <MdOutlineMail className="text-5xl text-center  text-blue-600" />
              <h1 className="text-blue-500 text-xl font-bold">Email us</h1>
              <p>exampl@gmail.com</p>
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
              <button className="bg-blue-700 font-semibold w-1/4 text-lg rounded-md p-2 mt-7  text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* <footer className=" ">
        <div className="flex  items-center justify-between bg-white">
          <div className="flex-1">
            <img src={Logo} alt="Logo" className="h-16 pl-5 " />
            <p className="flex-wrap">
              is committed to meeting or exceeding the high quality of service
              expectations to our clients, customers with Excellence in pursuit.
            </p>
            <div>
              <AiFillFacebook className="text-5xl text-center  text-blue-600" />
            </div>
          </div>
          <div className="flex-1 flex  items-center justify-between">
            <div>
              <h1 className="font-bold text-lg text-blue-600">Contact Us</h1>
              <IoLocationOutline className="text-xl text-center  text-blue-600" />
              <span>Kigali, Kicukiro</span>
              <FaWhatsapp className="text-xl text-center  text-blue-600" />
              <span>
                <p>0783526677</p>
              </span>
              <IoIosCall className="text-xl text-center  text-blue-600" />
              <span>
                <p>0786236363667</p>
              </span>
              <MdOutlineMail className="text-xl text-center  text-blue-600" />
              <span>
                <p>Email us </p>
              </span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-blue-600">Quick Links</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Team</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-lg text-blue-600 ">Services</h1>
              <ul>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Consultancy</li>
                <li>Training</li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
      <p className="text-center h-28 bg-slate-300 items-center justify-center flex">
        Copyright ©{new Date().getFullYear()}
        <span>Africode Consultancy. </span> All right reserved.
      </p>
    </>
  )
}

export default App
