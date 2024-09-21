// import { useState } from 'react'
import banner from '../images/banner.jpg'
import Bg from '../assets/bg.jpg'
import Logo from '../assets/loggo.png'

function Body() {
  const scrollToServices = () => {
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 0
    const element = document.getElementById('services')
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <section id="home">
        <section
          style={{ backgroundImage: `url(${Bg})` }}
          className="w-full h-1/2 sm:h-1/2 flex items-center justify-center p-14"
        >
          <div className="h-32 w-32 sm:h-52 sm:w-52 rounded-full overflow-hidden flex items-center justify-center bg-white">
            <img
              src={Logo}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </section>

        {/* Home Section */}
        <main className="flex flex-col md:flex-row bg-slate-100 justify-between md:space-y-0 md:space-x-4 pt-0 gap-5 py-0 z-0 scroll-animate bg-cover bg-center">
          <div className="flex-1 sm:mt-0 lg:mt-12 md:text-left pl-6">
            <h1 className="text-custom-blue  text-2xl md:text-3xl pl-4 lg:text-4xl">
              Africode Consultancy Ltd
            </h1>
            <p className="mt-4 leading-10 text-slate-600 text-base md:text-lg text-justify mx-4 sm:mx-4 font-semibold">
              Africode Consultancy specializes in ICT consultancy, advisory
              services, capacity building, and training. We simplify enterprise
              technology and offer high-quality services at affordable prices.
              Our approach is centered on understanding and meeting our client's
              specific business needs, guided by strong business principles and
              a commitment to quality. We focus on integrating human capital
              development with our business culture to provide tailored
              solutions. Our experienced management and technical expertise
              ensure efficient and professional services, aligning with
              data-driven organizations to optimize business outcomes.
            </p>
            <div className="text-center md:text-left mt-10">
              <button
                onClick={scrollToServices}
                className="flex items-center ml-3 justify-center text-white bg-custom-yellow font-semibold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-yellow-600"
              >
                What We Offer
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={banner}
              alt="Banner image"
              className="w-full h-[500px] rounded-lg object-cover shadow-md"
            />
          </div>
        </main>
      </section>

      {/* About Section */}
      <section id="about" className="pt-14 px-4 pb-16 md:px-8 bg-slate-100">
        <h1 className=" font-semibold text-custom-blue text-center text-3xl md:text-2xl lg:text-3xl mb-10">
          About Us
        </h1>
        <main className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1 bg-custom-green text-black pt-10 px-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div>
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
                  Our Mission
                </h2>
                <p className="leading-relaxed text-md md:text-base font-semibold ">
                  To empower people and businesses through excellently tailored
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-custom-yellow text-black pt-10 px-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div>
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
                  Our Vision
                </h2>
                <p className="leading-relaxed text-md md:text-base font-semibold ">
                  To be the preferred ICT consultancy company of choice in the
                  banking and financial services industry.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-custom-black text-white pb-14 pt-10 px-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div>
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
                Our Values
              </h2>
              <p className="text-md md:text-md mb-4 ">
                <strong className="font-extrabold text-custom-blue">
                  Accountability:
                </strong>
                We accept responsibility for our actions and make business
                decisions based on experience and good judgment.
              </p>
              <p className="text-md md:text-md mb-4">
                <strong className="font-extrabold text-custom-blue">
                  Customer Service Excellence:
                </strong>
                We are committed to satisfying customer needs and honoring the
                commitments we make to them.
              </p>
              <p className="text-md md:text-md mb-4">
                <strong className="font-extrabold text-custom-blue">
                  Teamwork:
                </strong>
                We believe in teamwork for efficient and effective delivery of
                our services.
              </p>
              <p className="text-md md:text-md mb-4">
                <strong className="font-extrabold text-custom-blue">
                  Integrity:
                </strong>
                We act with honesty and integrity, never compromising the truth.
              </p>
              <p className="text-md md:text-md mb-4">
                <strong className="font-extrabold text-custom-blue">
                  Respect:
                </strong>
                We give the utmost respect to our stakeholders at all times.
              </p>
              <p className="text-md md:text-md">
                <strong className="font-extrabold text-custom-blue">
                  Reliability:
                </strong>
                We deliver as per our promise.
              </p>
            </div>
          </div>
        </main>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 md:px-8 bg-slate-100">
        
      </section>
    </>
  )
}

export default Body
