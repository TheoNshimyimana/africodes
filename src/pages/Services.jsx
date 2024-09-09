
import { RiDiscussLine } from 'react-icons/ri'
import { PiStackPlusLight } from 'react-icons/pi'
import { GoArrowRight } from 'react-icons/go'

function Services() {
    return (
      <section>
        <main id="services" className="mx-9 scroll-animate mb-20">
          <h1 className="font-bold text-custom-blue text-4xl text-center mb-10">
            T24 Consultancy
          </h1>
          <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-10">
            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5 rounded-full" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  CBS Implementation
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>

            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  Data Engineering
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>

            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  Project Management
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>
            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  T24 Training
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>
            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  T24 Integration
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>
            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  Quality Insurance Services
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>
            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  Process optimisation
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>

            <div className="shadow p-5 bg-white">
              <div className="text-center flex flex-col items-center">
                <PiStackPlusLight className="text-5xl text-custom-green mb-5" />
                <h1 className="text-custom-blue text-xl font-bold mt-2">
                  Management Information Systems
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
            </div>
          </div>
        </main>

        {/* ServiceCards */}

        <main className="mx-9">
          <h1 className="font-bold text-custom-blue text-4xl text-center mb-10">
            Business Continuity Managment Consulting
          </h1>
          <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
            <div className="relative shadow py-10 rounded-md px-6 bg-white hover:bg-custom-light-blue transition-colors duration-300 group pb-12">
              <div className="text-center flex flex-col items-center">
                <RiDiscussLine className="text-5xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
                <h1 className="text-custom-blue text-2xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                  Management Information Systems (MIS)
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
              <div className="text-center flex flex-col items-center">
                <button className="flex items-center text-custom-light-blue bg-transparent border-none text-xl font-semibold mt-8 cursor-pointer py-2 px-4 group-hover:text-white transition-colors duration-300">
                  Read more
                  <span className="ml-2 flex items-center">
                    <GoArrowRight className="text-custom-light-blue group-hover:text-white transition-colors duration-300" />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative shadow py-10 rounded-md px-6 bg-white hover:bg-custom-orange transition-colors duration-300 group pb-12">
              <div className="text-center flex flex-col items-center">
                <RiDiscussLine className="text-5xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
                <h1 className="text-custom-blue text-2xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                  CBS Implementation
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
              <div className="text-center flex flex-col items-center">
                <button className="flex items-center text-custom-orange bg-transparent border-none text-xl font-semibold mt-8 cursor-pointer py-2 px-4 group-hover:text-white transition-colors duration-300">
                  Read more
                  <span className="ml-2 flex items-center">
                    <GoArrowRight className="text-custom-orange group-hover:text-white transition-colors duration-300" />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative shadow py-10 rounded-md px-6 bg-white hover:bg-custom-purple transition-colors duration-300 group pb-12">
              <div className="text-center flex flex-col items-center">
                <RiDiscussLine className="text-5xl text-custom-light-blue mb-5 group-hover:text-white transition-colors duration-300" />
                <h1 className="text-custom-blue text-2xl font-bold mt-2 group-hover:text-white transition-colors duration-300">
                  Post system implementation audit
                </h1>
              </div>
              <p className="flex-wrap flex mt-4 leading-8 text-slate-600 text-lg group-hover:text-white transition-colors duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quis minus consequatur aliquid? Quo, quam alias deleniti
                officiis consequatur non?
              </p>
              <div className="text-center flex flex-col items-center">
                <button className="flex items-center text-custom-purple bg-transparent border-none text-xl font-semibold mt-8 cursor-pointer py-2 px-4 group-hover:text-white transition-colors duration-300">
                  Read more
                  <span className="ml-2 flex items-center">
                    <GoArrowRight className="text-custom-purple group-hover:text-white transition-colors duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>
    )
}

export default Services
