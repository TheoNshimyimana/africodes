import { useState } from 'react'
import emailjs from 'emailjs-com'

const GetAppointment = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    emailjs
      .sendForm(
        'service_opp7kup',
        'template_zm7tt1g',
        e.target,
        'zg5778kvkw2R_cDoQ'
      )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text)
          setSuccess('Appointment scheduled successfully!')
          setFormData({
            name: '',
            email: '',
            date: '',
            time: '',
          })
          closeModal()
        },
        (error) => {
          console.error('Email sending failed:', error)
          setError(
            `Failed to schedule appointment. Reason: ${
              error.text || 'Unknown error'
            }`
          )
        }
      )
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-custom-blue">
          Get an Appointment
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 font-medium mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-gray-700 font-medium mb-2"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          {loading ? 'Scheduling...' : 'Schedule Appointment'}
        </button>
      </form>
    </section>
  )
}

export default GetAppointment
