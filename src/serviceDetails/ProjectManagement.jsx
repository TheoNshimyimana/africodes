import { FaProjectDiagram } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ProjectManagement = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <FaProjectDiagram className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">T24 Project Management</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            Project Management guiding the successful planning, execution, and
            completion of projects across various domains. By employing
            industry-standard methodologies such as Agile or Waterfall, this
            service ensures that project goals are met on time, within scope,
            and budget. Key activities include task scheduling, resource
            allocation, risk management, and stakeholder communication.
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

export default ProjectManagement
