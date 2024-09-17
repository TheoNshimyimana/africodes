import { Link } from 'react-router-dom'
import { AiOutlineApi } from 'react-icons/ai'

const Integration = () => {
  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <AiOutlineApi className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">T24 Integration</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            T24 Integration involving connecting the T24 core banking system
            with other internal and external systems, such as customer
            relationship management (CRM), payment gateways, and third-party
            applications. The goal is to enable seamless data flow and process
            automation, enhancing the bank’s operational efficiency, accuracy,
            and responsiveness.
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

export default Integration
