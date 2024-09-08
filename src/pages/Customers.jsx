

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


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



function Customers() {


    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
    }

    return (
      <section className="mx-9 scroll-animate mb-20 bg-slate-300 mt-8 pt-8">
        <h1 className="font-bold text-custom-blue text-4xl text-center mb-10">
          Our Customers
        </h1>
        <Slider {...settings} className="mt-10">
        <img src={Brd} alt="" className="max-w-80" />
        <img src={Bpr} alt="" className="max-w-80" />
        <img src={Kcb} alt="" className="max-w-80" />
        <img src={Ncb} alt="" className="max-w-80" />
        <img src={Nmb} alt="" className="max-w-80" />
        <img src={Tropical} alt="" className="max-w-80" />
        <img src={Sbm} alt="" className="max-w-80" />
        <img src={Stanbank} alt="" className="max-w-80" />
        <img src={Ba} alt="" className="max-w-80" />
        <img src={Trop} alt="" className="max-w-80" />
        </Slider>
      </section>
    )
}

export default Customers
