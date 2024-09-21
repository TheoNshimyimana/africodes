import { FaDatabase } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const DataEngineering = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <FaDatabase className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">Data Engineering</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            Data Engineering focusing on designing, building, and maintaining
            the infrastructure necessary to manage and analyze large volumes of
            data. This service ensures data is collected, stored, and processed
            in a structured way, enabling businesses to derive actionable
            insights. It involves data pipeline creation, database management,
            and implementing best practices for data security and scalability.
          </p>
          <button
            onClick={() => navigate(-1)} 
            className="text-white hover:bg-yellow-600 bg-custom-yellow rounded-lg px-4 py-2 shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            &larr; Back to Services
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataEngineering
