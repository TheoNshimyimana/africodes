// import { RiDiscussLine } from 'react-icons/ri'

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
function Services() {
  return (
    <section id="services" className="bg-slate-100  pt-10 ">
      {/* T24 Consultancy Section */}
      <main className=" scroll-animate pt-4  ">
        <h1 className="font-semibold text-custom-blue text-3xl text-center mb-10">
          Our Core Services
        </h1>
        <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 pb-10 px-5 gap-8">
          {/* T24 Training */}
          <div className="shadow p-5 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <Link to={'/trainings'}>
              <div className="text-center flex flex-col items-center">
                <FaChalkboardTeacher className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-lg font-bold mt-2">
                  T24 Training
                </h1>
              </div>
            </Link>
          </div>

          {/* CBS Implementation */}
          <div className="shadow p-5 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaTools className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-xl font-bold mt-2">
                CBS Implementation
              </h1>
            </div>
          </div>

          {/* Data Engineering */}
          <div className="shadow p-5 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaDatabase className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-xl font-bold mt-2">
                Data Engineering
              </h1>
            </div>
          </div>

          {/* Project Management */}
          <div className="shadow p-5 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <FaProjectDiagram className="text-4xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-xl font-bold mt-2">
                Project Management
              </h1>
            </div>
          </div>

          {/* T24 Integration */}
          <div className="shadow p-5 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <AiOutlineApi className="text-5xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-xl font-bold mt-2">
                T24 Integration
              </h1>
            </div>
          </div>

          {/* Quality Insurance Services */}
          <div className="shadow p-5 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <AiOutlineSafety className="text-5xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-xl font-bold mt-2">
                Quality Insurance Services
              </h1>
            </div>
          </div>

          {/* Process Optimisation */}
          <div className="shadow p-5 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <MdSettings className="text-5xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-xl font-bold mt-2">
                Process Optimisation
              </h1>
            </div>
          </div>

          {/* Management Information Systems */}
          <div className="shadow p-5 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <MdBusinessCenter className="text-5xl text-custom-green mb-5" />
              <h1 className="text-custom-blue text-xl font-bold mt-2">
                Management Information Systems
              </h1>
            </div>
          </div>
        </div>
      </main>

      {/* Products */}
      <main className="px-6 py-3  " id="products">
        <h1 className="font-semibold text-custom-blue text-3xl text-center mb-10">
          Our products
        </h1>
        <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-8">
          {/* Service Card 1 - Afronet */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaNetworkWired className="text-3xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                Afronet
              </h1>
            </div>
          </div>

          {/* Service Card 2 - Direct daily T24 transactions */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaStream className="text-3xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                Direct daily T24 transactions and contracts streaming
              </h1>
            </div>
          </div>

          {/* Service Card 3 - E-statements solution */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaFileInvoice className="text-3xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                E-statements solution
              </h1>
            </div>
          </div>

          {/* Service Card 4 - Dormant Accounts Management */}
          <div className="relative shadow py-10 rounded-xl px-6 bg-white pb-12">
            <div className="text-center flex flex-col items-center">
              <FaUserClock className="text-3xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-custom-blue text-xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                Dormant Accounts Management
              </h1>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Services
