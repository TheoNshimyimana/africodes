
// import About from '../images/about.gif'
import banner from '../images/banner.jpg'
import { GoArrowRight } from 'react-icons/go'


function Body() {
    return (
      <>
        <main
          id="home"
          className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 -mt-7 pl-6 py-0 z-0 shadow-sm scroll-animate"
        >
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-bold text-blue-700 text-3xl md:text-4xl lg:text-5xl">
              Africode Consultancy Ltd
            </h1>
            <p className="mt-4 leading-10 text-slate-600 text-base md:text-lg">
              We have a core team in place comprising people with specialisation
              in Dell, HP & Lenovo products and services, T24 implementation,
              business intelligence software, business process realignment,
              business requirement gathering, training, system audit. Through
              our technical partners we have vast experience in research and
              surveys in private and public sectors. We have capable skills in
              capacity building initiatives, project monitoring and evaluation,
              project management and training. Africode group members form
              highly productive relationships with management and staff at all
              levels, build on common values and mutual respect while rigorously
              preserving their professional objectivity and independence at all
              times.
            </p>
            <div className="text-center md:text-left mt-8">
              <button className="flex items-center justify-center text-white bg-blue-700 font-semibold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-800">
                Get Started
                <span className="ml-2 flex items-center">
                  <GoArrowRight className="text-white" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={banner}
              alt="Banner image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </main>

        <section className="py-12 px-4 md:px-8 bg-gray-50">
          <h1 className="font-bold text-custom-blue text-center text-3xl md:text-4xl lg:text-5xl mb-8">
            About Us
          </h1>
          <main
            id="about"
            className="flex flex-col md:flex-row gap-8 md:gap-12"
          >
            {/* Mission Card */}
            <div className="flex-1 bg-custom-black text-white p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div>
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
                  Our Mission
                </h2>
                <p className="leading-relaxed text-base md:text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum corrupti maiores sint soluta accusantium, saepe
                  deleniti. Quaerat, facere aliquam voluptatibus ullam ipsum
                  delectus pariatur voluptatem eius non laborum itaque, possimus
                  optio quas atque.
                </p>
              </div>
            </div>
            {/* Vision and Values Container */}
            <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Vision Card */}
              <div className="flex-1 bg-custom-yellow text-black p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div>
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
                    Our Vision
                  </h2>
                  <p className="leading-relaxed text-base md:text-lg">
                    To become one of the most trusted business consultancy
                    enterprises in Africa and beyond.
                  </p>
                </div>
              </div>
              {/* Values Card */}
              <div className="flex-1 bg-custom-green text-black p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div>
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
                    Our Values
                  </h2>
                  <p className="leading-relaxed text-base md:text-lg">
                    To empower people and businesses through the provision of
                    excellently tailored solutions which meet all business and
                    individual needs.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </section>
      </>
    )
}

export default Body
