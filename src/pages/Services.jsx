// Services.jsx
import React, { forwardRef } from 'react'
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
      {/* T24 Consultancy Section */}
      <main id="services" className="pt-4" ref={ref}>
        <h1 className=" text-custom-yellow text-3xl text-center mb-10">
          Our Core Services
        </h1>
        <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 pb-14 px-5 gap-4">
          {/* T24 Training */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaChalkboardTeacher className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                T24 Training
              </h1>
              <Link to="/training">
                <button className="mt-6 px-4 py-1 font-bold bg-custom-yellow text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* CBS Implementation */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaTools className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                CBS Implementation
              </h1>
              <Link to="/cbs_implementation">
                <button className="mt-6 px-4 py-1 bg-custom-yellow text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* Data Engineering */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaDatabase className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Data Engineering
              </h1>
              <Link to="/data_engineering">
                <button className="mt-6 px-4 py-1 bg-custom-yellow text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* Project Management */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaProjectDiagram className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Project Management
              </h1>
              <Link to="/project_management">
                <button className="mt-6 px-4 py-1 bg-custom-yellow text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* T24 Integration */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <AiOutlineApi className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                T24 Integration
              </h1>
              <Link to="/integration">
                <button className="mt-6 px-4 py-1 bg-custom-yellow text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* Quality Insurance Services */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <AiOutlineSafety className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Quality Insurance Services
              </h1>
              <Link to="/quality_insurance">
                <button className="mt-6 px-4 py-1 bg-custom-yellow text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* Process Optimisation */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <MdSettings className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Process Optimisation
              </h1>
              <Link to="/process_optimisation">
                <button className="mt-6 px-4 py-1 bg-custom-yellow text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          {/* Management Information Systems */}
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <MdBusinessCenter className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
                Management Information Systems
              </h1>
              <Link to="/management_information">
                <button className="mt-6 px-4 py-1 bg-custom-yellow text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Products */}
      <main className="px-6 py-10" id="products">
        <h1 className=" text-custom-yellow text-3xl text-center mb-10">
          Our Products
        </h1>
        <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-8">
          {/* Product Card 1 - Afronet */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaNetworkWired className="text-3xl text-custom-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">Afronet</h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam cumque sapiente culpa non perferendis nam. Quod quo voluptatem ducimus numquam?
              </p>
              
            </div>
          </div>

          {/* Product Card 2 - Direct Daily T24 Transactions */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaStream className="text-3xl text-custom-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">
                Direct Daily T24 Transactions
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsum neque sapiente cumque quasi voluptate quam animi quas.
              </p>
              
            </div>
          </div>

          {/* Product Card 3 - E-Statements Solution */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaFileInvoice className="text-3xl text-custom-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">
                E-Statements Solution
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos itaque accusamus laudantium facilis temporibus! Odio ab exercitationem numquam veritatis eius? Nemo eos omnis asperiores eius dolores minima voluptate vitae?
              </p>
            
            </div>
          </div>

          {/* Product Card 4 - Dormant Accounts Management */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaUserClock className="text-3xl text-custom-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-lg font-bold">
                Dormant Accounts Management
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique itaque in iste fuga soluta aliquid!
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
