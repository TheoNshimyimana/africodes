import { Link } from 'react-router-dom'
import { AiOutlineSafety } from 'react-icons/ai'

const QualityInsurance = () => {
  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <AiOutlineSafety className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">Quality Insurance System</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            Quality Assurance Services ensuring that systems, processes, and
            products meet specified requirements and are free of defects. This
            involves thorough testing at various stages of development to
            identify issues early, ensuring stability and functionality. QA
            services also help improve performance, security, and compliance
            with regulatory standards.
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

export default QualityInsurance
