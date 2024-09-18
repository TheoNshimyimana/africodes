import { MdBusinessCenter } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const InfoManagement = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <MdBusinessCenter className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">Information Management</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            Management Information System (MIS) providing organizations with the
            tools to gather, process, and analyze data, transforming it into
            actionable information for decision-making. This service includes
            designing and implementing systems for data reporting, business
            analytics, and real-time monitoring to help management teams track
            performance, forecast trends, and optimize operations.
          </p>
          <button
            onClick={() => navigate(-1)} // Navigates back to the previous page
            className="text-white hover:bg-yellow-600 bg-custom-yellow rounded-lg px-4 py-2 shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            &larr; Back to Services
          </button>
        </div>
      </div>
    </div>
  )
}

export default InfoManagement
