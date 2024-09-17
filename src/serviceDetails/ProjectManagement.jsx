import { Link } from 'react-router-dom'
import { FaProjectDiagram } from 'react-icons/fa'

const ProjectManagement = () => {
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

export default ProjectManagement
