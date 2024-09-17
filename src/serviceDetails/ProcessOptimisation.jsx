import { Link } from 'react-router-dom'
import { MdSettings } from 'react-icons/md'

const ProcessOptimisation = () => {
  return (
    <div className="bg-bg-image min-h-screen items-center justify-center flex py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-custom-blue p-6 text-white">
          <MdSettings className="text-5xl mr-4" />
          <h1 className="text-4xl font-semibold">Process Optimisation</h1>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-custom-yellow font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-gray-700 mb-10 text-xl leading-10">
            Process Optimization focusing on analyzing, refining, and improving
            business processes to boost efficiency, reduce operational costs,
            and enhance customer experiences. This service involves identifying
            bottlenecks, streamlining workflows, and implementing best practices
            for continuous improvement.
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

export default ProcessOptimisation
