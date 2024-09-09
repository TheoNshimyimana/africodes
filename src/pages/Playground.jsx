import About from '../images/about.gif'
import banner from '../images/banner.jpg'
import { GoArrowRight } from 'react-icons/go'

function Play() {
  return (
    <>
      <main
        id="home"
        className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 mt-8 px-4 py-8 z-0 shadow-sm scroll-animate"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-blue-700 text-3xl md:text-4xl lg:text-5xl">
            Africode Consultancy Ltd
          </h1>
          <p className="mt-4 leading-8 text-slate-600 text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            corrupti maiores sint soluta accusantium, saepe deleniti. Quaerat,
            facere aliquam voluptatibus ullam ipsum delectus pariatur voluptatem
            eius non laborum itaque, possimus optio quas atque harum minima
            porro vel tenetur quos eveniet obcaecati placeat dicta! Dignissimos
            accusantium deserunt numquam sed, eligendi et?
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

      <main
        id="about"
        className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 mt-8 px-4 py-8 scroll-animate"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-custom-blue text-3xl md:text-4xl lg:text-5xl">
            Our Mission
          </h1>
          <p className="mt-4 leading-8 text-slate-600 text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            corrupti maiores sint soluta accusantium, saepe deleniti. Quaerat,
            facere aliquam voluptatibus ullam ipsum delectus pariatur voluptatem
            eius non laborum itaque, possimus optio quas atque harum minima
            porro vel tenetur quos eveniet obcaecati placeat dicta! Dignissimos
            accusantium deserunt numquam sed, eligendi et?
          </p>
          <div className="text-center md:text-left mt-8">
            <button
              className="flex items-center justify-center text-white bg-blue-700 font-semibold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-800"
            >
              Read More
              <span className="ml-2 flex items-center">
                <GoArrowRight className="text-white" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={About}
            alt="About image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </main>
    </>
  )
}

export default Play
