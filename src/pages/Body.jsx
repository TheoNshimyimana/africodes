import banner from '../images/banner.jpg'

function Body() {
  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Home Section */}
      <main
        id="home"
        className="flex  flex-col md:flex-row justify-between items-center md:space-y-0 md:space-x-4 pt-2 pl-6 py-0 z-0 scroll-animate bg-slate-100"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-semibold text-blue-700 text-2xl md:text-3xl lg:text-4xl">
            Africode Consultancy Ltd
          </h1>
          <p className="mt-4 leading-10 text-slate-600 text-base md:text-lg">
            Africode Consultancy specializes in ICT consultancy, advisory
            services, capacity building, and training. We simplify enterprise
            technology and offer high-quality services at affordable prices. Our
            approach is centered on understanding and meeting our client's
            specific business needs, guided by strong business principles and a
            commitment to quality. We focus on integrating human capital
            development with our business culture to provide tailored solutions.
            Our experienced management and technical expertise ensure efficient
            and professional services, aligning with data-driven organizations
            to optimize business outcomes.
          </p>
          <div className="text-center md:text-left mt-10">
            <button
              onClick={scrollToServices}
              className="flex items-center justify-center text-white bg-blue-700 font-semibold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-800"
            >
              What We Offer
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

      {/* About Section */}
      <section id="about" className=" pt-12 px-4 md:px-8 bg-slate-100">
        <h1 className="font-semibold  text-custom-blue text-center text-xl md:text-2xl lg:text-3xl mb-10">
          About Us
        </h1>
        <main className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1 bg-custom-green text-black p-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div>
                <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
                  Our Mission
                </h2>
                <p className="leading-relaxed text-base md:text-lg">
                  To empower people and businesses through excellently tailored
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-custom-yellow text-black p-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div>
                <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
                  Our Vision
                </h2>
                <p className="leading-relaxed text-base md:text-lg">
                  To be the preferred ICT consultancy company of choice in the
                  banking and financial services industry.
                </p>
              </div>
            </div>

            {/* Values Card */}
          </div>

          {/* Mission Card */}
          <div className="flex-1 bg-custom-black text-white p-6 rounded-lg shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div>
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
                Our Values
              </h2>
              <p className=" text-sm md:text-md mb-4">
                <strong className="font-bold">Accountability: </strong>
                We accept responsibility for our actions and make business
                decisions based on experience and good judgment.
              </p>
              <p className=" text-sm md:text-md mb-4">
                <strong className="font-bold">
                  Customer Service Excellence :
                </strong>
                We are committed to satisfying customer needs and honoring the
                commitments we make to them.
              </p>
              <p className=" text-sm md:text-md mb-4">
                <strong className="font-bold">Teamwork: </strong> We believe in
                teamwork for efficient and effective delivery of our services.
              </p>
              <p className=" text-sm md:text-md mb-4">
                <strong className="font-bold">Integrity:</strong> We act with
                honesty and integrity, never compromising the truth.
              </p>
              <p className=" text-sm md:text-md mb-4">
                <strong className="font-bold">Respect: </strong> We give the
                utmost respect to our stakeholders at all times.
              </p>
              <p className=" text-sm md:text-md">
                <strong className="font-bold">Reliability: </strong> We deliver
                as per our promise.
              </p>
            </div>
          </div>
        </main>
      </section>

      {/* Services Section */}
      <section id="services" className=" px-4 md:px-8 bg-slate-100">
        {/* Your services content here */}
      </section>
    </>
  )
}

export default Body
