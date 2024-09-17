import { Link } from 'react-router-dom'
import { FaTools } from 'react-icons/fa'

const Implementation= () => {
  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <FaTools className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">Cbs Implementation</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            CBS Implementation involving the end-to-end deployment of a
            comprehensive banking software solution. This service includes
            detailed planning, system customization, data migration, and testing
            to ensure the banking platform meets the unique needs of the
            institution. The goal is to deliver a seamless transition from
            legacy systems to a modern, efficient CBS that enhances operational
            efficiency, regulatory compliance, and customer satisfaction.
          </p>
          <Link
            to="/"
            className=" text-white mb-5 hover:bg-yellow-600 bg-custom-yellow rounded-lg px-3 py-1"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Implementation
