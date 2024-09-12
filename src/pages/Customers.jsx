

import { useMediaQuery } from 'react-responsive'

import Brd from '../assets/brd.jpg'
import Bpr from '../assets/bpr.webp'
import Ncb from '../assets/ncba2.png'
import Kcb from '../assets/kcb2.jpg'
import Nmb from '../assets/nmb1.jpg'
import Tropical from '../assets/tropical.png'
import Sbm from '../assets/sbm..jpg'
import Stanbank from '../assets/stanbank.png'
import Ba from '../assets/ba.jpg'
import Trop from '../assets/trop.png'

import Nerma from '../assets/Nerma.jpeg'
import E_solution from '../assets/E-solution.jpeg'
import Ckg from '../assets/Ckg.jpg'
import Usi from '../assets/Usi.jpeg'
import Degree from '../assets/45-Degres.jpeg'

const Customers = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1024px)',
  })
  const isLaptop = useMediaQuery({ query: '(min-width: 1025px)' })

  return (
    <section className="mx-4 md:mx-9 bg-slate-300 mt-8 pt-8 pb-10 scroll-animate">
      <h1 className="font-bold text-custom-blue text-4xl mt-10 text-center mb-10">
        Our Customers
      </h1>
      <div className="flex-wrap grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4 gap-6">
        <img
          src={Brd}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Bpr}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Kcb}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Ncb}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Nmb}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Tropical}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Sbm}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Stanbank}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Ba}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Trop}
          alt="Customer Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
      </div>
      <h1 className="font-bold text-custom-blue text-4xl mt-10 text-center mb-10">
        Our Partners
      </h1>
      <div className="flex-wrap grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4 gap-6">
        <img
          src={Degree}
          alt="Partner Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Nerma}
          alt="Partner Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={E_solution}
          alt="Partner Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Ckg}
          alt="Partner Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
        <img
          src={Usi}
          alt="Partner Logo"
          className="w-44 h-24 object-cover mx-auto"
        />
      </div>
    </section>
  )
}

export default Customers
