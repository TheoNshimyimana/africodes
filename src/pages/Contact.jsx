import { FaWhatsapp } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { IoIosCall } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'

function Contact() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-8 lg:px-16  bg-gray-100 relative z-10"
    >
      <h1 className="font-bold text-custom-blue text-3xl sm:text-4xl lg:text-5xl text-center mb-8">
        Contact Us
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Contact Info */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="text-center p-4 bg-white shadow-md rounded-lg">
            <IoLocationOutline className="text-5xl text-blue-600 mx-auto" />
            <h2 className="text-blue-500 text-xl font-semibold mt-3">
              Address
            </h2>
            <p className="text-gray-600">Kigali, Kicukiro</p>
          </div>
          <div className="text-center p-4 bg-white shadow-md rounded-lg">
            <FaWhatsapp className="text-5xl text-blue-600 mx-auto" />
            <h2 className="text-blue-500 text-xl font-semibold mt-3">
              Whatsapp
            </h2>
            <p className="text-gray-600">0783526677</p>
          </div>
          <div className="text-center p-4 bg-white shadow-md rounded-lg">
            <IoIosCall className="text-5xl text-blue-600 mx-auto" />
            <h2 className="text-blue-500 text-xl font-semibold mt-3">
              Call Us
            </h2>
            <p className="text-gray-600">0786236363667</p>
          </div>
          <div className="text-center p-4 bg-white shadow-md rounded-lg">
            <MdOutlineMail className="text-5xl text-blue-600 mx-auto" />
            <h2 className="text-blue-500 text-xl font-semibold mt-3">
              Email Us
            </h2>
            <p className="text-gray-600">example@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6 lg:ml-10">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              className="rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
            <button className="bg-blue-700 font-semibold w-full text-lg rounded-md p-3 mt-4 text-white hover:bg-blue-800 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
