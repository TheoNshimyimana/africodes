import { useRef, useState } from 'react'
import Loader from './Loader'

const GetAppointment = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const formRef = useRef(null)
  const timeInputRef = useRef(null)

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    const formData = new FormData(event.target)
    formData.append('access_key', 'c4385f6a-a6aa-4ca0-964e-30d1b248ea45')

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
        setTimeout(() => setSuccess(null), 5000) // Clear success message after 5 seconds
        formRef.current.reset()
      } else {
        setError('Failed to send your message. Please try again.')
        setTimeout(() => setError(null), 5000) // Clear error message after 5 seconds
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.')
      setTimeout(() => setError(null), 5000) // Clear error message after 5 seconds
    } finally {
      setLoading(false)
    }
  }

  const handleTimeChange = () => {
    // Blur the input field to close the time dropdown
    if (timeInputRef.current) {
      timeInputRef.current.blur()
    }
  }

  return (
    <section className="px-4 py-4 lg:py-5 bg-gray-50">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl lg:text-3xl font-bold text-custom-blue">
          Get an Appointment
        </h1>
      </div>

      {/* Modal with reduced height */}
      <div className="bg-white p-4 lg:p-5 rounded-lg shadow-md max-w-lg mx-auto max-h-[90vh] overflow-auto">
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="flex flex-col space-y-3"
        >
          {/* Flexbox for label and input with reduced spacing */}
          <div className="flex items-center space-x-2">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium w-1/6"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium w-1/6"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <label
              htmlFor="date"
              className="block text-gray-700 font-medium w-1/6"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <label
              htmlFor="time"
              className="block text-gray-700 font-medium w-1/6"
            >
              Time
            </label>
            <input
              ref={timeInputRef}
              type="time"
              id="time"
              name="time"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleTimeChange} // Handle time change
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
            ></textarea>
          </div>

          {error && (
            <div className="flex items-center text-red-500 bg-red-100 p-2 rounded-md">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01M12 5h.01M4 6h16l-2 14H6L4 6z"
                ></path>
              </svg>
              {error}
            </div>
          )}

          {success && (
            <div className="flex items-center text-green-500 bg-green-100 text-lg font-semibold p-2 rounded-md">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            {loading ? <Loader /> : 'Schedule Appointment'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default GetAppointment
