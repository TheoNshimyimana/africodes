import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

const Customers = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1024px)',
  })
  const isLaptop = useMediaQuery({ query: '(min-width: 1025px)' })

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : isLaptop ? 4 : 3,
    slidesToScroll: isMobile ? 1 : isTablet ? 2 : isLaptop ? 4 : 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <section className="mx-4 md:mx-9 bg-slate-300 mt-8 pt-8 pb-10 scroll-animate">
      <h1 className="font-bold text-custom-blue text-4xl text-center mb-10">
        Our Customers
      </h1>
      <div className="relative">
        <Slider {...settings} className="mt-10">
          <img src={Brd} alt="Customer Logo" className="max-w-[80%] mx-auto" />
          <img src={Bpr} alt="Customer Logo" className="max-w-[80%] mx-auto" />
          <img src={Kcb} alt="Customer Logo" className="max-w-[80%] mx-auto" />
          <img src={Ncb} alt="Customer Logo" className="max-w-[80%] mx-auto" />
          <img src={Nmb} alt="Customer Logo" className="max-w-[80%] mx-auto" />
          <img
            src={Tropical}
            alt="Customer Logo"
            className="max-w-[80%] mx-auto"
          />
          <img src={Sbm} alt="Customer Logo" className="max-w-[80%] mx-auto" />
          <img
            src={Stanbank}
            alt="Customer Logo"
            className="max-w-[80%] mx-auto"
          />
          <img src={Ba} alt="Customer Logo" className="max-w-[80%] mx-auto" />
          <img src={Trop} alt="Customer Logo" className="max-w-[80%] mx-auto" />
        </Slider>
      </div>
    </section>
  )
}

export default Customers
