import { Link } from 'react-router-dom'
import { FaChalkboardTeacher } from 'react-icons/fa'

const Training = () => {
  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <FaChalkboardTeacher className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">T24 Training</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            Equipping banking professionals with the knowledge and skills
            required to efficiently navigate and utilize the T24 core banking
            system. Through a combination of hands-on experience and expert-led
            modules, participants gain insights into system functionalities,
            report generation, transaction management, and system
            administration. This training is tailored to ensure users can fully
            leverage T24's capabilities to streamline banking operations.
          </p>
          <Link to="/" className=" text-white mb-5 hover:bg-yellow-600 bg-custom-yellow rounded-lg px-3 py-1">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Training