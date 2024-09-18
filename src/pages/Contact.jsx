import { useState, useRef } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { IoIosCall } from 'react-icons/io'
import { TbClockHour4 } from 'react-icons/tb'
import { MdOutlineMail } from 'react-icons/md'
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from 'react-icons/io'
import Loader from './Loader'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const formRef = useRef(null)

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    const formData = new FormData(event.target)
    formData.append('access_key', 'efaaf9b0-abeb-4310-8bb8-f072e5acd184')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json())

      if (res.success) {
        setSuccess('Your message has been sent successfully!')
        formRef.current.reset()
        setTimeout(() => setSuccess(null), 5000) // Hide success message after 5 seconds
      } else {
        setError('Failed to send your message. Please try again.')
        setTimeout(() => setError(null), 5000) // Hide error message after 5 seconds
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.')
      setTimeout(() => setError(null), 5000) // Hide error message after 5 seconds
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="px-4 sm:px-8 lg:px-4 bg-slate-100 relative pt-10 z-10 "
    >
      <h1 className="font-semibold text-custom-yellow text-3xl sm:text-base lg:text-3xl text-center mt-6 mb-8">
        Contact Us
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-4">
        {/* Contact Info */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="text-center p-4 shadow-md rounded-lg bg-slate-100">
            <IoLocationOutline className="text-5xl text-custom-blue mx-auto" />
            <h2 className="text-custom-blue text-xl font-semibold mt-3">
              Address
            </h2>
            <p className="text-gray-600">
              KG 578 Kacyiru, Gasabo District Kigali, Rwanda
            </p>
          </div>
          <div className="text-center p-4 bg-slate-100 shadow-md rounded-lg">
            <TbClockHour4 className="text-5xl text-custom-blue mx-auto" />
            <h2 className="text-custom-blue text-xl font-semibold mt-3">
              Opening Hours
            </h2>
            <p className="text-gray-600"> Mon - Fri: 08:00 - 16:00</p>
            <p className="text-gray-600"> Sat - Sun: 09:00 - 14:00</p>
          </div>
          <div className="text-center p-4 bg-slate-100 shadow-md rounded-lg">
            <IoIosCall className="text-5xl text-custom-blue mx-auto" />
            <h2 className="text-custom-blue text-xl font-semibold mt-3">
              Call Us
            </h2>
            <p className="text-gray-600">Mobile RW: +250 781 467 638</p>
            <p className="text-gray-600">Mobile RW: +250 789 176 953</p>
          </div>
          <div className="text-center p-4 bg-slate-100 shadow-md rounded-lg">
            <MdOutlineMail className="text-5xl text-custom-blue mx-auto" />
            <h2 className="text-custom-blue text-xl font-semibold mt-3">
              Email Us
            </h2>
            <p className="text-gray-700">info@africodeconsult.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-slate-100 shadow-md rounded-lg pb-4 lg:ml-2">
          <form
            ref={formRef}
            className="flex flex-col gap-5"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`bg-custom-yellow font-semibold w-1/2 text-lg rounded-md p-1 mt-4 text-white hover:bg-yellow-600 transition duration-300 ${
                  loading ? 'cursor-not-allowed' : ''
                }`}
              >
                {loading ? <Loader /> : 'Submit'}
              </button>
            </div>
          </form>

          {/* Success/Error Messages */}
          {success && (
            <div className="flex items-center font bo gap-3 mt-4 font-semibold p-4 bg-green-100 text-green-700 rounded-md">
              <IoMdCheckmarkCircleOutline className="text-2xl" />
              <p>{success}</p>
            </div>
          )}
          {error && (
            <div className="flex items-center gap-3 mt-4 p-4 bg-red-100 text-red-700 rounded-md">
              <IoMdCloseCircleOutline className="text-2xl" />
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
