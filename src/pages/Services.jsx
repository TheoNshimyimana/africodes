
import  { forwardRef } from 'react'
import {
  FaNetworkWired,
  FaStream,
  FaFileInvoice,
  FaUserClock,
} from 'react-icons/fa'
import {
  FaTools,
  FaDatabase,
  FaProjectDiagram,
  FaChalkboardTeacher,
} from 'react-icons/fa'
import { AiOutlineApi, AiOutlineSafety } from 'react-icons/ai'
import { MdSettings, MdBusinessCenter } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Services = forwardRef((props, ref) => {
  return (
    <section className="bg-slate-100 pt-10">
     
      <main id="services" className="pt-4" ref={ref}>
        <h1 className=" font-semibold text-custom-blue text-3xl text-center mb-10">
          Our Core Services
        </h1>
        <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 pb-14 px-5 gap-4">
          
          <div className="shadow  py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaChalkboardTeacher className="text-4xl text-custom-blue mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                T24 Training
              </h1>
              <Link to="/training">
                <button className="mt-6 px-4 py-1 font-bold bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

         
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaTools className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                CBS Implementation
              </h1>
              <Link to="/cbs_implementation">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaDatabase className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Data Engineering
              </h1>
              <Link to="/data_engineering">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaProjectDiagram className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Project Management
              </h1>
              <Link to="/project_management">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

       
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <AiOutlineApi className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                T24 Integration
              </h1>
              <Link to="/integration">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

         
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <AiOutlineSafety className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Quality Ansurance Services
              </h1>
              <Link to="/quality_insurance">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <MdSettings className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Process Optimisation
              </h1>
              <Link to="/process_optimisation">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          
          <div className="shadow px-4 py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <MdBusinessCenter className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Management Information Systems
              </h1>
              <Link to="/management_information">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Products */}
      <main className="px-6 py-16" id="products">
        <h1 className="font-semibold text-custom-blue text-3xl text-center mb-10">
          Our Products
        </h1>
        <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-8">
          
          <div className="relative shadow py-28 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaNetworkWired className="text-4xl text-custom-blue mb-8 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">Afronet</h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                
              </p>
            </div>
          </div>

          
          <div className="relative shadow py-28 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaStream className="text-4xl text-custom-blue mb-8 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">
                Direct Daily T24 Transactions
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
               
              </p>
            </div>
          </div>

          
          <div className="relative shadow py-28 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaFileInvoice className="text-4xl text-custom-blue mb-8 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">
                E-Statements Solution
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
               
              </p>
            </div>
          </div>

          
          <div className="relative shadow py-28 pb-28 rounded-xl px-6 bg-white ">
            <div className="text-center flex flex-col items-center">
              <FaUserClock className="text-4xl text-custom-blue mb-8 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">
                Dormant Accounts Management
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
})

Services.displayName = 'Services'

export default Services
